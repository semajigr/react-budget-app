import React, { useContext } from "react";
import { BudgetContex } from "../../context/BudgetContext/BudgetContex";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  const { budget } = useContext(BudgetContex);

  return (
    <StyledSpent>
      <h2>
        Spent so far: {currency}
        {budget}
      </h2>
    </StyledSpent>
  );
};
