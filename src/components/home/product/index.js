import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export default function ProductComponent({ item }) {
  return (
    <TouchableOpacity style={style.container} key={item}>
      <View style={style.containerGambar}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={style.image}
        />
      </View>
      <View style={style.containerDesc}>
        <Text>Honda Mobilio</Text>
        <Text>Rp. 115.000.000.,</Text>
      </View>
    </TouchableOpacity>
  );
}
