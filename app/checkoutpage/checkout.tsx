import CheckoutCart from "@/components/CheckoutCart";
import useCart from "@/hooks/useCart";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { orderSchema } from "@/validation/order";
import Toast from "react-native-toast-message";

export default function Checkout() {
  const { cart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const handleOrder = () => {
    const order = {
      ...form,
      total: cart.reduce((acc, book) => acc + book.price, 0),
      cart: cart.map((book) => book.id),
    };
    orderSchema.safeParseAsync(order).then((result) => {
      if (result.success) {
        Toast.show({
          type: "success",
          text1: "Order placed successfully",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Please fill in the form correctly",
        });
      }
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.flexContainer}>
        <View style={styles.cartSection}>
          <Text style={styles.sectionTitle}>Cart</Text>
          <ScrollView style={styles.cartList}>
            {cart.length === 0 ? (
              <Text>Your cart is empty.</Text>
            ) : (
              cart.map((book) => (
                <CheckoutCart
                  key={book.id}
                  id={book.id.toString()}
                  title={book.title}
                  price={book.price}
                  image={book.image}
                />
              ))
            )}
          </ScrollView>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalText}>
              ${cart.reduce((acc, book) => acc + book.price, 0)}
            </Text>
          </View>
        </View>
        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text>Name</Text>
            <TextInput
              style={styles.input}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Address</Text>
            <TextInput
              style={styles.input}
              value={form.address}
              onChangeText={(text) => setForm({ ...form, address: text })}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Phone</Text>
            <TextInput
              style={styles.input}
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, cart.length === 0 && styles.buttonDisabled]}
            onPress={handleOrder}
            disabled={cart.length === 0}
          >
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartSection: { width: "50%" },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  total: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  formSection: {
    flex: 1,
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
  },
  button: {
    backgroundColor: "green",
    padding: 16,
    borderRadius: 40,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  cartList: {
    maxHeight: 400,
    marginBottom: 16,
    width: "100%",
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
  },
});
