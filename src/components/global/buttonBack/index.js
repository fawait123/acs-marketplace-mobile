import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ButtonBackComponent() {
  return (
    <TouchableOpacity style={style.container}>
      <Feather name="arrow-left" color={"white"} size={18} />
    </TouchableOpacity>
  );
}
