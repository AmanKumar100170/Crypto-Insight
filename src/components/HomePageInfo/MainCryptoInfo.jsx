function MainCryptoInfo({ marketCap, marketCapChange, volume, btcDominance }){
    return (
        <div>
            <h1>Today's Crypto Prices by Market Cap</h1>
            <p>The worldwide cryptocurrency market capitalization today stands at an estimated {`₹${marketCap}`} , seeing a {`${marketCapChange}%`} movement over the last 24 hours. The total cryptocurrency trading volume in the past day is roughly {`₹${volume}`}. Bitcoin's market dominance is at about {`${btcDominance}%`}.</p>
        </div>
    )
}

return MainCryptoInfo;