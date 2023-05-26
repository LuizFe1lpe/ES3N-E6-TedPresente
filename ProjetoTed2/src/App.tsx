import { AuthProvider } from "./service/validation/auth";
import Routes from "./routes";
import "./styles/GlobalStyles.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import { store } from "./service/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
          <ToastContainer limit={1} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
