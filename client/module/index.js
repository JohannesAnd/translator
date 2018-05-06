import { Module } from 'cerebral';

import * as sequences from './sequences';

export default Module({
  state: {
    filename: ' ',
    content: '',
    selectedKey: '',
    filtered: false,
    textFilter: '',
    editKey: null,
    editLanguage: null
  },
  signals: {
    setContent: sequences.setContent,
    keyClicked: sequences.keyClicked,
    filterClicked: sequences.filterClicked,
    sendContent: sequences.sendContent,
    textFilterChanged: sequences.textFilterChanged,
    editClicked: sequences.editClicked,
    editSaveClicked: sequences.editSaveClicked,
    set: sequences.setValue
  },
  modules: {},
  providers: {},
  catch: []
});
