import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import useCart from "@/hooks/useCart";
import { images } from "@/data/images";

export interface BookCardProps {
  title: string;
  price: number;
  image: string;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, price, image, id }) => {
  const { addToCart } = useCart();

  return (
    <View style={styles.card}>
      <Image source={images[image]} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Price: ${price}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addToCart({ id, title, price, image });
          }}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BookCard;
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
