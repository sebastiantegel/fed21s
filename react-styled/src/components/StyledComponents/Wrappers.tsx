import styled from "styled-components";

interface IMovieWrapperProps {
  selected: boolean;
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MovieWrapper = styled.div`
  width: 30%;

  background-color: ${(props: IMovieWrapperProps) =>
    props.selected ? "red" : "transparent"};
`;

export const ImageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
