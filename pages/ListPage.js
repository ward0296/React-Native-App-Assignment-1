import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";

export default function ListPage({ navigation }) {
  const handlePress = (item) => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <Button
          title="Go to Home Page"
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        />
        {/* This is the button that will navigate to the Home page */}
        <Button
          title="Go to About Page"
          onPress={() => navigation.navigate("About")}
          style={styles.button}
        />
        {/* This is the button that will navigate to the About page */}
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#D3CCE3" : "#F5E6FA",
                padding: 16,
                margin: 2,
              },
            ]}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const data = [
  { id: "1", title: "Basketball" },
  { id: "2", title: "Soccer" },
  { id: "3", title: "Football" },
  { id: "4", title: "Hockey" },
  { id: "5", title: "Baseball" },
  { id: "6", title: "Golf" },
  { id: "7", title: "Boxing" },
  { id: "8", title: "Tennis" },
  { id: "9", title: "Badminton" },
  { id: "10", title: "Volleyball" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1, // This will make the container take up the whole screen
    backgroundColor: "#E0F7FA",
    paddingTop: 20,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  itemText: {
    fontSize: 20,
  },
});
