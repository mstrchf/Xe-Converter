import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Currency from "../components/Currency";

const currencyData = [


  {
    iso: "USD",
    currency_name: "US Dollar",
    is_obsolete: false,
    currency_symbol: "$",
    active: false,
  },
  {
    "iso": "GBP",
    "currency_name": "British Pound",
    "is_obsolete": false,
    "currency_symbol": "£",
    "currency_symbol_on_right": false
  },

  {
    iso: "GMD",
    currency_name: "Gambian Dalasis",
    is_obsolete: false,
    active: true,
  },
  {
    "iso": "EUR",
    "currency_name": "Euro",
    "is_obsolete": false,
    "currency_symbol": "€",
    "currency_symbol_on_right": false
  },
];

function Converter() {
  const [currencies, setCurrencies] = React.useState(currencyData);

  function handleSetCurrency(iso) {
    setCurrencies((prevCurrencies) => {
      return prevCurrencies.map((currency) => {
        if (currency.iso === iso) {
          return { ...currency, active: true };
        } else {
          return { ...currency, active: false };
        }
      });
    });
  }

  function addCurrency() {
    setCurrencies((prevCurrencies) => {
      return [
        ...prevCurrencies,
        {
          iso: `&${prevCurrencies.length + 1}`,
          currency_name: `Test Money ${prevCurrencies.length + 1}`,
          is_obsolete: false,
          active: false,
        },
      ];
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={65}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {currencies.map((currency) => (
          <Currency
            key={currency.iso}
            active={currency.active}
            iso={currency.iso}
            symbol={currency.currency_symbol}
            handleSetCurrency={handleSetCurrency}
          />
        ))}
        <Pressable onPress={addCurrency} style={styles.addCurrency}>
          <AntDesign name="plus" size={16} color="#059BFF" />
          <Text style={styles.text}>Add Currency</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  addCurrency: {
    backgroundColor: "#42ABF122",
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#059BFF",
    fontSize: 17,
    marginLeft: 5,
  },
});

export default Converter;
