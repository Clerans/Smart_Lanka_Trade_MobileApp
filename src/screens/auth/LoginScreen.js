import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, radii, spacing } from "../../theme";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            padding: spacing.lg,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 26,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            SmartLanka Trade
          </Text>

          <Text
            style={{
              color: colors.subtext,
              textAlign: "center",
              marginBottom: spacing.lg,
            }}
          >
            Welcome back
          </Text>

          <View
            style={{
              backgroundColor: colors.card,
              padding: spacing.lg,
              borderRadius: radii.md,
            }}
          >
            <Text style={{ color: colors.subtext }}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={colors.muted}
              style={{
                backgroundColor: "#1a1a1a",
                color: colors.text,
                padding: spacing.md,
                borderRadius: radii.sm,
                marginTop: spacing.xs,
              }}
            />

            <Text style={{ color: colors.subtext, marginTop: spacing.md }}>
              Password
            </Text>
            <TextInput
              secureTextEntry
              placeholder="Enter your password"
              placeholderTextColor={colors.muted}
              style={{
                backgroundColor: "#1a1a1a",
                color: colors.text,
                padding: spacing.md,
                borderRadius: radii.sm,
                marginTop: spacing.xs,
              }}
            />

            <TouchableOpacity
              onPress={() => navigation.replace("Main")}
              style={{
                backgroundColor: colors.primary,
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
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
            >
              <Text
                style={{
                  color: colors.primary,
                  textAlign: "center",
                  marginTop: spacing.md,
                }}
              >
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
