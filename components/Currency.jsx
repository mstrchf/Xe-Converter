import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import {CountryFlag} from 'react-native-flag-creator'
import Send from "./Send";

export default function Currency({
  code,
  countrycode,
  rate,
  symbol,
  active,
  handleSetCurrency,
  navigation,
}) {
  let inputRef = useRef(null);

  return (
    <View
      style={
        active
          ? styles.container
          : {
              marginTop: 8,
              borderColor: "#aaaaaa22",
              borderWidth: 1,
              borderRadius: 7,
            }
      }
    >
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            active ? navigation.navigate("Currencies") : handleSetCurrency(countrycode);
          }}
          style={styles.currencySelection}
        >
          {/* <Ionicons name="person-circle-outline" size={24} color="black" /> */}
          <CountryFlag style={{borderRadius: 12, width: 24, height: 24}} countryCode={countrycode}/>
          
          <Text style={styles.currencyName}>{code}</Text>
          {active && (
            <Entypo name="chevron-thin-down" size={18} color="#242424aa" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSetCurrency(countrycode);
            inputRef.current.focus();
          }}
          style={styles.exchange}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={[styles.amount, { marginRight: 5 }]}>
              {symbol ? symbol : code}
            </Text>
            <TextInput
              ref={inputRef}
              keyboardType="decimal-pad"
              style={styles.amount}
              placeholder="0.00"
              textAlign="right"
              onFocus={() => {
                handleSetCurrency(countrycode);
              }}
              maxLength={9}
            />
          </View>

          {!active && <Text style={styles.rate}>1 USD = {rate} {code}</Text>}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            inputRef.current.focus();
          }}
          style={styles.keypadButton}
        >
          {active ? (
            <Ionicons
              name="ios-calculator-outline"
              size={27}
              color="#24242455"
            />
          ) : (
            <Entypo name="dots-three-vertical" size={24} color="#24242455" />
          )}
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
    marginTop: 8,
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

  currencySelection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    flex: 1,
    zIndex: 5,
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

  sendLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  sendRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  marginRight: { marginRight: 10 },

  sendText: {
    color: "#ffffde",
    fontSize: 15,
  },
});
