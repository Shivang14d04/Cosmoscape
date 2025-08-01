import { createRoot } from "react-dom/client"
import {StrictMode} from "react"
import App from "./App.tsx"

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Root element with id 'root' not found");
}
createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);



