import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CategoryComponent() {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.textTitle}>Honda</Text>
        <Text style={style.textSubTitle}>30</Text>
        <TouchableOpacity style={style.containerButton}>
          <Text style={style.textButton}>More</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={style.image}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </View>
    </View>
  );
}
