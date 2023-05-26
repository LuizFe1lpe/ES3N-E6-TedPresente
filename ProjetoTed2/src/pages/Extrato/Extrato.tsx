import { useEffect, useState } from "react";
import { Container, CurrencySt } from "./styles";
import TableListData from "../../components/TableData";
import { employee } from "../../service/requests/employee";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";
import { ExtractI } from "./types";

export default function Extrato() {
  const [extract, setExtract] = useState<ExtractI>();
  const idUser = useSelector((state: RootState) => state.user.funcionario.id);
  const permission = useSelector(
    (state: RootState) => state.user.tipoUsuario?.id
  );

  useEffect(() => {
    const validation = (permission?: number) => {
      switch (permission) {
        case 1:
          employee.extractAdm().then((response) => {
            const { data } = response;
            setExtract(data);
          });
          break;
        default:
          employee.extract(idUser).then((response) => {
            const { data } = response;
            setExtract(data);
          });
          break;
      }
    };
    validation(permission);
  }, [idUser, permission]);

  return (
    <Container>
      <CurrencySt>Saldo: {extract?.saldo}</CurrencySt>
      <TableListData
        title="Extrato"
        data={extract?.movimentacao || []}
        columns={[
          { title: "Data", field: "data" },
          { title: "Operação", field: "tipoOperacao" },
          { title: "Descricao", field: "descricao" },
          { title: "Origem", field: "origem" },
          { title: "Departamento", field: "departamento" },
          { title: "Quantidade", field: "quantidade" },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
        style={{
          color: "#133777",
        }}
      />
    </Container>
  );
}
