import { useAuth } from "@context/auth";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./admin.routes";

import AuthRoutes from "./auth.routes";

const Routes = () => {
	const { logged } = useAuth();
	return (
		<BrowserRouter>
			{" "}
			<AuthRoutes />
		</BrowserRouter>
	);
};

export default Routes;
