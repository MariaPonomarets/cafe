import { css } from 'styled-components';

export const container = css`
  height: 40px;
  margin: 10px 20px;
  background-color: ${({ theme }) => theme.inputBgLight};
  border-radius: 4px;
  border-color: ${({ theme }) => theme.borderColor};
  border-width: 1px;
  padding-left: 15px;
`;

export const errorText = css`
  color: ${({ theme }) => theme.errorColor}
  font-size: 12px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -10px;
  text-align: right;
`;