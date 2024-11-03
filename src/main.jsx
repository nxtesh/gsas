import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ia7eik2xnmbl064p.us.auth0.com"
    clientId="NBss7TxRrSBapXPzkngTNIv6vIdyCcgU"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
