import styled from 'styled-components';

import KeyListComponent from './KeyList';
import TranslationsComponent from './Translations';
import MenuComponent from './Menu';

export const ListItem = styled.li`
  color: ${({ color }) => color};
`;

export const H3 = styled.h3`
  margin: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const KeyList = styled(KeyListComponent)``;

export const Translations = styled(TranslationsComponent)``;

export const Menu = styled(MenuComponent)``;
