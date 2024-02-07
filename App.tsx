import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import AppWrapper from "./src/navigation/AppWrapper";
import { store } from "./src/store";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <AppWrapper />
        </View>
        <Toast />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safe: {
    flex: 1,
  },
});
