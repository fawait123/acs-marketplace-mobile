import { StyleSheet } from "react-native";
import { COLORS } from "../../global/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  containerTop: {
    flex: 1,
    backgroundColor: "yellow",
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "blue",
  },
  containerCategory: {
    flex: 2,
    marginVertical: 10,
  },
  containerProduct: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  productTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  titleProduct: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default style;
