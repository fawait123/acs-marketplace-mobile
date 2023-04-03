import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import Splash from "./../../../assets/svg/Splash.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreeen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Splash width={300} height={300} />
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => navigation.navigate("AuthScreen")}
      >
        <Text style={style.textButton}>Lets Go</Text>
      </TouchableOpacity>
    </View>
  );
}
