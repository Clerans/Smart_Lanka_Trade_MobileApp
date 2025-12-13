import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colors, radii, spacing } from "../theme";

export default function DemoTradingScreen() {
  const insets = useSafeAreaInsets();

  const [side, setSide] = useState("Buy");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(100000); // demo balance LKR
  const price = 95000; // mock BTC price

  const handleTrade = () => {
    if (!amount || isNaN(amount)) return;

    const qty = parseFloat(amount);
    const cost = qty * price;

    if (side === "Buy" && cost <= balance) {
      setBalance(balance - cost);
    }

    if (side === "Sell") {
      setBalance(balance + cost);
    }

    setAmount("");
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: insets.bottom + 20, // ✅ FIXED
        }}
      >
        {/* Header */}
        <Text style={{ color: colors.text, fontSize: 20, fontWeight: "700" }}>
          Demo Trading
        </Text>
        <Text style={{ color: colors.subtext, marginBottom: spacing.md }}>
          Paper trading with virtual funds
        </Text>

        {/* Balance */}
        <View
          style={{
            backgroundColor: colors.card,
            padding: spacing.lg,
            borderRadius: radii.md,
          }}
        >
          <Text style={{ color: colors.subtext }}>Demo Balance</Text>
          <Text
            style={{
              color: colors.text,
              fontSize: 28,
              fontWeight: "700",
              marginTop: 4,
            }}
          >
            LKR {balance.toLocaleString()}
          </Text>
        </View>

        {/* Pair */}
        <View style={{ marginTop: spacing.lg }}>
          <Text style={{ color: colors.subtext }}>Trading Pair</Text>
          <Text style={{ color: colors.text, fontSize: 18, fontWeight: "600" }}>
            BTC / USDT
          </Text>
          <Text style={{ color: colors.primary }}>
            Price: LKR {price.toLocaleString()}
          </Text>
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

        {/* Amount Input */}
        <View
          style={{
            backgroundColor: colors.card,
            padding: spacing.md,
            borderRadius: radii.md,
            marginTop: spacing.lg,
          }}
        >
          <Text style={{ color: colors.subtext }}>Amount (BTC)</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            placeholderTextColor={colors.muted}
            keyboardType="numeric"
            style={{
              color: colors.text,
              marginTop: spacing.sm,
              padding: spacing.md,
              backgroundColor: "#1a1a1a",
              borderRadius: radii.sm,
            }}
          />
        </View>

        {/* Execute Button */}
        <TouchableOpacity
          onPress={handleTrade}
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
              fontSize: 16,
            }}
          >
            {side} BTC (Demo)
          </Text>
        </TouchableOpacity>

        {/* Info */}
        <Text
          style={{
            color: colors.muted,
            textAlign: "center",
            marginTop: spacing.md,
            fontSize: 12,
          }}
        >
          This is a demo trading environment. No real funds involved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
