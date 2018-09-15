import { css } from 'styled-components';

export const container = css`
  height: 40px;
  margin: 10px 20px;
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const text = css`
  font-size: 16px;
  color: ${({ theme }) => theme.colorLight}
  text-align: center;
`;
