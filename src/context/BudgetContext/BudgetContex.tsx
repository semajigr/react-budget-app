import { createContext, FC, ReactNode, useState } from "react";

interface IBudgetContext {
  budget: number;
  setBudget: (budget: number) => void;
}

export const BudgetContex = createContext<IBudgetContext>({} as IBudgetContext);

const useContextBudget = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>({
    budget: 0,
    setBudget: (newBudget) => {
      setBudgetContext((ctx) => ({ ...ctx, budget: newBudget }));
    },
  });

  return budgetContext;
};

export const BudgetContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <BudgetContex.Provider value={useContextBudget()}>
      {children}
    </BudgetContex.Provider>
  );
};
