function GeneralCryptoStats({ 
    marketCap, 
    marketCapChange, 
    volume, 
    volumeChange, 
    btcDominance, 
    btcDominanceChange 
}){
    return (
        <div>

            <div>
                <h1>Market Cap</h1>
                <span>{`₹${marketCap}`}</span>
                <span>{`₹${marketCapChange}`}</span>
            </div>

            <div>
                <h1>Volume 24h</h1>
                <span>{`₹${volume}`}</span>
                <span>{`₹${volumeChange}`}</span>
            </div>

            <div>
                <h1>BTC Dominance</h1>
                <span>{`${btcDominance}%`}</span>
                <span>{`${btcDominanceChange}%`}</span>
            </div>

        </div>
    )
}

export default GeneralCryptoStats;