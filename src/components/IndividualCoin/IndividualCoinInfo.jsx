import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import coinstatsopenapi from '@api/coinstatsopenapi';

function IndividualCoinInfo(){
    const {coin} = useLocation();
    const [coinInfo, setCoinInfo] = useState({});
    const {rank, icon, name, symbol, price, volume, marketCap, availableSupply, totalSupply, fullyDilutedValuation, priceChange1h, priceChange1d, priceChange1w} = coinInfo;

    useEffect(() => {
        coinstatsopenapi.auth('Q/v7w6/unYmf04dVtsvdLi/D+Jfk2nl44jgJnBAY5jo=');
        coinstatsopenapi.getCoinById({currency: 'INR', coinId: {coin}})
        .then(({ response }) => JSON.parse(response))
        .then(data => setCoinInfo(data))
        .catch(err => console.log(err));
    });

    return (
        <div>

            <div>
                <div>{`Rank #${rank}`}</div>
                <h1>
                    <span>
                        <img src={icon} />
                    </span>
                    <span>{name}</span> 
                    Price •
                    <span>{symbol}</span>
                </h1>
                <div>{`₹${price.toFixed(2)}`} <span>{`${priceChange1d}`}</span></div>
            </div>

            <div>
                <h1>Market Stats</h1>
                <div>
                    <div>
                        <h1>Market Cap</h1>
                        <div>{`₹${marketCap / 1000000000000}T`}</div>
                    </div>

                    <div>
                        <h1>Fully Diluted Valuation</h1>
                        <div>{`₹${fullyDilutedValuation / 1000000000000}T`}</div>
                    </div>

                    <div>
                        <h1>Circulating Supply</h1>
                        <div>{availableSupply}</div>
                    </div>

                    <div>
                        <h1>Total Supply</h1>
                        <div>{totalSupply}</div>
                    </div>

                    <div>
                        <h1>Volume 24h</h1>
                        <div>{`₹${volume / 1000000000000}T`}</div>
                    </div>

                    <div>
                        <h1>{`Price Change (1h)`}</h1>
                        <div>{`${priceChange1h}%`}</div>
                    </div>

                    <div>
                        <h1>{`Price Change (24h)`}</h1>
                        <div>{`${priceChange1d}%`}</div>
                    </div>

                    <div>
                        <h1>{`Price Change (7d)`}</h1>
                        <div>{`${priceChange1w}%`}</div>
                    </div>
                </div>
            </div>

            <div>
                <h1><span>name</span> Price Update</h1>
                <div>{`${name} price is ₹${price}, up ${priceChange1d}% in the last 24 hours, and the live market cap is ₹${marketCap}. It has circulating supply of ${availableSupply} ${symbol} coins and a max supply of ${totalSupply} ${symbol} alongside ₹${volume} 24h trading volume.`}</div>
            </div>

        </div>
    )
}

export default IndividualCoinInfo;