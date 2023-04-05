import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import style from "./style";
import ProductComponent from "../../components/home/product";

export default function ProfileScreen() {
  const products = [
    {
      id: 1,
      name: "Honda Mobilio",
      price: 10000000,
    },
    {
      id: 2,
      name: "Honda Mobilio",
      price: 10000000,
    },
    {
      id: 3,
      name: "Honda Mobilio",
      price: 10000000,
    },
    {
      id: 4,
      name: "Honda Mobilio",
      price: 10000000,
    },
    {
      id: 5,
      name: "Honda Mobilio",
      price: 10000000,
    },
    {
      id: 6,
      name: "Honda Mobilio",
      price: 10000000,
    },
  ];
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.containerCard}>
        {products.map((el, index) => {
          return <ProductComponent key={index} />;
        })}
      </ScrollView>
      <View
        style={{
          flex: 3,
          backgroundColor: "yellow",
        }}
      >
        <Text>Hallo</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>Hallo</Text>
      </View>
    </SafeAreaView>
  );
}
