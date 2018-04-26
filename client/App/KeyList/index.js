import React, { Component } from 'react';
import { connect } from '@cerebral/react';
import { signal, state } from 'cerebral/tags';

import computeKeys from 'computed/keys';

import {
  Wrapper,
  Table,
  TableBody,
  TableRow,
  TableItem,
  TableWrapper,
  TableHeader,
  TableTitle
} from './elements';

export default connect(
  {
    keys: computeKeys,
    selectedKey: state`selectedKey`,
    keyClicked: signal`keyClicked`
  },
  function App({
    className,
    keys,
    keyClicked,
    filtered,
    filterClicked,
    selectedKey
  }) {
    return (
      <Wrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                <TableTitle>{'Key'}</TableTitle>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map(({ key, color }) => (
                <TableRow key={key} selected={key === selectedKey}>
                  <TableItem color={color} onClick={() => keyClicked({ key })}>
                    {key}
                  </TableItem>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Wrapper>
    );
  }
);
