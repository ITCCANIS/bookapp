import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { images } from "@/data/images";

export interface CheckoutCardProps {
  title: string;
  price: number;
  image: string;
  id: string;
}

const CheckoutCart: React.FC<CheckoutCardProps> = ({
  title,
  price,
  image,
  id,
}) => {
  return (
    <View style={styles.card}>
      <Image source={images[image]} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Price: ${price}</Text>
      </View>
    </View>
  );
};
export default CheckoutCart;
const styles = StyleSheet.create({
  card: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  details: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "brown",
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "sans-serif-medium",
  },
});
