import BookCard from "@/components/BookCard";
import { ScrollView, Text, View } from "react-native";
import books from "@/data/books";
import { Button, FAB, IconButton, Text as Textp } from "react-native-paper";

import React from "react";
import TheCart from "@/components/TheCart";
import useCart from "@/hooks/useCart";

export default function Books() {
  const { cart } = useCart();
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#DEC596" }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: 10,
          paddingBottom: 60,
        }}
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id.toString()}
            title={book.title}
            price={book.price}
            image={book.image}
          />
        ))}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          zIndex: 1,
        }}
      >
        <FAB
          visible={!visible}
          icon="cart"
          color="brown"
          onPress={() => setVisible(!visible)}
          style={{
            backgroundColor: "white",
          }}
        />
        {cart.length > 0 && (
          <Textp
            variant="titleMedium"
            style={[
              {
                color: "white",
                position: "absolute",
                top: -10,
                right: -10,
                backgroundColor: "red",
                borderRadius: 10,
                width: 25,
                height: 25,
                textAlign: "center",
              },
            ]}
          >
            {cart.length}
          </Textp>
        )}
      </View>
      <TheCart visible={visible} setVisible={setVisible} />
    </View>
  );
}
