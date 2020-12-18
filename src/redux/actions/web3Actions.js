import { INITIALIZE_WEB3 } from '../types';

export const initializeWeb3 = instance => ({
  type: INITIALIZE_WEB3,
  payload: instance
});
