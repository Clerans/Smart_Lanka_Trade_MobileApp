import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, radii, spacing } from "../../theme";

export default function RegisterScreen({ navigation }) {
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
          {/* Title */}
          <Text
            style={{
              color: colors.text,
              fontSize: 26,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Create Account
          </Text>

          {/* Card */}
          <View
            style={{
              backgroundColor: colors.card,
              padding: spacing.lg,
              borderRadius: radii.md,
              marginTop: spacing.lg,
            }}
          >
            {/* Username */}
            <Text style={{ color: colors.subtext }}>Username</Text>
            <TextInput
              placeholder="Enter your username"
              placeholderTextColor={colors.muted}
              style={inputStyle}
            />

            {/* Email */}
            <Text style={{ color: colors.subtext, marginTop: spacing.md }}>
              Email
            </Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={colors.muted}
              keyboardType="email-address"
              style={inputStyle}
            />

            {/* Password */}
            <Text style={{ color: colors.subtext, marginTop: spacing.md }}>
              Password
            </Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={colors.muted}
              secureTextEntry
              style={inputStyle}
            />

            {/* Confirm Password */}
            <Text style={{ color: colors.subtext, marginTop: spacing.md }}>
              Confirm Password
            </Text>
            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor={colors.muted}
              secureTextEntry
              style={inputStyle}
            />

            {/* Register Button */}
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
                Register
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: spacing.md,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "#222" }} />
              <Text style={{ color: colors.muted, marginHorizontal: 10 }}>
                OR
              </Text>
              <View style={{ flex: 1, height: 1, backgroundColor: "#222" }} />
            </View>

            {/* Google Sign In */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1a1a1a",
                padding: spacing.md,
                borderRadius: radii.md,
              }}
              onPress={() => {
                // TODO: integrate Google auth
              }}
            >
              <Ionicons name="logo-google" size={20} color="#EA4335" />
              <Text
                style={{
                  color: colors.text,
                  marginLeft: 10,
                  fontWeight: "600",
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>

            {/* Login link */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginTop: spacing.md }}
            >
              <Text
                style={{
                  color: colors.primary,
                  textAlign: "center",
                }}
              >
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* Shared input style */
const inputStyle = {
  backgroundColor: "#1a1a1a",
  color: colors.text,
  padding: spacing.md,
  borderRadius: radii.sm,
  marginTop: spacing.xs,
};
