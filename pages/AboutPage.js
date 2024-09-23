import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";

export default function AboutPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Button title="Home Page" onPress={() => navigation.navigate("Home")} />
        {/* This is the button that will navigate to the Home page */}
        <Button title="List Page" onPress={() => navigation.navigate("List")} />
        {/* This is the button that will navigate to the List page */}
        <Image
          source={require("../assets/asports.jpeg")}
          style={styles.image}
        />
        <Text style={styles.heading}>Introduction</Text>
        <Text style={styles.text}>
          Sports have been an integral part of human culture since the dawn of
          civilization. From ancient Olympic Games in Greece to modern-day
          global competitions like the FIFA World Cup and the Olympics, sports
          have evolved into an essential element of our societies. They serve as
          a source of entertainment, personal development, and community
          building. The diversity of sports from team-based games like soccer
          and basketball to individual activities like tennis and
          swimming—allows people of all ages and abilities to find something
          they can engage in and enjoy.
        </Text>

        <Text style={styles.heading}>Physical Benefits of Sports</Text>
        <Text style={styles.text}>
          One of the most apparent benefits of engaging in sports is the
          positive effect on physical health. Regular participation in sports
          helps improve cardiovascular health, strengthen muscles, increase
          flexibility, and enhance overall physical endurance. These benefits
          are crucial in maintaining a healthy lifestyle and combating issues
          such as obesity, heart disease, and diabetes.
        </Text>

        <Text style={styles.subheading}>1. Cardiovascular Health</Text>
        <Text style={styles.text}>
          Sports that involve aerobic activities, such as running, swimming,
          cycling, and soccer, help improve heart and lung function. They
          increase the oxygen flow in the body, enhance circulation, and reduce
          the risk of heart-related issues by lowering blood pressure and
          cholesterol levels.
        </Text>

        <Text style={styles.subheading}>2. Strength and Endurance</Text>
        <Text style={styles.text}>
          Activities like weightlifting, football, rugby, and gymnastics build
          muscle strength and endurance. Strong muscles support the skeletal
          system, reduce the risk of injury, and improve posture. Sports also
          enhance flexibility and joint mobility, especially in disciplines like
          yoga, gymnastics, and martial arts.
        </Text>
        <Text style={styles.heading}>
          Mental and Emotional Benefits of Sports
        </Text>
        <Text style={styles.text}>
          The benefits of sports are not limited to the body, they also enhance
          mental well-being and emotional health. Engaging in sports helps
          reduce stress, boost mood, and foster personal growth. Moreover, the
          mental discipline involved in learning techniques, strategies, and
          tactics can significantly improve cognitive function.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const colors = {
  background: "#E0F7FA", // light blue
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
  },
  image: {
    width: 350,
    height: 220,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
});
