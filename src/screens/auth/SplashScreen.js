import { useEffect } from "react";
import { Text, View } from "react-native";
import { colors } from "../../theme";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace("Login"), 1200);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: colors.primary, fontSize: 28, fontWeight: "700" }}>
        SmartLanka Trade
      </Text>
    </View>
  );
}
