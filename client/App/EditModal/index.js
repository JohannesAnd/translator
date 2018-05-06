import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import { Wrapper, Title, TextBox, Button } from './elements';

export default connect(
  {
    editKey: state`editKey`,
    editLanguage: state`editLanguage`,
    editText: state`editText`,
    set: signal`set`,
    editSaveClicked: signal`editSaveClicked`
  },
  function({ editKey, editLanguage, editText, set, editSaveClicked }) {
    if (!editKey || !editLanguage) {
      return null;
    }

    return (
      <Wrapper>
        <Title>{`${editKey} in ${editLanguage}`}</Title>
        <TextBox
          value={editText}
          rows={20}
          onChange={e => set({ key: 'editText', value: e.target.value })}
        />
        <Button onClick={() => editSaveClicked()}>{'Save'}</Button>
      </Wrapper>
    );
  }
);
