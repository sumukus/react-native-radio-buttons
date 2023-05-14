import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function RadioButton({ children, selectedOption, setSelectedOption }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.label}>
        <Text>{children}</Text>
      </View>
      <Ionicons
        name={
          selectedOption == children ? "radio-button-on" : "radio-button-off"
        }
        size={24}
        color="blue"
        onPress={() => {
          setSelectedOption(children);
        }}
      />
    </View>
  );
}

export default RadioButton;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  label: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
  },
});
