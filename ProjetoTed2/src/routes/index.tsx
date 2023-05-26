import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useSelector } from "react-redux";
import { RootState } from "../service/store";

const Routes = () => {
	/* const { logged } = useSelector((state: RootState) => state.user); */
	const logged = true;

	return (
		<BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
	);
};

export default Routes;
