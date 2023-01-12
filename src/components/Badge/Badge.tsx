import { useContext, useState } from "react";
import { BudgetContex } from "../../context/BudgetContext/BudgetContex";
import { useCurrencyContext } from "../../context/CurrencyContext/hooks";
import { useToggle } from "../../hooks/useToggle";
import { Button, StyledBadge } from "./styles";

export const Badge = () => {
  const { currency } = useCurrencyContext();
  const { budget, setBudget } = useContext(BudgetContex);
  const [editToggle, saveToggle] = useToggle();

  return (
    <StyledBadge>
      <h2>
        Budget: {currency}
        {budget}
      </h2>
      <Button>Edit</Button>
    </StyledBadge>
  );
};
