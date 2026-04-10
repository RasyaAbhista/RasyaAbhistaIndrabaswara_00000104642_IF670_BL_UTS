import { Stack } from "expo-router";
import { CartProvider } from "./context/CartContext";
import { HistoryProvider } from "./context/HistoryContext";
import { ProductProvider } from "./context/ProductContext";
import { ProfileProvider } from "./context/ProfileContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <ProfileProvider>
          <CartProvider>
            <HistoryProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                }}
              >
                <Stack.Screen name="index" />
                <Stack.Screen name="onboarding" />
                <Stack.Screen name="login" />

                <Stack.Screen name="Homepage/Homepage" />
                <Stack.Screen name="ProductDetail/ProductDetail" />
                <Stack.Screen name="Cart/Cart" />

                <Stack.Screen name="Payment/Payment" />
                <Stack.Screen name="Payment/OrderConfirmation" />

                <Stack.Screen name="History/History" />
                <Stack.Screen name="History/HistoryDetail" />

                <Stack.Screen name="Wishlist/Wishlist" />

                <Stack.Screen name="Profile/Profile" />
                <Stack.Screen name="Profile/EditProfile" />
              </Stack>
            </HistoryProvider>
          </CartProvider>
        </ProfileProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}
