import { AuthLayout } from "@components/authLayout";
import { MainButton } from "@components/button";
import { Input } from "@components/input";
import Label from "@components/label";
import { colors } from "@shared/themes/colors";
import { fontConfig } from "@themes/fonts";
import { FormEvent, useState } from "react";
import { FormHookType } from "@shared/types";
import { Container, Form, Row, Spacer } from "./styles";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
	const navigate = useNavigate();

	const [loader, setLoader] = useState<boolean>(false);
	const [email, setEmail] = useState<FormHookType>({ value: "" });
	const [confirmEmail, setConfirmEmail] = useState<FormHookType>({
		value: "",
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoader(true);

		if (email.value.length === 0) {
			setEmail({ error: true, msg: "email:required"!, value: email.value });
		}

		if (confirmEmail.value.length === 0) {
			setConfirmEmail({
				error: true,
				msg: "email:required"!,
				value: email.value,
			});
		}

		if (email.value.length === 0 || confirmEmail.value.length === 0) {
			return setLoader(false);
		}

		navigate("/codEmail");
		setLoader(false);
	};

	return (
		<AuthLayout loader={loader}>
			<Container>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Label size={20} marg='35px 0px 0px 0px' color={colors.primary}>
						{"TED PRESENTES"}
					</Label>
					<Label
						size={20}
						marg='35px 0px 0px 0px'
						color={colors.darkblue}
						fontFamily={fontConfig.weight.bold}
					>
						{"Esqueceu a Senha?"}
					</Label>
					<Label
						size={18}
						marg='35px 0px 0px 0px'
						color={colors.black}
						width={70}
						textAlign={"center"}
					>
						{"Digite o e-mail"}
					</Label>
					<Input
						label={"Digite seu e-mail"}
						onChange={(ev) => {
							setEmail({ error: false, value: ev.target.value });
						}}
						value={email.value}
						type={"text"}
					/>
					<Input
						label={"Digite o e-mail novamente"}
						onChange={(ev) => {
							setConfirmEmail({ error: false, value: ev.target.value });
						}}
						value={confirmEmail.value}
						type={"text"}
					/>
					<Row>
						<Label size={12} onClick={() => navigate("/")} cursor='pointer'>
							{"Lembrei a senha"}
						</Label>
					</Row>
					<Spacer />
					<MainButton label={"Enviar"} />
				</Form>
			</Container>
		</AuthLayout>
	);
};

export default ForgotPass;
