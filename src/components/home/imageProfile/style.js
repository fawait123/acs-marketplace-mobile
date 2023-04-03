import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";

const style = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.black,
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default style;
