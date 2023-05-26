import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Recuperar from "../pages/Login/Recuperar";
import Cliente from "../pages/Terceiro";

const AuthRoutes = () => (
	<Routes>
		<Route path='/' element={<Login />} />
		<Route path='/recuperar' element={<Recuperar />} />
		<Route path='*' element={<Navigate to='/' />} />
		<Route path='/cliente' element={<Cliente />} />
	</Routes>
);

export default AuthRoutes;
