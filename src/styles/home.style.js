import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topContainer: {
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  textContainer: {
    // backgroundColor: "#b22222",
    flex: 1,
    flexDirection: "row",
  },
  headingText: {
    color: "#ffffff",
    fontSize: 20,
    paddingBottom: 12,
    marginHorizontal: 10,
    paddingTop: 20,
  },
  inputText: {
    paddingLeft: 8,
    width: "70%",
  },
  inputContainer: {
    padding: 10,
    marginVertical: 16,
    marginHorizontal: 10,
    borderWidth: 2,
    // borderColor: "#b22222",
    borderRadius: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    borderWidth: 2,
    // borderColor: "#b22222",
    borderRadius: 6,
    // backgroundColor: "#b22222",
    padding: 4,
  },
});
