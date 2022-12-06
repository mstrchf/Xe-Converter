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

// libraries
import {getCurrencies} from '../lib/requests'

function Converter({ navigation }) {
  const [currencies, setCurrencies] = React.useState([]);

  async function cur() {
    let cur = await getCurrencies()
    setCurrencies(cur.slice(0, 5))
  }

  
  React.useEffect(() => {
  
    cur()
    
    // setCurrencies(cur)    
  }, []);

  function setActiveCurrency(iso) {
    setCurrencies((prevCurrencies) => {
      return prevCurrencies.map((currency) => {
        if (currency.CountryISOTwoLetterCode === iso) {
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
          CountryISOTwoLetterCode: `&${prevCurrencies.length + 1}`,
          CountryName: `Test Money ${prevCurrencies.length + 1}`,
          CurrencySymbol: '&',
          ISOCurrencyCode: 'TST',
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
              key={currency.CountryISOTwoLetterCode}
              active={currency.active}
              code={currency.ISOCurrencyCode}
              country={currency.CountryName}
              countrycode={currency.CountryISOTwoLetterCode}
              symbol={currency.CurrencySymbol}
              rate={currency.rate}
              handleSetCurrency={setActiveCurrency}
              navigation={navigation}
            />
          ))
        )}
        <Pressable
          onPress={() => {
            // navigation.navigate("Currencies");
            addCurrency()
          }}
          style={styles.addCurrency}
        >
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
