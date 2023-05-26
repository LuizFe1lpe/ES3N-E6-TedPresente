import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../service/store";
import { singout } from "../../../service/store/features/userSlices";
import { ButtonStyle, SideMenu } from "./styles";

export default function SideBar() {
	const permission = useSelector(
		(state: RootState) => state.user.tipoUsuario?.id
	);

	const dispatch = useDispatch();

	const logout = (e) => {
		e.preventDefault();
		dispatch(singout());
	};

	return (
		<SideMenu>
			<Link to='/recompensas' className='logo'></Link>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
					justifyContent: "start",
					gap: "41px",
					marginTop: "5rem",
				}}
			>
				<Link to='/cliente' className='menu'>
					<Typography fontWeight={400} fontSize={16} className='menu'>
						Clientes
					</Typography>
				</Link>

				{/* {permission === 1 && (
					<Link to='/dashboard' className='menu'>
						<Typography fontWeight={400} fontSize={16} className='menu'>
							Dashboard
						</Typography>
					</Link>
				)}
				{permission === 1 ? (
					<>
						<Link to='/distribuicao' className='menu'>
							<Typography fontWeight={400} fontSize={16} className='menu'>
								Distribuição
							</Typography>
						</Link>
						<Link to='/carga' className='menu'>
							<Typography fontWeight={400} fontSize={16} className='menu'>
								Carga
							</Typography>
						</Link>
					</>
				) : (
					<></>
				)}
				{permission === 2 || permission === 3 ? (
					<>
						<Link to='/distribuicao' className='menu'>
							<Typography fontWeight={400} fontSize={16} className='menu'>
								Distribuição
							</Typography>
						</Link>
					</>
				) : (
					<></>
				)} */}

				{/* {permission !== 1 ? (
					<Link to='/extrato' className='menu'>
						<Typography fontWeight={400} fontSize={16} className='menu'>
							Extrato
						</Typography>
					</Link>
				) : null} */}
				{/* <Link to='/recompensas' className='menu'>
					<Typography fontWeight={400} fontSize={16} className='menu'>
						Catálogo de Recompensas
					</Typography>
				</Link>
				{permission === 1 ? (
					<Link to='/historico' className='menu'>
						<Typography fontWeight={400} fontSize={16} className='menu'>
							Histórico
						</Typography>
					</Link>
				) : null} */}
			</div>
			<Link to='/' className='menu'>
				Logout
			</Link>
		</SideMenu>
	);
}
