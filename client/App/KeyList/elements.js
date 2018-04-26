import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const TableItem = styled.td`
  padding: 10px;
  color: ${({ color }) => color};
  cursor: pointer;
`;

export const Wrapper = styled.div``;

export const TableWrapper = styled.div`
  height: 300px;
  width: 100%;
  overflow-y: scroll;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const TableBody = styled.tbody`
  & > tr:nth-child(even) {
    background-color: lightgray;
  }
`;

export const TableRow = styled.tr`
  padding: 5px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'inherit')};
`;

export const TableHeader = styled.thead`
  font-weight: bold;
  background-color: lightgray;
`;

export const TableTitle = styled.th``;
