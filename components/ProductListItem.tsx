import React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";

const ProductListItem = ({ product }: any) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

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

export default ProductListItem;
