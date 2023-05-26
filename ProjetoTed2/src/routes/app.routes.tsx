import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Carga from "../pages/Carga";
import Dashboard from "../pages/Dashboard";
import Distribuicao from "../pages/Distribuicao";
import Extrato from "../pages/Extrato";
import Historico from "../pages/Historico";
import Recompensas from "../pages/Recompensas";
import Usuario from "../pages/Usuario";
import Terceiro from "../pages/Terceiro";
import Cliente from "../pages/Terceiro";
import Login from "../pages/Login";

const AppRoutes = () => (
	<Layout>
		<Routes>
			{/* <Route path="/" element={<Dashboard />} /> */}
			{/* 	<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/' element={<Recompensas />} />
			<Route path='/distribuicao' element={<Distribuicao />} />
			<Route path='/recompensas' element={<Recompensas />} />
			<Route path='/carga' element={<Carga />} />
			<Route path='/extrato' element={<Extrato />} />
			<Route path='/usuario' element={<Usuario />} />
			<Route path='/historico' element={<Historico />} /> */}
			{/* <Route path='/terceiro' element={<Terceiro />} /> */}
			<Route path='/cliente' element={<Cliente />} />
			<Route path='/' element={<Login />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	</Layout>
);

export default AppRoutes;
