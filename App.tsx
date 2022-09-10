import {useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
} from "react-native";
import {myColors} from "./src/styles/Colors";
import {ThemeContext} from "./src/context/ThemeContext";
import MyKeyboard from "./src/components/MyKeyboard";
import {Feather} from "@expo/vector-icons";
export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, {backgroundColor: "black"}]
        }
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 50,
            right: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Feather name="moon" size={30} color="black" />
          ) : (
            <Feather name="sun" size={30} color="white" />
          )}
        </TouchableOpacity>

        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
