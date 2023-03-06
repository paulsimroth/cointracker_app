import React from "react";
import { View, Text, Image } from "react-native";
import CoinDetailHeader from "./components/CoinDetailHeader";
import Coin from '../../../assets/data/crypto.json';

const CoinDetailScreen = () => {

    const { 
        image: { small }, 
        name,
        symbol,
        market_data: { market_cap_rank },
    } = Coin;

    return (
        <View >
            <CoinDetailHeader 
                image={small} 
                name={name} 
                symbol={symbol} 
                marketCapRank={market_cap_rank}
            />
        </View>
    );
};

export default CoinDetailScreen;