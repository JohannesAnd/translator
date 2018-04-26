import { set, toggle } from 'cerebral/operators';
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
