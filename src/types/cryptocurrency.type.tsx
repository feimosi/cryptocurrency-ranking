import { FiatCurrency } from './fiatCurrency.type';

export class Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  dateAdded: Date;
  numMarketPairs: number;
  cmcRank: number;
  lastUpdated: Date;
  quote: {
    [prop in FiatCurrency]: {
      price: number;
      volume24h: number;
      percentChange1h: number;
      percentChange24h: number;
      percentChange7d: number;
      marketCap: number;
      lastUpdated: Date;
    };
  };
}
