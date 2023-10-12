import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserIcon from "./user.svg";
import packageInfo from "./package.json";
// import symbolSet from "./sfsymbols/symbols.json";
import { Symbol } from "./sfsymbols/Symbol";

// console.log(symbolSet);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    color: "#333fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
  svg: {
    color: "#333",
  },
});

export default function TestView() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Symbol
          name="square.and.arrow.up"
          weight="black"
          width="48"
          height="48"
        />
        <UserIcon
          style={styles.svg}
          className="foo"
          width="48"
          height="48"
          strokeWidth={2}
        />
        Close up App.js to start working on your app!
      </Text>
    </View>
  );
}
