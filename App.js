import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RadioButton from "./components/RadioButton";
import { useState } from "react";

export default function App() {
  const radioButtonOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOption, setSelectedOption] = useState(radioButtonOptions[0]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {radioButtonOptions.map((singleOption) => (
        <RadioButton
          key={singleOption}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        >
          {singleOption}
        </RadioButton>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
