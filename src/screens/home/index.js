import { View, Text, TextInput } from "react-native";
import React from "react";
import style from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNavigation from "../../navigations/home";
import styles from "../../global/globalStyle";
import ButtonBackComponent from "../../components/global/buttonBack";
import ImageProfileComponent from "../../components/home/imageProfile";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../global/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={style.container}>
        <ButtonBackComponent />
        <ImageProfileComponent />
      </View>
      <Text style={style.textTitle}>Welcome,</Text>
      <Text style={style.textSubTitle}>Our Fashion our app</Text>
      <View style={style.containerSearch}>
        <View style={style.inputGroup}>
          <Feather name="search" color={COLORS.gray} size={24} />
          <TextInput style={style.input} placeholder="search..." />
        </View>
      </View>
    </SafeAreaView>
  );
}
