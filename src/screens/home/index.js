import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style";
import stylesGlobal from "../../global/globalStyle";
import { ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductComponent from "../../components/home/product";
import CategoryComponent from "../../components/home/category";

export default function HomeScreen() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <SafeAreaView style={stylesGlobal.container}>
      <View style={style.containerTop}>
        <Text>Halaman Top</Text>
      </View>
      <View style={style.containerHeader}>
        <Text>Halaman Header</Text>
      </View>
      <View style={style.containerCategory}>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <CategoryComponent item={item} />}
        />
      </View>
      <View style={style.containerProduct}>
        <View style={style.productTitle}>
          <Text style={style.titleProduct}>Products</Text>
          <TouchableOpacity>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ProductComponent item={item} />}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}
