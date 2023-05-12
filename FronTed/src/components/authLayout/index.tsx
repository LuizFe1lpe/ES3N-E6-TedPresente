import { Loader } from "@components/loader";
import { colors } from "@shared/themes/colors";
import { ReactNode } from "react";
import styled from "styled-components";
import LayoutSvg from "../../assets/layout.webp";

interface Props {
	children: ReactNode;
	loader?: boolean;
}

export const AuthLayout = ({ children, loader }: Props) => {
	return (
		<Container>
			{loader ? (
				<Loader />
			) : (
				<>
					<ImageContainer imgUrl={LayoutSvg} />
					<FormArea>{children}</FormArea>
				</>
			)}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: flex-start;
`;

const ImageContainer = styled.div<{ imgUrl: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55%;
	height: 100%;
	background: url(${({ imgUrl }) => imgUrl});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

const FormArea = styled.div`
	display: flex;
	width: 45%;
	background-color: ${colors.background};
	height: 100vh;
`;
