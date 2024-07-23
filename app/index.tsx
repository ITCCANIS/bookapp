import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function index() {
  return (
    <View
      style={{
        padding: 40,
        flex: 1,
        backgroundColor: "#DEC596",
      }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Welcome to bookstore
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Find your next favorite book here and enjoy reading!
      </Text>
      <Text></Text>
      <Button
        mode="contained"
        style={{
          padding: 8,
          marginTop: 80,
          backgroundColor: "brown",
        }}
        labelStyle={{
          fontSize: 20,
        }}
        onPress={() => {
          router.push("/bookspage");
        }}
      >
        Get Started
      </Button>
      <Image
        style={{
          alignSelf: "center",
          marginTop: 50,
          width: 250,
          height: 250,
        }}
        source={require("@/assets/splashbnobg.png")}
      />
    </View>
  );
}
