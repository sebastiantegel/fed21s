import styled from "styled-components";

interface IStyledInputProps {}

export const StyledInput = styled.input.attrs((props: IStyledInputProps) => ({
  type: "text",
}))`
  padding: 1rem;
`;

export const StyledPassword = styled(StyledInput).attrs({
  type: "password",
})``;
