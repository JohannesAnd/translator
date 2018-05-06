import React, { Component } from 'react';
import { ipcRenderer as Ipc } from 'electron';
import { connect } from '@cerebral/react';
import { signal, state } from 'cerebral/tags';

import computeKeys from '../common/computed/keys';

import {
  ListItem,
  KeyList,
  Translations,
  Menu,
  HeaderWrapper,
  H3
} from './elements';

import EditModal from './EditModal';

export default connect(
  {
    content: state`content`,
    filename: state`filename`,
    setContent: signal`setContent`
  },
  class App extends Component {
    componentDidMount() {
      Ipc.on('file-opened', (event, filename, content) => {
        this.props.setContent({ content, filename });
      });

      Ipc.on('file-saved', event => {
        console.log('got save message', event.sender);
        event.sender.send('file-content', JSON.stringify(this.props.content));
      });
    }
    render() {
      return (
        <div>
          <EditModal />
          <HeaderWrapper>
            <h1>{'Key overview'}</h1>
            <H3>{this.props.filename}</H3>
          </HeaderWrapper>
          <Menu />
          <KeyList />
          <Translations />
        </div>
      );
    }
  }
);
