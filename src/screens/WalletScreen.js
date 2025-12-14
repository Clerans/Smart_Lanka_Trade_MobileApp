import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, radii, spacing } from "../theme";

export default function WalletScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: tabBarHeight + 20,
        }}
      >
        {/* Wallet Balance */}
        <Text style={{ color: colors.subtext }}>Est. Total Value</Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 32,
            fontWeight: "700",
          }}
        >
          LKR 482,950.40
        </Text>

        <Text style={{ color: colors.primary, marginTop: 4 }}>
          Today’s PNL +1.84%
        </Text>

        {/* Wallet Actions */}
        <View style={{ flexDirection: "row", marginTop: spacing.lg }}>
          {["Add Funds", "Send", "Transfer"].map((action, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flex: 1,
                backgroundColor:
                  action === "Add Funds" ? colors.primary : colors.card,
                padding: spacing.sm,
                borderRadius: radii.md,
                marginRight: index < 2 ? spacing.sm : 0,
              }}
            >
              <Text
                style={{
                  color: action === "Add Funds" ? "#000" : colors.text,
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {action}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Asset Section */}
        <Text
          style={{
            color: colors.text,
            marginTop: spacing.lg,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Crypto Assets
        </Text>

        {[
          {
            symbol: "BTC",
            name: "Bitcoin",
            balance: "0.0214",
            value: "LKR 215,400",
            pnl: "+0.62%",
          },
          {
            symbol: "ETH",
            name: "Ethereum",
            balance: "1.86",
            value: "LKR 168,200",
            pnl: "+1.12%",
          },
          {
            symbol: "SOL",
            name: "Solana",
            balance: "42.5",
            value: "LKR 99,350",
            pnl: "-0.42%",
          },
        ].map((asset, index) => (
          <View
            key={index}
            style={{
              backgroundColor: colors.card,
              padding: spacing.md,
              borderRadius: radii.md,
              marginTop: spacing.sm,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <View>
              <Text style={{ color: colors.text, fontWeight: "600" }}>
                {asset.symbol}
              </Text>
              <Text style={{ color: colors.subtext, fontSize: 12 }}>
                {asset.name}
              </Text>
            </View>

            {/* Right */}
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: colors.text }}>
                {asset.balance}
              </Text>
              <Text style={{ color: colors.subtext, fontSize: 12 }}>
                {asset.value}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: asset.pnl.startsWith("+")
                    ? colors.primary
                    : colors.danger,
                }}
              >
                {asset.pnl}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}