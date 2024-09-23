import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/asports.jpeg")}
          style={styles.image}
        />
        <Text style={styles.title}>
          Welcome! This is my first React Native App
        </Text>
        <Text style={styles.centeredText}>Created by: Ahmed Wardhere</Text>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
          // This is the button that will navigate to the About page
        />
        <Button title="List Page" onPress={() => navigation.navigate("List")} />
        {/* This is the button that will navigate to the List page */}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const colors = {
  background: "#E0F7FA",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
    color: "teal",
  },
  centeredText: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 20,
    color: "teal",
  },
});
