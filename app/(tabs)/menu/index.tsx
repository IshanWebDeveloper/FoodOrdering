import { StyleSheet, Image, ScrollView, FlatList } from "react-native";
import Colors from "@/constants/Colors";
import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";
import { View } from "@/components/Themed";

// const product = products[0];

export default function MenuScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
