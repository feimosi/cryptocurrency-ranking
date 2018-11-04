import { RootState } from 'state/reducers';

export const getCurrentFiatCurrency = (state: RootState) => state.global.currentFiatCurrency;
