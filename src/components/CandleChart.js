import { View } from "react-native";
import { colors } from "../theme";

export default function CandleChart({ data }) {
  const CHART_HEIGHT = 240;

  if (!data || data.length === 0) return null;

  const prices = data.flatMap(d => [d.high, d.low]);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const range = maxPrice - minPrice || 1;

  const scaleY = (price) =>
    ((price - minPrice) / range) * CHART_HEIGHT;

  return (
    <View
      style={{
        height: CHART_HEIGHT,
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 20,
      }}
    >
      {data.map((candle, index) => {
        const bullish = candle.close >= candle.open;

        const openY = scaleY(candle.open);
        const closeY = scaleY(candle.close);
        const highY = scaleY(candle.high);
        const lowY = scaleY(candle.low);

        const bodyHeight = Math.max(Math.abs(closeY - openY), 6);
        const bodyBottom = Math.min(openY, closeY);

        return (
          <View
            key={index}
            style={{
              width: 22,
              alignItems: "center",
              marginHorizontal: 1,
            }}
          >
            {/* Wick */}
            <View
              style={{
                position: "absolute",
                bottom: lowY,
                width: 2,
                height: highY - lowY,
                backgroundColor: bullish
                  ? colors.primary
                  : colors.danger,
                opacity: 0.9,
                borderRadius: 1,
              }}
            />

            {/* Body */}
            <View
              style={{
                position: "absolute",
                bottom: bodyBottom,
                width: 12,
                height: bodyHeight,
                backgroundColor: bullish
                  ? colors.primary
                  : colors.danger,
                borderRadius: 3,
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
