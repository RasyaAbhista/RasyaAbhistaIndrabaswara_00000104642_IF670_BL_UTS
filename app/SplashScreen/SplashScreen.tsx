import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, StatusBar, View } from "react-native";
import { getStyles } from "./SplashScreen.styles";

type Theme = "light" | "dark";

interface SplashScreenProps {
  theme?: Theme;
}

const logoLight = require("../../assets/images/SplashScreen/GuitarLogoBlack.png");
const logoDark = require("../../assets/images/SplashScreen/GuitarLogoWhite.png");

const SplashScreen: React.FC<SplashScreenProps> = ({ theme = "light" }) => {
  const styles = getStyles(theme);
  const logoSource = theme === "dark" ? logoDark : logoLight;

  // Animasi
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animasi masuk (fade + scale)
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // Pindah screen
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme === "dark" ? "#000000" : "#FFFFFF"}
      />

      <Animated.Image
        source={logoSource}
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
