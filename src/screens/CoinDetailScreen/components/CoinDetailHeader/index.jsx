import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from "./styles";

const CoinDetailHeader = (props) => {

  const { image, name, symbol, marketCapRank} = props;

  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }}/>
        <Text style={styles.tickerTitle}>{symbol.toLocaleUpperCase()}</Text>
        <View style={styles.rankCointainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>#{marketCapRank}</Text>
        </View>
      </View>
      <FontAwesome5 name="user-circle" size={30} color="white" />
    </View>
  )
};

export default CoinDetailHeader;