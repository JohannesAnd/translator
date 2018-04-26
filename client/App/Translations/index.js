import React, { Component } from 'react';
import { connect } from '@cerebral/react';
import { signal, state } from 'cerebral/tags';

import computeTranslations from 'computed/translations';

import {
  Wrapper,
  Language,
  LanguageCode,
  Translation,
  Header
} from './elements';

export default connect(
  {
    translations: computeTranslations
  },
  function App({ className, translations }) {
    return (
      <Wrapper>
        <Header>{'Translations'}</Header>
        {translations.map(({ language, translation }) => (
          <Language
            key={language}
            color={'black'}
            onClick={() => keyClicked({ key })}
          >
            <LanguageCode valid={translation}>{language}</LanguageCode>
            <Translation>{translation}</Translation>
          </Language>
        ))}
      </Wrapper>
    );
  }
);
