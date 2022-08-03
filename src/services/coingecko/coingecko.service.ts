import { SUPPORTED_FIAT } from '@/constants/currency';
import { PriceService } from './api/price.service';
import { coingeckoClient } from './coingecko.client';

export const getNativeAssetId = (chainId: string): string => {
  const mapping = {
    '1': 'ethereum',
    '42': 'ethereum',
    '137': 'matic-network',
    '42161': 'ethereum',
    '42220': 'celo',
    '100': 'gnosis',
    '2222' : 'kava',
  };

  return mapping[chainId] || 'ethereum';
};

export const getPlatformId = (chainId: string): string => {
  const mapping = {
    '1': 'ethereum',
    '42': 'ethereum',
    '100': 'xdai',
    '137': 'polygon-pos',
    '42161': 'arbitrum-one',
    '42220': 'celo',
    '2222' : 'kava',
  };

  return mapping[chainId] || 'ethereum';
};

export class CoingeckoService {
  supportedFiat: string;
  prices: PriceService;

  constructor(
    public readonly client = coingeckoClient,
    priceServiceClass = PriceService
  ) {
    this.supportedFiat = SUPPORTED_FIAT.join(',');
    this.prices = new priceServiceClass(this);
  }
}

export const coingeckoService = new CoingeckoService();
