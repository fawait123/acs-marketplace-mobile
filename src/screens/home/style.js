import { StyleSheet } from "react-native";
import { COLORS } from "../../global/colors";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 20,
  },
  textSubTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: COLORS.gray,
    marginTop: 5,
  },
  containerSearch: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.white,
    overflow: "hidden",
    backgroundColor: COLORS.white,
    marginTop: 20,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
    letterSpacing: 1,
  },
});

export default style;
