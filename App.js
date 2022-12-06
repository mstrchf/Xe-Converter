import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const logo = require("./assets/xe.png");

// screens
import Converter from "./screens/Converter";
import Currencies from "./screens/Currencies";

function Loader() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={logo} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  function sanitizeData(myData) {
    let myKeys = Object.keys(myData.conversion_rates);
    let final = newData.map((dt) => {
      let obj;
      myKeys.forEach((key) => {
        if (dt.code === key) {
          obj = {
            ...dt,
            code: key,
            rate: myData.conversion_rates[key],
            active: false,
          };
        }
      });

      return obj;
    });
  }

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return isLoading ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Convert">
        <Stack.Screen name="Currencies" component={Currencies} />
        <Stack.Screen
          name="Convert"
          component={Converter}
          options={{
            title: "Xe Currency",
            headerTitleStyle: {
              fontSize: 16,
              color: "#242424",
              fontWeight: "400",
            },
          }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
