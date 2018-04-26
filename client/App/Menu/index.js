import React from 'react';
import { connect } from '@cerebral/react';
import { signal, state } from 'cerebral/tags';

import { Wrapper, Button, Input } from './elements';

export default connect(
  {
    textFilter: state`textFilter`,
    filtered: state`filtered`,
    selectedKey: state`selectedKey`,
    filterClicked: signal`filterClicked`,
    textFilterChanged: signal`textFilterChanged`
  },
  function Menu({
    className,
    filtered,
    filterClicked,
    selectedKey,
    textFilter,
    textFilterChanged
  }) {
    return (
      <Wrapper className={className}>
        <Button onClick={() => filterClicked()}>
          {filtered ? 'Show all keys' : 'Show missing keys'}
        </Button>
        <Input
          type={'text'}
          placeholder={'Search for key...'}
          value={textFilter}
          onChange={e => textFilterChanged({ text: e.target.value })}
        />
      </Wrapper>
    );
  }
);
