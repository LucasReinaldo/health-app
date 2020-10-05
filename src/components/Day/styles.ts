import styled, { css } from 'styled-components/native';

interface ActiveProps {
  isActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View<ActiveProps>`
  border-radius: 8px;
  padding: 5px;

  ${(props) =>
    props.isActive &&
    css`
      background-color: 'rgba(255, 255, 255, 0.291821)';
    `}
`;

export const Week = styled.Text`
  color: #fff;
`;
