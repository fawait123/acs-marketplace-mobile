import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 5,
    width: Dimensions.get("window").width / 1.5,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
  textSubTitle: {
    fontSize: 18,
    fontWeight: 400,
  },
  containerButton: {
    backgroundColor: COLORS.black,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 14,
    color: COLORS.white,
  },
});

export default style;
