import products from "@/assets/data/products";
import Button from "@/components/Buttons";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, seSize] = useState("");
  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!selectedSize) return;
    console.warn(`Added ${product?.name} to cart with size ${selectedSize}`);
  };
  if (!product)
    return (
      <View>
        <Stack.Screen options={{ title: "Product Not Found" }} />
        <Text style={{ color: "white" }}>Product Not Found</Text>
      </View>
    );
  return (
    <View>
      <Stack.Screen options={{ title: `${product?.name}` }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={{ color: "white" }}>Select Sizes</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => seSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: size === selectedSize ? "cyan" : "gainsboro",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: size === selectedSize ? "white" : "black" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>{`Price: $${product.price}`}</Text>
      <Button onPress={addToCart} text="Add to Cart" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginVertical: 10,
  },

  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  sizeText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
export default ProductDetailsScreen;
