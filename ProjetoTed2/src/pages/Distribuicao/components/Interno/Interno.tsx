import { TextField } from "@mui/material";
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

export default function Interno() {
  const [motivo, setMotivo] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [funcionario, setFuncionario] = useState<number>();
  const [currency, setCurrency] = useState<Currency[]>([]);
  const [employeeSelect, setEmployeeSelect] = useState<EmployeeSelect[]>([]);
  const [reload, setReload] = useState(false);
  const [rawDepartment, setRawDepartment] = useState<DepartmentI[]>([]);
  const user = useSelector((state: RootState) => state.user.id);
  const userFuncionario = useSelector(
    (state: RootState) => state.user.funcionario.id,
  );
  const userEmail = useSelector((state: RootState) => state.user.email);
  const userPermission = useSelector(
    (state: RootState) => state.user.tipoUsuario?.id,
  );
  const [defaultDepartament, setDefaultDepartament] =
    useState(clearDepartament);
  const [defaultFuncionario, setDefaultFuncionario] =
    useState(clearFuncionario);

  const clearFields = () => {
    setMotivo("");
    setQuantidade("");
    setDefaultDepartament({ id: 0, descDepartamento: "" });
    setDefaultFuncionario({ id: 0, nome: "" });
    setEmployeeSelect([]);
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
          id: 2,
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
          charge.getCurrencyGeral(userFuncionario).then((response) => {
            const { data } = response;
            setCurrency(data);
            setReload(false);
          });
      }
    };

    checkValidation(userPermission);
    employee.departamentByEmail(userEmail).then((response) => {
      const { data } = response;
      employee.byDepartment(data).then((response) => {
        const { data } = response;
        setEmployeeSelect(data);
      });
    });
    department.findAll().then((response) => {
      const { data } = response;
      setRawDepartment(data);
    });
  }, [userEmail, user, userPermission, reload, userFuncionario]);

  return (
    <>
      <ContainerSaldo>
        <p>Saldo: {currency[1]?.saldo}</p>
      </ContainerSaldo>
      <ContainerMenu>
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
          style={{ width: "85%" }}
          type="number"
        />
        <p>Motivo*</p>
        <TextField
          onChange={(e) => setMotivo(e.target.value)}
          value={motivo}
          id="outlined-basic"
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
