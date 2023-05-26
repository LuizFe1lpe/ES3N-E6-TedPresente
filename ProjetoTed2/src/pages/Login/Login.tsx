import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { FormContainer, MainContainer } from "./styles";
import TextField from "@mui/material/TextField";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { fetchDataLogin } from "../../service/store/features/userSlices";
import { getMail, getPassword } from "./utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";

export default function Login() {
	const [loginEmail, setLoginEmail] = useState<string>(getMail);
	const [senha, setSenha] = useState<string>(getPassword);
	const [salvar, setSalvar] = useState<boolean>(false);
	const dispatch = useDispatch();
	const error = useSelector((state: RootState) => state.user.error);
	const [inputType, setInputType] = useState("password");

	function showPassword() {
		setInputType("text");
	}

	function hidePassword() {
		setInputType("password");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			fetchDataLogin({
				email: loginEmail,
				senha: senha,
				funcionario: { id: 1 },
			})
		);
	};

	useEffect(() => {
		const verifyLocalSave = (save: boolean) => {
			if (save) {
				localStorage.setItem("@InfoUser:mail", `${loginEmail}`);
				localStorage.setItem("@InfoUser:password", `${senha}`);
			}
		};
		verifyLocalSave(salvar);
	}, [salvar, loginEmail, senha]);
	return (
		<>
			<MainContainer>
				<FormContainer>
					<Typography variant='h2' fontWeight={700} fontSize={36}>
						TED PRESENTES
					</Typography>
					<Typography
						variant='h3'
						fontWeight={700}
						fontSize={18}
						color={"#00000099"}
					>
						Bem vindo de volta! Por favor faça login na sua conta
					</Typography>
					<form className={"login-container"}>
						<div className='input-forms'>
							<div className='input-forms'>
								<TextField
									className='input-field'
									label='Email'
									onChange={(e) => setLoginEmail(e.target.value)}
									value={loginEmail}
								/>
								<TextField
									className='input-field'
									label='Senha'
									type={inputType}
									id='inputPassword'
									onChange={(e) => setSenha(e.target.value)}
									value={senha}
								></TextField>
							</div>
							{error ? (
								<div
									style={{
										color: "#e74c3c",
										display: "flex",
										alignItems: "center",
										fontFamily: "Roboto",
									}}
								>
									Email ou senha invalido!
								</div>
							) : null}

							<div>
								<Link
									to='/recuperar'
									style={{
										display: "flex",
										justifyContent: "space-between",
										width: "400px",
										alignItems: "center",
										textDecoration: "none",
										color: "#00000099",
									}}
								>
									Esqueceu a senha?
								</Link>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								color: "#00000099",
								justifyContent: "center",
								gap: "33px",
							}}
							className='form-button'
						>
							<Button onClick={handleSubmit} variant='outlined'>
								Login
							</Button>
						</div>
					</form>
				</FormContainer>
			</MainContainer>
		</>
	);
}
