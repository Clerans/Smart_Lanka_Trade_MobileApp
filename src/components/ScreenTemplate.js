// src/components/ScreenTemplate.js
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, spacing } from "../theme";

export default function ScreenTemplate({
  title,
  subtitle,
  sections = [],           // [{title: 'Section', items: ['a','b']}]
  actions = [],            // [{label:'Button', onPress:()=>{}}]
  footer = null,
}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

        {sections.map((s, i) => (
          <View key={i} style={styles.section}>
            {s.title ? <Text style={styles.sectionTitle}>{s.title}</Text> : null}
            {Array.isArray(s.items) && s.items.map((it, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={styles.rowText}>{it}</Text>
              </View>
            ))}
            {s.custom ? s.custom : null}
          </View>
        ))}

        {actions.length ? (
          <View style={styles.actions}>
            {actions.map((a, i) => (
              <TouchableOpacity key={i} style={styles.btn} onPress={a.onPress}>
                <Text style={styles.btnText}>{a.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}

        {footer}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: 40 },
  title: { color: colors.text, fontSize: 20, fontWeight: "700" },
  subtitle: { color: colors.subtext, marginTop: 6 },
  section: { marginTop: spacing.md, backgroundColor: colors.card, borderRadius: 12, padding: spacing.sm },
  sectionTitle: { color: colors.subtext, marginBottom: 8, fontWeight: "600" },
  row: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#111", },
  rowText: { color: colors.text },
  actions: { marginTop: spacing.md, flexDirection: "row", gap: 12, justifyContent: "space-between" },
  btn: { flex: 1, backgroundColor: colors.primary, paddingVertical: 12, borderRadius: 10, alignItems: "center", marginHorizontal: 4 },
  btnText: { color: "#000", fontWeight: "700" },
});
