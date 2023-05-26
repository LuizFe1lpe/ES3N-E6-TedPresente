import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Submit from "../../../../components/Button";
import { toastfyError, toastfySuccess } from "../../../../components/Toastfy";
import { charge } from "../../../../service/requests/charge";
import { department } from "../../../../service/requests/department";
import { DepartmentI } from "../../../../service/requests/department/types";
import { employee } from "../../../../service/requests/employee";
import { merit } from "../../../../service/requests/merit";
import { MeritPayload } from "../../../../service/requests/merit/types";
import { RootState } from "../../../../service/store";
import { Currency, EmployeeSelect } from "../../types";
import { ContainerMenu, ContainerSaldo } from "./styles";

const clearDepartament = {
  id: 0,
  descDepartamento: "",
};

const clearFuncionario = {
  id: 0,
  nome: "",
};

export default function Individual() {
  const [motivo, setMotivo] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [funcionario, setFuncionario] = useState<number>();
  const [rawDepartment, setRawDepartment] = useState<DepartmentI[]>([]);
  const [currency, setCurrency] = useState<Currency[]>([]);
  const [employeeSelect, setEmployeeSelect] = useState<EmployeeSelect[]>([]);
  const [reload, setReload] = useState(false);
  const [defaultDepartament, setDefaultDepartament] =
    useState(clearDepartament);
  const [defaultFuncionario, setDefaultFuncionario] =
    useState(clearFuncionario);
  const [formValue, setFormValue] = useState<string>("sim");

  const user = useSelector((state: RootState) => state.user.id);
  const userFuncionario = useSelector(
    (state: RootState) => state.user.funcionario.id,
  );
  const userPermission = useSelector(
    (state: RootState) => state.user.tipoUsuario?.id,
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((event.target as HTMLInputElement).value);
    setDefaultFuncionario({ id: 0, nome: "" });
    setDefaultDepartament({ id: 0, descDepartamento: "" });

    if (formValue === "nao") {
      department.findAll().then((response) => {
        const { data } = response;
        setRawDepartment(data);
      });
    } else {
      employee.findAll().then((response) => {
        const { data } = response;
        setEmployeeSelect(data);
      });
    }
  };

  const clearFields = () => {
    setMotivo("");
    setQuantidade("");
    setDefaultDepartament({ id: 0, descDepartamento: "" });
    setDefaultFuncionario({ id: 0, nome: "" });
    if (formValue === "sim") {
      setEmployeeSelect([]);
    }
  };
  const handleSubmit = () => {
    const payload: MeritPayload = {
      funcionario: {
        id: Number(funcionario),
      },
      meritoDistribuido: {
        motivo: motivo,
        quantidade: Number(quantidade),
        tipoMerito: {
          id: 1,
        },
        usuario: {
          id: user,
        },
      },
      permission: userPermission,
    };

    if (motivo.length >= 20) {
      payload?.permission === 1
        ? merit
            .post(payload)
            .then(() => {
              toastfySuccess("Merito distribuido com sucesso!");
            })
            .catch(() => {
              toastfyError("Erro ao distribuir Merito!");
            })
        : merit
            .postDist(payload)
            .then(() => {
              toastfySuccess("Merito distribuido com Sucesso!");
            })
            .catch(() => {
              toastfyError("Erro ao distribuir merito!");
            });
      clearFields();
      setReload(true);
    } else {
      toastfyError("O tamanho mínimo para o motivo é de 20 caracteres!");
    }
  };

  useEffect(() => {
    const checkValidation = (userType?: number) => {
      switch (userType) {
        case 1:
          return charge.getCurrencyAdm().then((response) => {
            const { data } = response;
            setCurrency(data);
            setReload(false);
          });
        default:
          return charge.getCurrencyGeral(userFuncionario).then((response) => {
            const { data } = response;
            setCurrency(data);
            setReload(false);
          });
      }
    };
    checkValidation(userPermission);
    department.findAll().then((response) => {
      const { data } = response;
      setRawDepartment(data);
    });
  }, [user, userPermission, reload, userFuncionario]);

  return (
    <>
      <ContainerSaldo>
        <p>Saldo: {currency[0]?.saldo}</p>
      </ContainerSaldo>
      <ContainerMenu>
        <RadioGroup
          row
          name="use-radio-group"
          onChange={handleChange}
          value={formValue}
        >
          <FormControlLabel
            value="sim"
            label="Por depart."
            control={<Radio />}
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="nao"
            label="Todos"
            control={<Radio />}
            labelPlacement="bottom"
          />
        </RadioGroup>
        {formValue === "sim" ? (
          <>
            <p>Departamento*</p>
            <Autocomplete
              disablePortal
              getOptionLabel={(option) => option.descDepartamento}
              options={rawDepartment}
              value={defaultDepartament}
              onChange={(event, value) => {
                employee.byDepartment([{ id: value?.id }]).then((response) => {
                  setEmployeeSelect([]);
                  const { data } = response;
                  setEmployeeSelect(data);
                  if (value?.id !== undefined) {
                    setDefaultDepartament({
                      id: value.id,
                      descDepartamento: value?.descDepartamento,
                    });
                  }
                });
              }}
              style={{ width: "85%" }}
              renderInput={(params) => <TextField {...params} />}
            />
          </>
        ) : null}
        <p>Funcionario*</p>
        <Autocomplete
          disablePortal
          getOptionLabel={(option) => option.nome}
          options={employeeSelect}
          value={defaultFuncionario}
          onChange={(event, value) => {
            setFuncionario(value?.id);
            if (value?.id !== undefined) {
              setDefaultFuncionario({ id: value.id, nome: value?.nome });
            }
          }}
          style={{ width: "85%" }}
          renderInput={(params) => <TextField {...params} />}
        />
        <p>Quantidade*</p>
        <TextField
          onChange={(e) => setQuantidade(e.target.value)}
          value={quantidade}
          id="outlined-basic"
          variant="outlined"
          type="number"
          style={{ width: "85%" }}
        />
        <p>Motivo*</p>
        <TextField
          onChange={(e) => setMotivo(e.target.value)}
          value={motivo}
          id="outlined-basic"
          variant="outlined"
          multiline
          rows={4}
          style={{ width: "85%" }}
          label={"Mínimo de 20 caracteres"}
          inputProps={{ maxLength: 300 }}
        />
        <Submit
          styles={{ marginBottom: "1%" }}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Confirmar
        </Submit>
      </ContainerMenu>
    </>
  );
}
