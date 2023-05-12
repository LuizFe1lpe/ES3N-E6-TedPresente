import ForgotPass from "@pages/auth/forgotPass";
import Login from "@pages/auth/login";
import ResetPass from "@pages/auth/resetPass";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoutes = () => (
	<Routes>
		<Route path='*' element={<Navigate to='/login' />} />
		<Route path='/login' element={<Login />} />
		<Route path='/forgotPassword' element={<ForgotPass />} />
		<Route path='/resetPassword' element={<ResetPass />} />
	</Routes>
);
export default AuthRoutes;
