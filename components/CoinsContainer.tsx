import { useEffect, useState } from 'react';
import { StyledCoinContainer, CoinContainer } from '../styles/CoinsContainer';
import { ICoin } from '../libraries/globalInterfaces';
import coinsLogos from '../data/coinsLogos';
import Image from 'next/image';
import dogecoin from '../media/dogecoin.png';
import solanacoin from '../media/solanacoin.png';
import { ctcnTokenInstance } from '../libraries/cognitoCTCNAPI';
import { formatCurrency } from '../libraries/formatter';

const CoinsContainer = () => {
  const initialCoins = [
    {
      base_token: 'BTC',
      quantity: '1',
      date_updated: '1661464550912',
      sell_price: '21564.94',
      quote_token: 'USD',
      date_updated_str: '2022-08-25T21:55:50.000000',
      token_name: 'Bitcoin',
      buy_price: '21582.53',
      status: 'OK'
    }
  ];
  const [coins, setCoins] = useState<ICoin[]>(initialCoins);
  const getCoinsData = async () => {
    try {
      const res = await ctcnTokenInstance.get('/tokens');
      setCoins(res.data);
    } catch (err) {
      console.error('Failed to fetch coins data', err);
    }
  };
  useEffect(() => {
    getCoinsData();
  }, []);
  return (
    <StyledCoinContainer>
      {coins &&
        coins.map((coin) => {
          const currentCoin = coinsLogos.filter(
            (coinLogo) => coinLogo.base_token === coin.base_token
          );
          return (
            <CoinContainer key={coin.base_token}>
              <div className="coin-logo">
                <Image src={currentCoin[0].logo} alt="" />
              </div>
              <div className="coin-info">
                <h3 className="coin-name">{coin.token_name}</h3>
                <p className="coin-data">
                  1 {coin.base_token} = ${formatCurrency(coin.sell_price)}
                </p>
              </div>
            </CoinContainer>
          );
        })}
      <CoinContainer>
        <div className="coin-logo">
          <Image src={dogecoin} alt="" />
        </div>
        <div className="coin-info">
          <h3 className="coin-name">Dogecoin</h3>
          <p className="coin-data">COMING SOON</p>
        </div>
      </CoinContainer>
      <CoinContainer>
        <div className="coin-logo">
          <Image src={solanacoin} alt="" />
        </div>
        <div className="coin-info">
          <h3 className="coin-name">Solana</h3>
          <p className="coin-data">COMING SOON</p>
        </div>
      </CoinContainer>
    </StyledCoinContainer>
  );
};

export default CoinsContainer;
