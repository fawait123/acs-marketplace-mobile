import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../global/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  buttonContainer: {
    flexDirection: "column",
    backgroundColor: COLORS.black,
    width: Dimensions.get("window").width / 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  textButton: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 500,
  },
});

export default style;
