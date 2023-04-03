import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ImageProfileComponent() {
  return (
    <TouchableOpacity style={style.container}>
      <Image
        source={{ uri: "https://placehold.jp/150x150.png" }}
        style={style.image}
      />
    </TouchableOpacity>
  );
}
