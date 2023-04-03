import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../global/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    padding: 20,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "500",
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
    marginBottom: 20,
  },
  formGroup: {
    width: "100%",
    padding: 5,
    marginVertical: 10,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 500,
  },
  formInput: {
    fontSize: 14,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 0.5,
    letterSpacing: 1.5,
    paddingBottom: 6,
    marginTop: 4,
  },
  containerButton: {
    width: "100%",
    backgroundColor: COLORS.black,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 20,
  },
  textButton: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 500,
  },
});

export default style;
