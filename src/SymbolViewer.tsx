import { StyleSheet, Text, FlatList, View } from "react-native";
import symbolSet from "./sfsymbols/symbolSet.json";
import { SFSymbolWeight, Symbol } from "./sfsymbols/Symbol";
import { SafeAreaView } from "react-native-safe-area-context";

// console.log(symbolSet);

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: "#333",
    paddingTop: 16,
  },
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
    width: "98%",
    paddingStart: 8,
    paddingEnd: 8,
  },
  symbolRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  symbolName: {
    fontSize: 16,
    color: "#333",
    height: 24,
    overflow: "hidden",
  },
});

// @ts-ignore
const symbolNames = Object.keys(symbolSet.symbols).sort();

export default function SymbolViewer() {
  return (
    <SafeAreaView>
      <View style={styles.column}>
        <Text style={styles.header}>SFSymbol Viewer</Text>
        <FlatList
          data={symbolNames}
          renderItem={({ item: name }) => <SymbolRow key={name} name={name} />}
        />
      </View>
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
      <Text style={styles.symbolName}>{name}</Text>
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
