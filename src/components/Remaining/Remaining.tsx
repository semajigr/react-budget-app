import React, { useContext } from "react";
import { BudgetContex } from "../../context/BudgetContext/BudgetContex";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();
  const { budget } = useContext(BudgetContex);

  return (
    <StyledRemaining>
      <h2>
        Remaining: {currency}
        {budget}
      </h2>
    </StyledRemaining>
  );
};
