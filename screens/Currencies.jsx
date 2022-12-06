import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { CountryFlag } from "react-native-flag-creator";
import {getCurrencies} from '../lib/requests'



const Item = ({ iso, name, countrycode }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={styles.item}
    onPress={console.log("add item")}
  >
    {/* <Ionicons name="person-circle-outline" size={24} color="black" /> */}
    <CountryFlag
      style={{ borderRadius: 12, width: 24, height: 24 }}
      countryCode={countrycode}
    />
    <Text style={styles.iso}>{iso}</Text>
    <Text style={styles.name}>{name} </Text>
  </TouchableOpacity>
);

const App = () => {
  const [currencies, setCurrencies] = React.useState([]);
  


  async function cur() {
    let cur = await getCurrencies()
    setCurrencies(cur)
  }

  
  React.useEffect(() => {

    cur()

  }, []);

  const renderItem = ({ item }) => (
    <Item
      key={item.CountryISOTwoLetterCode}
      iso={item.ISOCurrencyCode}
      countrycode={item.CountryISOTwoLetterCode}
      name={item.CountryName}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {currencies.length < 1 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={currencies}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#24242433",
  },
  iso: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: "300",
  },

  name: {
    fontSize: 18,
    color: "#24242488",
    fontWeight: "300",
  },
});

export default App;
