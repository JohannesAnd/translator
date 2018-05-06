import styled from 'styled-components';

export const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  &:nth-child(even) {
    background-color: lightgray;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const LanguageCode = styled.p`
  width: 50px;
  margin: 0;
  font-weight: bold;
  color: ${({ valid }) => (valid ? 'green' : 'red')};
`;

export const Translation = styled.p``;

export const Header = styled.h2`
  text-align: center;
`;

export const Edit = styled.button`
  align-self: center;
`;
