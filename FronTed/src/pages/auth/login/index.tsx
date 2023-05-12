import { AuthLayout } from "@components/authLayout";
import { MainButton } from "@components/button";
import { Input } from "@components/input";
import Label from "@components/label";
import { SignInProps, useAuth } from "@context/auth";
import { colors } from "@shared/themes/colors";
import { FormEvent, useState } from "react";
import { FormHookType } from "@shared/types";
import { Container, Form, Row, Spacer } from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const { signIn } = useAuth();
	const [user, setUser] = useState<FormHookType>({ value: "" });
	const [password, setPassword] = useState<FormHookType>({
		value: "",
	});
	const [loader, setLoader] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoader(true);

		if (user.value.length === 0) {
			setUser({ error: true, msg: "E-mail Incorreto"!, value: user.value });
		}

		if (password.value.length === 0) {
			setPassword({
				error: true,
				msg: "Senha Incorreta",
				value: password.value,
			});
		}

		if (user.value.length === 0 || password.value.length === 0) {
			return setLoader(false);
		}

		let params: SignInProps = {
			profilePicture: "https://picsum.photos/100/100",
			token: "Katchau!Katchuca!Frachesco Virgolini!",
			username: "EuSouAVelocidade",
		};

		signIn(params);
		setLoader(false);
	};

	return (
		<AuthLayout loader={loader}>
			<Container>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Label size={20} marg='35px 0px 0px 0px' color={colors.primary}>
						{"TED PRESENTES"}
					</Label>
					<Input
						label={"Digite seu email"}
						onChange={(ev) => {
							setUser({ error: false, value: ev.target.value });
						}}
						value={user.value}
						type='text'
						error={user.error}
						errorMessage={user.msg}
					/>
					<Input
						label={"Digite sua senha"}
						onChange={(ev) => {
							setPassword({ error: false, value: ev.target.value });
						}}
						value={password.value}
						error={password.error}
						type={"password"}
						errorMessage={password.msg}
					/>
					<Row>
						<Label
							size={12}
							onClick={() => navigate("/forgotPassword")}
							cursor='pointer'
						>
							{"Esqueceu a senha?"}
						</Label>
					</Row>
					<Spacer />
					<MainButton label={"ENVIAR"} />
				</Form>
			</Container>
		</AuthLayout>
	);
};

export default Login;
