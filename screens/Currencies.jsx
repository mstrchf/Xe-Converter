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
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";


const Item = ({ iso, name  }) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.item}>
  <Ionicons name="person-circle-outline" size={24} color="black" />
    <Text style={styles.iso}>{iso}</Text>
    <Text style={styles.name}>{name} </Text>
  </TouchableOpacity>
);

const App = () => {
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
    setCurrencies(myData);
  }

  React.useEffect(() => {
    getCurrencies()
  }, [])

  const renderItem = ({ item }) => <Item iso={item.iso} name={item.currency_name} />;

  return (
    <SafeAreaView style={styles.container}>
      {currencies.length < 1 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={currencies}
          renderItem={renderItem}
          keyExtractor={(item) => item.iso}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#24242433',
  },
  iso: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: '300'
  },

  name: {
    fontSize: 18,
    color: '#24242488',
    fontWeight: '300'
  }
});

export default App;
