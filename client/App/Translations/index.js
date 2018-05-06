import React, { Component } from 'react';
import { connect } from '@cerebral/react';
import { signal, state } from 'cerebral/tags';

import computeTranslations from 'computed/translations';

import {
  Wrapper,
  Language,
  LanguageCode,
  Translation,
  Header,
  Edit
} from './elements';

export default connect(
  {
    selectedKey: state`selectedKey`,
    editClicked: signal`editClicked`,
    translations: computeTranslations
  },
  function App({ className, translations, selectedKey, editClicked }) {
    return (
      <Wrapper>
        <Header>{'Translations'}</Header>
        {translations.map(({ language, translation }) => (
          <Language key={language} color={'black'}>
            <LanguageCode valid={translation}>{language}</LanguageCode>
            <Translation>{translation}</Translation>
            <Edit
              onClick={() =>
                editClicked({
                  selectedKey,
                  language,
                  hasText: Boolean(translation)
                })
              }
            >
              {'Edit'}
            </Edit>
          </Language>
        ))}
      </Wrapper>
    );
  }
);
