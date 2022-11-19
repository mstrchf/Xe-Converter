import React from "react";
import {
  SafeAreaView,
  TouchableHighlight,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from "react-native";

const Item = ({ title }) => (
  <TouchableHighlight style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableHighlight>
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

  const renderItem = ({ item }) => <Item title={item.iso} />;

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
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
