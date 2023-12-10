import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import CssBaseline from "@mui/material/CssBaseline"
import "@fontsource/courgette"
import "@fontsource/oswald"
import "@fontsource/roboto"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

/*
 TODO:
 - NavLink nie podświetla nawigacji
 - Footer powinno przyklejać się do dółu strony
 - brzydkie zdjęcie "Zdjecia dostępne wkrótce"
 - dostosować rozmiar hero, ogólnie spojrzeć na scaling
 - handle not matched yacht url in Yacht.tsx
 - parsowanie html w technical data
*/
