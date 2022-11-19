import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

const Send = () => {
  return (
    <View style={styles.send}>
      <View style={styles.sendLeft}>
        <FontAwesome
          name="send-o"
          size={20}
          color="#ffffde"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.sendText}>Send USD to GMD</Text>
      </View>
      <View style={styles.sendRight}>
        <Text style={styles.sendText}>view quote</Text>
        <Entypo
          name="chevron-thin-right"
          size={18}
          color="#ffffde"
          style={{ marginLeft: 10 }}
        />
      </View>
    </View>
  );
};

export default function Currency({ iso, symbol, active, handleSetCurrency, navigation }) {
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

            active ? navigation.navigate('Currencies') : handleSetCurrency(iso);
          }}
          style={styles.currencySelection}
        >
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.currencyName}>{iso}</Text>
          {active && (
            <Entypo name="chevron-thin-down" size={18} color="#242424aa" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSetCurrency(iso);
            inputRef.current.focus();
          }}
          style={styles.exchange}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={[styles.amount, { marginRight: 5 }]}>
              {symbol ? symbol : iso}
            </Text>
            <TextInput
              ref={inputRef}
              keyboardType="decimal-pad"
              style={styles.amount}
              placeholder="0.00"
              textAlign="right"
              onFocus={() => {
                handleSetCurrency(iso);
              }}
              maxLength={9}
            />
          </View>

          {!active && <Text style={styles.rate}>1 USD = 60 GMD</Text>}
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
