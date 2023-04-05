import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  containerCard: {
    flex: 1,
    backgroundColor: "blue",
    height: Dimensions.get("window").height / 3,
  },
});

export default style;
