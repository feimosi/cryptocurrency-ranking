import { RootState } from 'state/reducers';

export const getCurrentFlatCurrency = (state: RootState) => state.global.currentFlatCurrency;
