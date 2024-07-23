import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="checkout"
        options={{
          headerTitle: "Checkout",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: "#F6E6CB",
          },
        }}
      />
    </Stack>
  );
}
