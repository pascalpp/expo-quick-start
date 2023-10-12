import { StyleSheet, Text, FlatList, View } from "react-native";
import { Symbol, symbolNames, symbolWeights } from "./sfsymbols";
import { SafeAreaView } from "react-native-safe-area-context";

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
    height: 80,
  },
  symbolName: {
    fontSize: 16,
    color: "#333",
    height: 24,
    overflow: "hidden",
  },
});

export default function SymbolViewer() {
  return (
    <SafeAreaView>
      <View style={styles.column}>
        <Text style={styles.header}>
          <Symbol name="apple.logo" weight="heavy" /> SFSymbol Viewer
        </Text>
        <FlatList
          data={symbolNames}
          renderItem={({ item: name }) => <SymbolRow key={name} name={name} />}
        />
      </View>
    </SafeAreaView>
  );
}

function SymbolRow({ name }) {
  return (
    <View style={styles.symbolRow}>
      <Text style={styles.symbolName}>{name}</Text>
      <View style={styles.row}>
        {symbolWeights.map((weight) => (
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
