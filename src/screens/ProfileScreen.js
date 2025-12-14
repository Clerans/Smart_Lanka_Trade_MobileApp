// src/screens/ProfileScreen.js
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenTemplate from "../components/ScreenTemplate";
import { colors } from "../theme";

export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => navigation.replace("Login"),
        },
      ]
    );
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScreenTemplate
        title="User Profile"
        sections={[
          {
            items: [
              "Profile Overview",
              "Edit Profile",
              "KYC Status",
              "Security",
              "Privacy",
              "Language",
              "Saved Docs",
              "Theme: Light / Dark",
            ],
          },
          {
            items: ["Logout"],
            onPressMap: {
              Logout: handleLogout,
            },
          },
        ]}
      />
    </SafeAreaView>
  );
}