import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Currency from "../components/Currency";

const currencyData = [
  {
    iso: "TTD",
    currency_name: "Trinidadian Dollar",
    is_obsolete: false,
    currency_symbol: "TT$",
    active: true,
  },
  {
    iso: "TVD",
    currency_name: "Tuvaluan Dollar",
    is_obsolete: false,
    currency_symbol: "$",
    active: false,
  },
  {
    iso: "TWD",
    currency_name: "Taiwan New Dollar",
    is_obsolete: false,
    currency_symbol: "NT$",
    active: false,
  },

  {
    iso: "USD",
    currency_name: "US Dollar",
    is_obsolete: false,
    currency_symbol: "$",
    active: false,
  },
  {
    iso: "UYU",
    currency_name: "Uruguayan Peso",
    is_obsolete: false,
    currency_symbol: "$U",
    active: false,
  },
];

function Converter() {
  const [currencies, setCurrencies] = React.useState(currencyData);

  return (
    <ScrollView style={styles.container}>
      {currencies.map((currency) => (
        <Currency
          key={currency.iso}
          active={currency.active}
          iso={currency.iso}
          symbol={currency.currency_symbol}
        />
      ))}
      <TouchableOpacity style={styles.addCurrency}>
        <AntDesign name="plus" size={16} color="#059BFF" />
        <Text style={styles.text}>Add Currency</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  addCurrency: {
    backgroundColor: "#42ABF112",
    borderRadius: 5,
    padding: 15,
    marginBottom: 25,
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
