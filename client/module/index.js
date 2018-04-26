import { Module } from 'cerebral';

import * as sequences from './sequences';

export default Module({
  state: {
    filename: ' ',
    content: '',
    selectedKey: '',
    filtered: false,
    textFilter: ''
  },
  signals: {
    setContent: sequences.setContent,
    keyClicked: sequences.keyClicked,
    filterClicked: sequences.filterClicked,
    sendContent: sequences.sendContent,
    textFilterChanged: sequences.textFilterChanged
  },
  modules: {},
  providers: {},
  catch: []
});
