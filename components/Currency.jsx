import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

const Send = () => {
  return (
    <View style={styles.send}>
      <FontAwesome name="send-o" size={20} color="#ffffde" />
      <Text style={styles.sendText}>Send USD to GMD</Text>
      <Text style={styles.sendText}>view quote</Text>
      <Entypo name="chevron-thin-right" size={18} color="#ffffde" />
    </View>
  );
};

function Currency({ iso, symbol, active }) {
  return (
    <View
      style={
        active
          ? styles.container
          : {
              marginBottom: 8,
              borderColor: "#aaaaaa22",
              borderWidth: 1,
              borderRadius: 7,
            }
      }
    >
      <View style={styles.card}>
        <TouchableOpacity style={styles.currencySelection}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.currencyName}>{iso}</Text>
          {active && (
            <Entypo name="chevron-thin-down" size={18} color="#242424aa" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.exchange}>
          <Text style={styles.amount}>{symbol}0.00</Text>
          <Text style={styles.rate}>1 USD = 60 GMD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.keypadButton}>
          <Ionicons name="ios-calculator-outline" size={27} color="#24242455" />
        </TouchableOpacity>
      </View>

      {/* <Send /> */}
      {active && <Send />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: "#0466c8ee",
    marginBottom: 8,
    borderRadius: 9,
  },
  button: {
    backgroundColor: "#242424",
    padding: 7,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  mainText: {
    fontSize: 24,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 7,
    flexDirection: "row",
    paddingLeft: 12,
  },

  notActive: {},

  currencySelection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    flex: 1,
  },

  currencyName: {
    fontSize: 18,
    color: "#242424",
    fontWeight: "300",
    marginHorizontal: 7,
  },

  exchange: {
    justifyContent: "center",
    padding: 5,
    alignItems: "flex-end",
    // backgroundColor: 'red'
  },

  amount: {
    fontSize: 20,
  },

  rate: {
    fontSize: 14,
    fontWeight: "300",
    color: "#aaaaaa",
  },

  keypadButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderLeftWidth: 1,
    borderLeftColor: "#aaaaaa55",
  },

  send: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },

  sendText: {
    color: "#ffffde",
    fontSize: 15,
  },
});

export default Currency;
