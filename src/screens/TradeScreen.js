import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CandleChart from "../components/CandleChart";
import { colors, radii, spacing } from "../theme";

const candleData = [
  { x: 1, open: 89300, close: 90000, high: 90500, low: 89000 },
  { x: 2, open: 90000, close: 89500, high: 90200, low: 89200 },
  { x: 3, open: 89500, close: 91000, high: 91500, low: 89300 },
  { x: 4, open: 91000, close: 90500, high: 91800, low: 90200 },
  { x: 5, open: 90500, close: 92000, high: 92500, low: 90400 },

  { x: 6, open: 92000, close: 91800, high: 92800, low: 91500 },
  { x: 7, open: 91800, close: 93000, high: 93500, low: 91600 },
  { x: 8, open: 93000, close: 92500, high: 93200, low: 92200 },
  { x: 9, open: 92500, close: 94000, high: 94500, low: 92400 },
  { x: 10, open: 94000, close: 95000, high: 95500, low: 93800 },

  { x: 11, open: 95000, close: 94500, high: 95200, low: 94200 },
  { x: 12, open: 94500, close: 96000, high: 96500, low: 94400 },
  { x: 13, open: 96000, close: 97000, high: 97500, low: 95800 },
  { x: 14, open: 97000, close: 96500, high: 97200, low: 96200 },
  { x: 15, open: 96500, close: 98000, high: 98500, low: 96400 },

  { x: 16, open: 98000, close: 99000, high: 99500, low: 97800 },
  { x: 17, open: 99000, close: 98500, high: 99200, low: 98200 },
  { x: 18, open: 98500, close: 100000, high: 100500, low: 98400 },
  { x: 19, open: 100000, close: 101000, high: 101500, low: 99800 },
  { x: 20, open: 101000, close: 100200, high: 101200, low: 99900 },

  { x: 21, open: 100200, close: 102000, high: 102500, low: 100000 },
  { x: 22, open: 102000, close: 103000, high: 103500, low: 101800 },
  { x: 23, open: 103000, close: 102200, high: 103200, low: 101900 },
  { x: 24, open: 102200, close: 104000, high: 104800, low: 102000 },
  { x: 25, open: 104000, close: 105000, high: 105500, low: 103800 },
];

export default function TradeScreen({ navigation }) {
  const [side, setSide] = useState("Buy");
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
        {/* Pair */}
        <Text style={{ color: colors.text, fontSize: 18, fontWeight: "600" }}>
          BTC / USDT
        </Text>

        {/* Try Demo Trading Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("DemoTrading")}
          style={{
            marginTop: spacing.sm,
            borderWidth: 1,
            borderColor: colors.primary,
            padding: spacing.sm,
            borderRadius: radii.md,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Try Demo Trading
          </Text>
        </TouchableOpacity>

        {/* Candlestick Chart */}
        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: radii.md,
            marginTop: spacing.md,
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              color: colors.subtext,
              padding: spacing.sm,
            }}
          >
            Candlestick Chart
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CandleChart data={candleData} />
          </ScrollView>
        </View>

        {/* Buy / Sell Toggle */}
        <View style={{ flexDirection: "row", marginTop: spacing.lg }}>
          {["Buy", "Sell"].map((s) => (
            <TouchableOpacity
              key={s}
              onPress={() => setSide(s)}
              style={{
                flex: 1,
                backgroundColor: side === s ? colors.primary : colors.card,
                padding: spacing.sm,
                borderRadius: radii.md,
                marginRight: s === "Buy" ? spacing.sm : 0,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: side === s ? "#000" : colors.text,
                }}
              >
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Order Book */}
        <Text style={{ color: colors.subtext, marginTop: spacing.lg }}>
          Order Book
        </Text>

        {[
          { price: "90,350", amount: "0.12", type: "sell" },
          { price: "90,345", amount: "0.08", type: "sell" },
          { price: "90,340", amount: "0.15", type: "buy" },
          { price: "90,335", amount: "0.22", type: "buy" },
        ].map((o, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <Text
              style={{
                color: o.type === "buy" ? colors.primary : colors.danger,
              }}
            >
              {o.price}
            </Text>
            <Text style={{ color: colors.muted }}>{o.amount}</Text>
          </View>
        ))}

        {/* Action Button */}
        <TouchableOpacity
          style={{
            backgroundColor: side === "Buy" ? colors.primary : colors.danger,
            padding: spacing.md,
            borderRadius: radii.md,
            marginTop: spacing.lg,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "#000",
            }}
          >
            {side} BTC
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
