import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SymbolViewer from "./SymbolViewer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TestView from "./TestView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <TestView /> */}
        <SymbolViewer />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
