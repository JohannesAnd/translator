import { Controller } from 'cerebral';
import Devtools from 'cerebral/devtools';

import appModule from './module';

export default Controller(appModule, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
});
