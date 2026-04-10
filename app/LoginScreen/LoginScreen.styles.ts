import { StyleSheet } from "react-native";

const ORANGE = "#E8622A";

export const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    flex: {
      flex: 1,
      backgroundColor: isDark ? "#111111" : "#FFFFFF",
    },
    container: {
      flexGrow: 1,
      backgroundColor: isDark ? "#111111" : "#FFFFFF",
      paddingHorizontal: 28,
      paddingTop: 80,
      paddingBottom: 40,
      alignItems: "stretch",
    },

    logo: {
      width: 500,
      height: 180,
      alignSelf: "center",
      marginBottom: 1,
    },

    title: {
      fontSize: 24,
      fontWeight: "700",
      color: isDark ? "#FFFFFF" : "#111111",
      textAlign: "center",
      marginBottom: 32,
    },

    label: {
      fontSize: 14,
      fontWeight: "700",
      color: isDark ? "#EEEEEE" : "#111111",
      marginBottom: 8,
    },

    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1.5,
      borderColor: isDark ? "#333333" : "#E0E0E0",
      borderRadius: 12,
      backgroundColor: isDark ? "#1E1E1E" : "#FAFAFA",
      paddingHorizontal: 16,
      height: 54,
    },
    inputError: {
      borderColor: "#E53935",
      backgroundColor: isDark ? "#2A1A1A" : "#FFF5F5",
    },
    input: {
      flex: 1,
      fontSize: 15,
      color: isDark ? "#FFFFFF" : "#111111",
      paddingVertical: 0,
    },
    inputFlex: {
      flex: 1,
    },
    eyeButton: {
      paddingLeft: 10,
      paddingVertical: 4,
    },
    eyeIcon: {
      width: 24,
      height: 24,
    },

    errorText: {
      fontSize: 12,
      color: "#E53935",
      marginTop: 5,
      marginLeft: 4,
    },

    forgotContainer: {
      alignSelf: "flex-end",
      marginTop: 10,
      marginBottom: 28,
    },
    forgotText: {
      fontSize: 14,
      color: isDark ? "#AAAAAA" : "#888888",
    },

    signInButton: {
      backgroundColor: ORANGE,
      borderRadius: 14,
      paddingVertical: 17,
      alignItems: "center",
      shadowColor: ORANGE,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 5,
      marginBottom: 28,
    },
    signInText: {
      color: "#FFFFFF",
      fontSize: 17,
      fontWeight: "700",
      letterSpacing: 0.3,
    },

    otherWayText: {
      fontSize: 13,
      color: isDark ? "#666666" : "#AAAAAA",
      textAlign: "center",
      alignSelf: "stretch",
      marginBottom: 16,
    },

    socialRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
      marginBottom: 36,
    },
    socialButton: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: isDark ? "#1E1E1E" : "#F4F4F4",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: isDark ? "#333333" : "#EEEEEE",
    },
    socialButtonPressed: {
      backgroundColor: isDark ? "#2A2A2A" : "#E8E8E8",
      borderColor: isDark ? "#444444" : "#CCCCCC",
      transform: [{ scale: 0.94 }],
    },
    socialIcon: {
      width: 28,
      height: 28,
    },

    registerRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    registerText: {
      fontSize: 14,
      color: isDark ? "#888888" : "#888888",
    },
    registerLink: {
      fontSize: 14,
      color: ORANGE,
      fontWeight: "700",
    },
  });
