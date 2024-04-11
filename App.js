import { StyleSheet, Text, View } from "react-native";

import Router from "@components/router";
import Fonts from "@conponets/fonts";

function Loading() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
}
async function LoadFonts(finished) {
  await Fonts();
  finished(true);
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    LoadFonts(setFontsLoaded);

    return <Loading />;
  }

  return <Router />;
}
