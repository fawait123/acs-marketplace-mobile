import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import style from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function AuthScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.textTitle}>Welcome</Text>
      <Text style={style.textSubTitle}>Please Login to continue our app</Text>
      <View style={style.formGroup}>
        <Text style={style.formLabel}>Username or Email</Text>
        <TextInput
          style={style.formInput}
          placeholder="Input email or username"
        />
      </View>
      <View style={style.formGroup}>
        <Text style={style.formLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={style.formInput}
          placeholder="Input your password"
        />
      </View>
      <TouchableOpacity
        style={style.containerButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
