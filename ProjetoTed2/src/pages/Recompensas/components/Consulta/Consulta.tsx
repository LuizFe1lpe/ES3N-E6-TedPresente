import {
  ButtonDiv,
  Container,
  ContainerItem,
  ContainerMenu,
  ContainerSaldo,
  ResgateDiv,
  Select,
} from "./styles";
import { Box, Modal, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { RootState } from "../../../../service/store";
import { useSelector } from "react-redux";
import { toastfyError, toastfySuccess } from "../../../../components/Toastfy";
import { charge } from "../../../../service/requests/charge";
import { CurrencyI } from "../../types";
import { DonationI, RewardI } from "../../../../service/requests/reward/types";
import { reward } from "../../../../service/requests/reward";
import { ItemReward } from "./types";
import ItemCard from "../../../../components/ItemCard";
import Pagination from "../../../../components/Pagination";
import DonationCard from "../../../../components/DonationCard";
//todo: Remover
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  height: "570px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
};

const modalObj = {
  imagem: "",
  valor: 0,
  nome: "",
};

export default function Consulta() {
  const [valorDoado, setValorDoado] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [openDoacao, setOpenDoacao] = useState(false);
  const [currency, setCurrency] = useState<CurrencyI[]>([]);
  const [rescue, setRescue] = useState<RewardI>();
  const [reload, setReload] = useState(false);
  const [itemReward, setItemReward] = useState<ItemReward[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>();
  const user = useSelector((state: RootState) => state.user.funcionario.id);
  const [modalInfo, setModalInfo] = useState(modalObj);
  const [display, setDisplay] = useState<string>("none");
  const [donation, setDonation] = useState<DonationI>();
  const [escolhido, setEscolhido] = useState<string | null>(null);

  const handlePurchase = () => {
    reward
      .post(rescue)
      .then(() => {
        toastfySuccess("Item Resgatado com Sucesso!!");
        setReload(true);
      })
      .catch(() => {
        toastfyError("Saldo insuficiente!!");
      });
    handleClose();
  };

  const handleOpen = (
    id: number,
    imagem: string,
    valor: number,
    nome: string
  ) => {
    setModalInfo({
      imagem,
      valor,
      nome,
    });

    setRescue({
      funcionario: {
        id: user,
      },
      recompensa: {
        id: id,
      },
    });
    setOpen(true);
  };

  const handleDonation = () => {
    reward
      .novaDoacao(donation)
      .then(() => {
        toastfySuccess("Doação realizada com Sucesso!!");
        setReload(true);
      })
      .catch(() => {
        toastfyError("Saldo insuficiente!!");
      });
      setDisplay("none");
      setValorDoado("");
      handleCloseDoacao();
  };

  const handleOpenDoacao = (
    imagem: string,
    valor: number,
    nome: string,
    instituicao: string | null
  ) => {
    if (!isNaN(parseInt(nome)) && instituicao != null){
      setModalInfo({
        imagem,
        valor,
        nome
      });

      setDonation({
        funcionario: {
          id: user,
        },
        valor: parseInt(valorDoado),
        instituicao: instituicao
      })
  
      setOpenDoacao(true);
    }    
  };

  const handleClose = () => setOpen(false);

  const handleCloseDoacao = () => {
    setDisplay("none")
    setValorDoado("")
    setEscolhido(null)
    setOpenDoacao(false)
  };

  const handleInputDonation = () => {
    if (display === "none") {
      setValorDoado("")
      setDisplay("flex")
    } else {
      setValorDoado("")
      setDisplay("none")
    };
  }

  useEffect(() => {
    charge.getCurrencyGeral(user).then((response) => {
      const { data } = response;
      setCurrency(data);
      setReload(false);
    });
    
    reward.pageList(page - 1, 6).then((response) => {
      const { data } = response;
      setItemReward(data);
    }).then(()=>{
      reward.getSize().then((response) => {
        const { data } = response;
        setPageSize(Math.ceil((data + 1) / 6));
      });
    });

    
  }, [user, reload, page]);

  return (
    <Container>
      <ContainerSaldo>
        <div style={{padding: "0", alignItems: "center"}}>Saldo: {currency[0]?.saldo} </div>
        <div style={{display: display, width: "250px", alignItems:"center", padding: "0"}}>
          <Select onChange={texto => setEscolhido(texto.target.value)}>
                    <option value=''>Instituições</option>
                    <option value='APAC Apoio ao Paciente com Câncer Boituva'>APAC Apoio ao Paciente com Câncer Boituva</option>
                    <option value='APAE Boituva Associação de Pais e Amigos dos Excepcionais'>APAE Boituva Associação de Pais e Amigos dos Excepcionais</option>
                    <option value='GPACI Sorocaba Grupo de Pesquisa e Assistência ao Câncer Infantil'>GPACI Sorocaba Grupo de Pesquisa e Assistência ao Câncer Infantil</option>
                    <option value='Chácara Nova Vida Boituva'>Chácara Nova Vida Boituva</option>
                    <option value='Iran Bispo Protetor de Animais Boituva'>Iran Bispo Protetor de Animais Boituva</option>
                    <option value='Criança Esperança'>Criança Esperança</option>
          </Select>
        </div>
        <div style={{display: display, padding: "0", alignItems: "center"}}>
          <input onChange={(e) => setValorDoado(e.target.value)} value={valorDoado} />
          <Button
            onClick={() => handleOpenDoacao('', parseInt(valorDoado), valorDoado, escolhido)}
            variant="contained"
            type="submit"
            style={{borderRadius:0,textTransform:'none', color:'#ffffff',backgroundColor: '#133777'}}
          >
            Doar
          </Button>
        </div>
      </ContainerSaldo>
      {itemReward.length <= 0 ? (
        <div style={{ textAlign: "center" }}>Carregando...</div>
      ) : (
        <>
          <ContainerMenu>            
            <ContainerItem>
              {page !== 1 ? <></> : <DonationCard onClick={handleInputDonation}/>}
              {itemReward.map((item) => {
                return (
                  <ItemCard
                    title={item.nome}
                    alt={item.nome}
                    price={item.valor}
                    src={item.imagem}
                    key={item.id}
                    onClick={() =>
                      handleOpen(item.id, item.imagem, item.valor, item.nome)
                    }
                  />
                );
              })}
            </ContainerItem>
          </ContainerMenu>
          <Pagination setPage={setPage} page={page} pageCounter={pageSize} />
        </>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box" sx={style}>
          <img
            src={require("../../../../images/template.png")}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              width: "auto",
              height: "100%",
              position: "absolute",
              borderRadius: "10px",
            }}
            alt={"voucher"}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "relative",
                top: "51%",
                left: "18%",
                fontFamily: "Roboto",
              }}
            >
              <img
                src={require("../../../../images/VoucherAzul.png")}
                style={{
                  left: "-29px",
                  width: "250px",
                  position: "absolute",
                  height: "auto",
                  bottom: "-20px",
                }}
                alt={"ticket"}
              />
              <div
                style={{
                  transform: "rotate(-5.3deg)",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    color: "#fff",
                  }}
                >
                  Este voucher
                  <br /> corresponde à<br /> seguinte troca
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#fff",
                    marginLeft: "5px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontWeight: "900",
                      fontSize: "46px",
                      bottom: "15px",
                      margin: "auto"
                    }}
                  >
                    {modalInfo.valor}
                  </div>
                  <div
                    style={{
                      left: "6px",
                      fontSize: "23px",
                      fontWeight: "900",
                      position: "relative",
                      bottom: "25px",
                    }}
                  >
                    méritos
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "15px 0px 0px 240px",
                  position: "absolute"
                }}
              >
                <div
                  style={{
                    fontWeight: "900",
                    borderRadius: "20px",
                    padding: "2px 30px 5px 30px",
                    color: "white",
                    background: "#133777",
                    fontSize: "20px",
                  }}
                >
                  <p>Prêmio:</p>
                </div>        
              </div>
              <img
                src={`data:image/png;base64,${modalInfo.imagem}`}
                style={{
                  left: "47.5%",
                  position: "absolute",
                  bottom: "-60%",
                  width: "25%"
                }}
                alt={"voucher2"}
              />
            </div>
            <ResgateDiv>
              <p>Deseja Resgatar?</p>
              <ButtonDiv>
                <button onClick={handlePurchase}>Sim</button>
                <button onClick={handleClose}>Não</button>
              </ButtonDiv>
            </ResgateDiv>
          </div>
        </Box>
      </Modal>
      
      <Modal
        open={openDoacao}
        onClose={handleCloseDoacao}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box" sx={style}>
          <img
            src={require("../../../../images/template.png")}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              width: "auto",
              height: "100%",
              position: "absolute",
              borderRadius: "10px",
            }}
            alt={"voucher"}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "relative",
                top: "51%",
                left: "18%",
                fontFamily: "Roboto",
              }}
            >
              <img
                src={require("../../../../images/VoucherAzul.png")}
                style={{
                  left: "-29px",
                  width: "250px",
                  position: "absolute",
                  height: "auto",
                  bottom: "-20px",
                }}
                alt={"ticket"}
              />
              <div
                style={{
                  transform: "rotate(-5.3deg)",
                  display: "flex",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    color: "#fff",
                  }}
                >
                  Este voucher
                  <br /> corresponde à<br /> seguinte troca
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#fff",
                    marginLeft: "5px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontWeight: "900",
                      fontSize: "46px",
                      bottom: "15px",
                      margin: "auto"
                    }}
                  >
                    {modalInfo.valor}
                  </div>
                  <div
                    style={{
                      left: "6px",
                      fontSize: "23px",
                      fontWeight: "900",
                      position: "relative",
                      bottom: "25px",
                    }}
                  >
                    méritos
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "15px 0px 0px 55px",
                }}
              >
                <div
                  style={{
                    fontWeight: "900",
                    borderRadius: "20px",
                    padding: "2px 30px 5px 30px",
                    color: "white",
                    background: "#133777",
                    fontSize: "20px",
                  }}
                >
                  <p>Doar: {'R$' + modalInfo.valor * 10 + ',00'}</p>
                </div>        
              </div>
            </div>
            <ResgateDiv>
              <p>Deseja Doar?</p>
              <ButtonDiv>
                <button onClick={handleDonation}>Sim</button>
                <button onClick={handleCloseDoacao}>Não</button>
              </ButtonDiv>
            </ResgateDiv>
          </div>
        </Box>
      </Modal>
    </Container>
  );
}
