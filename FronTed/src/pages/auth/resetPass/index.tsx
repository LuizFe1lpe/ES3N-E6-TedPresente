import { AuthLayout } from "@components/authLayout";
import { MainButton } from "@components/button";
import { Input } from "@components/input";
import Label from "@components/label";
import { colors } from "@shared/themes/colors";
import { fontConfig } from "@themes/fonts";
import { FormEvent, useState } from "react";
import { FormHookType } from "@shared/types";
import { Container, Form, Spacer } from "./styles";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
	const navigate = useNavigate();

	const [loader, setLoader] = useState<boolean>(false);
	const [password, setPassword] = useState<FormHookType>({ value: "" });
	const [confirmPassword, setConfirmPassword] = useState<FormHookType>({
		value: "",
	});

	const handleChangePassword = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoader(true);

		if (password.value.length === 0) {
			setPassword({
				error: true,
				msg: "password:required"!,
				value: password.value,
			});
		}

		if (confirmPassword.value.length === 0) {
			setPassword({
				error: true,
				msg: "password:required"!,
				value: confirmPassword.value,
			});
		}

		if (password.value.length === 0 || confirmPassword.value.length === 0) {
			return setLoader(false);
		}

		navigate("/");
		setLoader(false);
	};

	return (
		<AuthLayout loader={loader}>
			<Container>
				<Form onSubmit={(e) => handleChangePassword(e)}>
					<Label
						size={20}
						marg='35px 0px 0px 0px'
						color={colors.darkblue}
						fontFamily={fontConfig.weight.bold}
					>
						{"Resetar a senha"}
					</Label>
					<Input
						label={"Digite a nova senha"}
						onChange={(ev) => {
							setPassword({ error: false, value: ev.target.value });
						}}
						value={password.value}
						type={"password"}
					/>
					<Input
						label={"Digite a nova senha novamente"}
						onChange={(ev) => {
							setConfirmPassword({ error: false, value: ev.target.value });
						}}
						value={confirmPassword.value}
						type={"password"}
					/>
					<Spacer />
					<MainButton label={"Ok"} />
				</Form>
			</Container>
		</AuthLayout>
	);
};

export default ResetPass;
