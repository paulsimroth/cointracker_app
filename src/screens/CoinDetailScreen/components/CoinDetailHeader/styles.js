import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: "row",
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    tickerContainer: {
        flexDirection: "row", 
        alignItems: "center",
    },
    tickerTitle: {
        color: "white" , 
        fontWeight: "bold", 
        marginHorizontal: 7, 
        fontSize: 18
    },
    rankCointainer: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    }

});

export default styles;