import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Currency from "../components/Currency";
function Converter() {
  const [currencies, setCurrencies] = React.useState([]);
  async function getCurrencies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Basic bWFyaW5haW50ZXJuYXRpb25hbHNjaG9vbDU1MzgxMDkzMjphaTJsdjE0cW5pNmdyMGZ2MWJvNWVhY3Q5aw==",
      },
    };

    const response = await fetch(
      "https://xecdapi.xe.com/v1/currencies?additionalInfo=symbol",
      options
    );
    const data = await response.json();
    const myData = data.currencies;
    setCurrencies(myData.slice(0, 5));
  }

  React.useEffect(() => {
    getCurrencies();
  }, []);

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
        {currencies.length < 1 ? (
          <ActivityIndicator />
        ) : (
          currencies.map((currency) => (
            <Currency
              key={currency.iso}
              active={currency.active}
              iso={currency.iso}
              symbol={currency.currency_symbol}
              handleSetCurrency={handleSetCurrency}
            />
          ))
        )}
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
