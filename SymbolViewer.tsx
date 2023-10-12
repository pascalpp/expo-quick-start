import { StyleSheet, Text, ScrollView, View } from "react-native";
import symbolSet from "./sfsymbols/symbolSet.json";
import { SFSymbolWeight, Symbol } from "./sfsymbols/Symbol";
import { SafeAreaView } from "react-native-safe-area-context";

// console.log(symbolSet);

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  row: {
    flex: 1,
    backgroundColor: "#ffffff",
    color: "#333",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 4,
    width: "100%",
    paddingStart: 8,
    paddingEnd: 8,
  },
  symbolRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
});

export default function SymbolViewer() {
  // @ts-ignore
  const symbolNames = Object.keys(symbolSet.symbols);
  const maxRows = 200; // set to Infinity to show all
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.column}>
          {symbolNames.slice(0, maxRows).map((name) => (
            <SymbolRow key={name} name={name} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SymbolRow({ name }) {
  const weights: SFSymbolWeight[] = [
    "black",
    "heavy",
    "bold",
    "semibold",
    "medium",
    "regular",
    "light",
    "thin",
    "ultralight",
  ];
  return (
    <View style={styles.symbolRow}>
      <Text>{name}</Text>
      <View style={styles.row}>
        {weights.map((weight) => (
          <Symbol
            key={weight}
            name={name}
            weight={weight}
            width="32"
            height="32"
          />
        ))}
      </View>
    </View>
  );
}
