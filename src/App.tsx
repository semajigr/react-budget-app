import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { StyledWrapper } from "./ui/styles";

export const App = () => {
  return (
    <StyledWrapper>
      <Header />
      <Main />
    </StyledWrapper>
  );
};
