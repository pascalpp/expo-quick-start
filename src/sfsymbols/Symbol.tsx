import React from "react";

import { symbolSet, SFSymbolNames, SFSymbolWeight } from "./symbolSet";
import Svg, { Path } from "react-native-svg";

export type SymbolProps = {
  name: SFSymbolNames;
  weight: SFSymbolWeight;
  width?: number | string;
  height?: number | string;
};

export function Symbol({ name, weight, ...props }: SymbolProps) {
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
