import Select from "react-select";
import { Currency } from "../../config";
import { Badge } from "../Badge/Badge";
import { Remaining } from "../Remaining/Remaining";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { StyledHeader } from "./styles";

export interface IOption {
  value: Currency;
  label: string;
}

export const Header = () => {
  const options: IOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBP, label: "GBP" },
  ];

  return (
    <>
      <StyledHeader>
        <Title />
        <Select options={options} defaultValue={options[0]} />
      </StyledHeader>
      <Badge />
      <Remaining />
      <Spent />
    </>
  );
};
