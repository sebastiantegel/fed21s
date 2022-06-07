import styled, { keyframes } from "styled-components";

interface IButtonProps {
  color?: string;
  background?: string;
}

const rotation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
  color: ${(props: IButtonProps) => props.color || "black"};
  background-color: ${(props: IButtonProps) => props.background || "white"};
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;

  animation: ${rotation} 2s linear infinite;
`;

export const SaveButton = styled(Button)`
  color: green;
  background-color: turquoise;
`;
