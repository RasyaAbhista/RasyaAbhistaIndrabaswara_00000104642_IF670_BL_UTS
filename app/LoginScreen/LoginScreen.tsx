import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../app/context/ThemeContext";
import { getStyles } from "./LoginScreen.styles";

const DUMMY_EMAIL = "user";
const DUMMY_PASSWORD = "password123";

const LoginScreen: React.FC = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [pressedSocial, setPressedSocial] = useState<string | null>(null);

  const styles = getStyles(isDark);

  const validate = () => {
    let valid = true;
    if (email.trim() === "") {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }
    if (password.trim() === "") {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }
    if (!valid) return;
    if (email.trim() === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      router.replace("/Homepage/Homepage");
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  const socialButtons = [
    { key: "google", source: require("../../assets/images/Login/Google.png") },
    {
      key: "facebook",
      source: require("../../assets/images/Login/Facebook.png"),
    },
    { key: "apple", source: require("../../assets/images/Login/Apple.png") },
  ];

  return (
    <View style={styles.container}>
      {/* Logo — putih saat dark, hitam saat light */}
      <Image
        source={
          isDark
            ? require("../../assets/images/SplashScreen/GuitarLogoWhite.png")
            : require("../../assets/images/SplashScreen/GuitarLogoBlack.png")
        }
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Sign in to your account</Text>

      {/* Email */}
      <Text style={styles.label}>Email Address</Text>
      <View style={[styles.inputContainer, emailError && styles.inputError]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor={isDark ? "#666666" : "#BBBBBB"}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (emailError) setEmailError(false);
          }}
          autoCapitalize="none"
          keyboardType="default"
        />
      </View>
      {emailError && (
        <Text style={styles.errorText}>
          {email.trim() === ""
            ? "Email cannot be empty."
            : "Email or password is incorrect."}
        </Text>
      )}

      {/* Password */}
      <Text style={[styles.label, { marginTop: 16 }]}>Password</Text>
      <View style={[styles.inputContainer, passwordError && styles.inputError]}>
        <TextInput
          style={[styles.input, styles.inputFlex]}
          placeholder="Enter your password"
          placeholderTextColor={isDark ? "#666666" : "#BBBBBB"}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (passwordError) setPasswordError(false);
          }}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={
              showPassword
                ? require("../../assets/images/Login/eye 1.png")
                : require("../../assets/images/Login/eye-off 1.png")
            }
            style={[styles.eyeIcon, isDark && { tintColor: "#AAAAAA" }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {passwordError && (
        <Text style={styles.errorText}>
          {password.trim() === ""
            ? "Password cannot be empty."
            : "Email or password is incorrect."}
        </Text>
      )}

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={validate}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

      {/* Other way to sign in */}
      <Text style={styles.otherWayText}>other way to sign in</Text>

      {/* Social Buttons */}
      <View style={styles.socialRow}>
        {socialButtons.map(({ key, source }) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.socialButton,
              pressedSocial === key && styles.socialButtonPressed,
            ]}
            onPressIn={() => setPressedSocial(key)}
            onPressOut={() => setPressedSocial(null)}
            activeOpacity={1}
          >
            <Image
              source={source}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Register */}
      <View style={styles.registerRow}>
        <Text style={styles.registerText}>{"Don't have an account? "}</Text>
        <Text style={styles.registerLink}>Create Account</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
