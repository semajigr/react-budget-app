import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContex";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CurrencyContextProvider>
    <BudgetContextProvider>
      <GlobalStyles />
      <App />
    </BudgetContextProvider>
  </CurrencyContextProvider>
);
