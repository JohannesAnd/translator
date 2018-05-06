import { set, toggle, when } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

import * as actions from './actions';

export const setContent = [
  set(state`content`, props`content`),
  set(state`filename`, props`filename`)
];

export const keyClicked = [set(state`selectedKey`, props`key`)];

export const filterClicked = toggle(state`filtered`);

export const sendContent = [
  set(props`content`, state`content`),
  actions.sendContent
];

export const textFilterChanged = [set(state`textFilter`, props`text`)];

export const editClicked = [
  set(state`editKey`, props`selectedKey`),
  set(state`editLanguage`, props`language`),
  when(props`hasText`),
  {
    true: set(
      state`editText`,
      state`content.${props`language`}.phrases.${props`selectedKey`}`
    ),
    false: set(state`editText`, '')
  }
];

export const editSaveClicked = [
  set(
    state`content.${state`editLanguage`}.phrases.${state`editKey`}`,
    state`editText`
  ),
  set(state`editKey`, null),
  set(state`editLanguage`, null)
];

export const setValue = set(state`${props`key`}`, props`value`);
