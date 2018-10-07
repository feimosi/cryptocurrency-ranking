import { createAction } from 'typesafe-actions';

export const sampleAction = createAction('Global / Sample action', resolve =>
  resolve,
);
