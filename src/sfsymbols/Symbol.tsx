import React from "react";

import symbolSet from "./symbolSet.json";
import { SFSymbolNames } from "./types";
import Svg, { Path } from "react-native-svg";

export type SFSymbolWeight =
  | "black"
  | "heavy"
  | "bold"
  | "semibold"
  | "medium"
  | "regular"
  | "light"
  | "thin"
  | "ultralight";

export type SymbolProps = {
  name: SFSymbolNames;
  weight: SFSymbolWeight;
  width?: number | string;
  height?: number | string;
};

export function Symbol({ name, weight, ...props }: SymbolProps) {
  // @ts-ignore
  const selectedSymbol = symbolSet.symbols[name][weight];

  return (
    <Svg
      viewBox={`0 0 ${selectedSymbol.geometry.width} ${selectedSymbol.geometry.height}`}
      color="inherit"
      {...props}
    >
      <Path d={selectedSymbol.path} fillRule="evenodd" clipRule="evenodd" />
    </Svg>
  );
}

Symbol.defaultProps = {
  name: "questionmark.square.dashed",
  weight: "regular",
};
