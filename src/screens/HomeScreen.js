import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, radii, spacing } from "../theme";

export default function HomeScreen() {
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
        {/* ================= HEADER ================= */}
        <View style={{ marginBottom: spacing.lg }}>
          {/* Top Row */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left: Menu */}
            <TouchableOpacity>
              <Text style={{ color: colors.text, fontSize: 22 }}>☰</Text>
            </TouchableOpacity>

            {/* Center: App Title */}
            <Text
              style={{
                color: colors.text,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              SmartLankaTrade
            </Text>

            {/* Right: Icons */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ marginRight: spacing.sm }}>
                <Text style={{ color: colors.text, fontSize: 18 }}>🎧</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: colors.text, fontSize: 18 }}>🔔</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View
            style={{
              backgroundColor: colors.card,
              borderRadius: radii.md,
              padding: spacing.sm,
              marginTop: spacing.md,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 6 }}> </Text>
            <Text style={{ color: colors.text, flex: 1 }}>
              SOMI
            </Text>
            <Text style={{ color: colors.subtext }}>🔍</Text>
          </View>
        </View>

        {/* ================= BALANCE ================= */}
        <Text style={{ color: colors.subtext }}>Est. Total Value</Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 32,
            fontWeight: "700",
          }}
        >
          LKR 245,320.50
        </Text>

        <Text style={{ color: colors.primary, marginTop: 4 }}>
          Today’s PNL +1.24%
        </Text>

        {/* ================= ADD FUNDS ================= */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: spacing.md,
            borderRadius: radii.md,
            marginTop: spacing.lg,
          }}
        >
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Add Funds
          </Text>
        </TouchableOpacity>

        {/* ================= P2P CARD ================= */}
        <View
          style={{
            backgroundColor: colors.card,
            padding: spacing.md,
            borderRadius: radii.md,
            marginTop: spacing.lg,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: spacing.sm,
            }}
          >
            <Text style={{ color: colors.subtext }}>P2P</Text>
            <Text style={{ color: colors.subtext }}>{">"}</Text>
          </View>

          <Text style={{ color: colors.text, fontWeight: "600" }}>
            USDT / LKR
          </Text>

          <Text style={{ color: colors.primary, marginTop: 2 }}>
            BUY
          </Text>

          <Text
            style={{
              color: colors.text,
              fontSize: 22,
              fontWeight: "700",
              marginTop: spacing.sm,
            }}
          >
            Rs 312.25
          </Text>
        </View>

        {/* ================= ASSETS ================= */}
        <Text
          style={{
            color: colors.text,
            marginTop: spacing.lg,
            fontWeight: "600",
          }}
        >
          Assets
        </Text>

        {[
          { symbol: "BTC", price: "13,500,000", change: "+2.3%" },
          { symbol: "ETH", price: "720,000", change: "-1.1%" },
          { symbol: "SOL", price: "24,300", change: "+0.8%" },
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
            }}
          >
            <Text style={{ color: colors.text, fontWeight: "600" }}>
              {asset.symbol}
            </Text>

            <View>
              <Text style={{ color: colors.text }}>
                LKR {asset.price}
              </Text>
              <Text
                style={{
                  color: asset.change.startsWith("+")
                    ? colors.primary
                    : colors.danger,
                  fontSize: 12,
                  textAlign: "right",
                }}
              >
                {asset.change}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
