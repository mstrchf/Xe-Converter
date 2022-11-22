import { View, Text, StyleSheet } from "react-native";

import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function Send() {
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
}

const styles = StyleSheet.create({
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
