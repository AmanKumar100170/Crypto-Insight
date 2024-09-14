function MainCryptoInfo({ marketCap, marketCapChange, volume, btcDominance }){
    return (
        <div>
            <h1>Today's Crypto Prices by Market Cap</h1>
            <p>The worldwide cryptocurrency market capitalization today stands at an estimated {`₹${(marketCap * 83) / 1000000000000}`} , seeing a {`${marketCapChange}%`} movement over the last 24 hours. The total cryptocurrency trading volume in the past day is roughly {`₹${(volume * 83) / 1000000000000}`}. Bitcoin's market dominance is at about {`${btcDominance}%`}.</p>
        </div>
    )
}

return MainCryptoInfo;