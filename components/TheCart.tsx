import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Divider, IconButton, Text } from "react-native-paper";

import useCart from "@/hooks/useCart";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function TheCart({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Function;
}) {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();
  return (
    <View
      style={{
        display: visible ? "flex" : "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#00000080",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#DEC596",
          padding: 20,
          borderRadius: 10,
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "auto",
          maxHeight: "80%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {cart.length > 0 && (
            <Button
              mode="text"
              textColor="red"
              onPress={() => clearCart()}
              icon={"trash-can"}
              style={{
                width: "30%",
              }}
            >
              Empty
            </Button>
          )}
          <Text variant="titleLarge">{""}</Text>

          <Button
            icon="close"
            textColor="black"
            mode="contained"
            onPress={() => setVisible(false)}
            style={{
              width: "30%",
              backgroundColor: "white",
            }}
          >
            Close
          </Button>
        </View>

        {cart.length == 0 ? (
          <Text
            style={{
              fontSize: 25,
              color: "white",
              textAlign: "center",
              padding: 20,
              fontStyle: "italic",
            }}
          >
            Your Cart is empty
          </Text>
        ) : (
          <ScrollView
            style={{
              borderWidth: 3,
              paddingHorizontal: 20,
              marginVertical: 10,
              maxHeight: 400,
              borderRadius: 25,
            }}
          >
            {cart.map((e, index) => {
              return (
                <View key={e.id || index}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      paddingVertical: 10,
                      marginVertical: 10,
                    }}
                  >
                    <Text
                      style={[
                        styles.text,
                        {
                          width: "50%",
                        },
                      ]}
                    >
                      {e.title}
                    </Text>
                    <Text style={styles.text}>${e.price}</Text>
                    <IconButton
                      icon="delete-outline"
                      iconColor="brown"
                      onPress={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </View>
                  <Divider
                    bold
                    style={{
                      width: "100%",
                      height: 3,
                      backgroundColor: "black",
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>
        )}
        {cart.length > 0 && (
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                mode="contained"
                icon={"cart"}
                textColor="white"
                onPress={() => {
                  router.push("/checkoutpage");
                }}
                style={{
                  backgroundColor: "green",
                  width: "100%",
                }}
              >
                Checkout
              </Button>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  view: {
    backgroundColor: "#F6E6CB",
    height: "100%",
  },
  text: {
    fontSize: 20,
    color: "brown",
  },
  h1: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
