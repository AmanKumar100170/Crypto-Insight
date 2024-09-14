import CryptoCoinList from "./CryptoCoinList";

function CoinListing({ coinArray = [] }){

    return (
        <>
            <ul>
                {coinArray.map(coin => 
                    (
                        <li> 
                            <CryptoCoinList 
                                id={coin.id} 
                                symbol={coin.symbol} 
                                priceChange1h={coin.priceChange1h} 
                                priceChange1d={coin.priceChange1d} 
                                priceChange1w={coin.priceChange1w} 
                                price={coin.price} 
                                marketCap={coin.marketCap} 
                                volume24h={coin.volume24h} 
                            />
                        </li>
                    )
                )}
            </ul>
        </ >
    )
}

export default CoinListing;