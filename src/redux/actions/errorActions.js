import {
  LOADING_ERROR,
  CLEAR_ERROR_SAGA
 } from '../types';

export const errorActionCreator = (error) => ({
  type: LOADING_ERROR,
  error: true,
  payload: error
});

export const clearError = () => ({
  type: CLEAR_ERROR_SAGA
});
