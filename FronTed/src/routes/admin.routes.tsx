import { Navigate, Route, Routes } from "react-router-dom";

const AdminRoutes = () => (
	<Routes>
		<Route path='*' element={<Navigate to='/home' />} />
	</Routes>
);
export default AdminRoutes;
