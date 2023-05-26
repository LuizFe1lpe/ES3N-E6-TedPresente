import { Container, BoxComponent, GeneralContainer, SideMenu } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import { charge } from "../../service/requests/charge";
import { merit } from "../../service/requests/merit";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
} from "victory";
import { useEffect, useState } from "react";
import { Charge } from "./types";
import LockIcon from "@mui/icons-material/Lock";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";
import CircularProgress from "@mui/material/CircularProgress";

export default function Dashboard() {
  const [refresh, setRefresh] = useState(true);
  const [saldoGeral, setSaldoGeral] = useState<Charge[]>([]);
  const [saldoDist, setSaldoDist] = useState<Charge[]>([]);
  const saldoInterno = [{ interno: 2, saldo: saldoGeral[1]?.saldo }];
  const saldoExterno = [{ externo: 3, saldo: saldoGeral[2]?.saldo }];
  const saldoIndividual = [{ individual: 1, saldo: saldoGeral[0]?.saldo }];
  const distInterno = [{ interno: 2, saldo: saldoDist[1]?.saldo }];
  const distExterno = [{ externo: 3, saldo: saldoDist[2]?.saldo }];
  const distIndividual = [{ individual: 1, saldo: saldoDist[0]?.saldo }];
  const tipoUsuario = useSelector(
    (state: RootState) => state.user.tipoUsuario?.descTipoUsuario
  );

  const id = useSelector((state: RootState) => state.user.id);

  useEffect(() => {
    if (refresh) {
      charge
        .getChargeByUser(id)
        .then((response) => {
          const { data } = response;
          setSaldoGeral(data);
        })
        .then(() => {
          setRefresh(false);
        });
      merit
        .getDistByUser(id)
        .then((response) => {
          const { data } = response;
          setSaldoDist(data);
        })
        .then(() => {
          setRefresh(false);
        });
    }
  }, [id, refresh]);

  return (
    <GeneralContainer>
      <SideMenu>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <ShowChartIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <SettingsIcon />
        </IconButton>
      </SideMenu>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Container>
          <BoxComponent>
            {tipoUsuario === "Funcionario" ? (
              <LockIcon sx={{ fontSize: 70 }} style={{ marginTop: "24%" }} />
            ) : (
              <>
                <h1>Carga</h1>
                {refresh ? (
                  <CircularProgress />
                ) : (
                  <>
                    <VictoryChart
                      domainPadding={30}
                      theme={VictoryTheme.material}
                      maxDomain={{ y: 10000 }}
                    >
                      <VictoryAxis dependentAxis tickFormat={(x) => x} />
                      <VictoryAxis
                        tickValues={[1, 2, 3]}
                        tickFormat={["Individual", "Interno", "Externo"]}
                      />
                      <VictoryStack>
                        <VictoryBar
                          data={saldoIndividual}
                          x="individual"
                          y="saldo"
                          style={{
                            data: {
                              fill: "#133777",
                              stroke: "black",
                              strokeWidth: 1,
                            },
                          }}
                        />
                        <VictoryBar
                          data={saldoInterno}
                          x="interno"
                          y="saldo"
                          style={{
                            data: {
                              fill: "#133777",
                              stroke: "black",
                              strokeWidth: 1,
                            },
                          }}
                        />
                        <VictoryBar
                          data={saldoExterno}
                          x="externo"
                          y="saldo"
                          style={{
                            data: {
                              fill: "#133777",
                              stroke: "black",
                              strokeWidth: 1,
                            },
                          }}
                        />
                      </VictoryStack>
                    </VictoryChart>
                  </>
                )}
              </>
            )}
          </BoxComponent>
          <BoxComponent>
            {tipoUsuario === "Funcionario" ? (
              <LockIcon sx={{ fontSize: 70 }} style={{ marginTop: "24%" }} />
            ) : (
              <>
                <h1>Distribuído</h1>
                {refresh ? (
                  <CircularProgress />
                ) : (
                  <>
                    <VictoryChart
                      domainPadding={30}
                      theme={VictoryTheme.material}
                      maxDomain={{ y: 10000 }}
                    >
                      <VictoryAxis dependentAxis tickFormat={(x) => x} />
                      <VictoryAxis
                        tickValues={[1, 2, 3]}
                        tickFormat={["Individual", "Interno", "Externo"]}
                      />
                      <VictoryStack>
                        <VictoryBar
                          data={distIndividual}
                          x="individual"
                          y="saldo"
                          style={{
                            data: {
                              fill: "#133777",
                              stroke: "black",
                              strokeWidth: 1,
                            },
                          }}
                        />
                        <VictoryBar
                          data={distInterno}
                          x="interno"
                          y="saldo"
                          style={{
                            data: {
                              fill: "#133777",
                              stroke: "black",
                              strokeWidth: 1,
                            },
                          }}
                        />
                        <VictoryBar
                          data={distExterno}
                          x="externo"
                          y="saldo"
                          style={{
                            data: {
                              fill: "#133777",
                              stroke: "black",
                              strokeWidth: 1,
                            },
                          }}
                        />
                      </VictoryStack>
                    </VictoryChart>
                  </>
                )}
              </>
            )}
          </BoxComponent>
        </Container>
      </div>
    </GeneralContainer>
  );
}
