import { AuthProvider } from "@context/auth";
import "@themes/global.styles.css";
import "./assets/fonts/TextaAltBold.ttf";
import "./assets/fonts/TextaAltMedium.ttf";
import "./assets/fonts/TextaAltRegular.ttf";
import Routes from "./routes";

function App() {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
}

export default App;
