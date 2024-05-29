import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";

// const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {products.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%", // '100%' will make the image take the full width of the container
    aspectRatio: 1,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },

  price: {
    color: Colors.light.tint,
  },
});
