import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, radii, spacing } from "../theme";

const coins = [
  { pair: "BTC/USDT", price: "90,345", change: "-2.3%" },
  { pair: "ETH/USDT", price: "4,120", change: "-1.4%" },
  { pair: "SOL/USDT", price: "189", change: "+3.1%" },
  { pair: "BNB/USDT", price: "612", change: "+0.6%" },
];

export default function MarketScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <FlatList
        data={coins}
        keyExtractor={(item) => item.pair}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: tabBarHeight + 20, // ✅ CRITICAL
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.card,
              padding: spacing.md,
              borderRadius: radii.md,
              marginBottom: spacing.md,
              marginHorizontal: spacing.xs,
            }}
          >
            <Text style={{ color: colors.text, fontWeight: "600" }}>
              {item.pair}
            </Text>

            <Text style={{ color: colors.text, marginTop: 6 }}>
              {item.price}
            </Text>

            <Text
              style={{
                color: item.change.startsWith("+")
                  ? colors.primary
                  : colors.danger,
                marginTop: 4,
              }}
            >
              {item.change}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
