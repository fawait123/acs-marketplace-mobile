import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";
import { Dimensions } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width / 2.5,
    backgroundColor: COLORS.white,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    margin: 6,
  },
  containerGambar: {
    flex: 3,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerDesc: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default style;
