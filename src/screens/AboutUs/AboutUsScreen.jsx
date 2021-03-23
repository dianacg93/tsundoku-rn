import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Diana Gaona</Text>
      <Text>Shafee Ahmed</Text>
      <Text>Shan Siddiqui</Text>
      <Text>Jahaziel Israel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AboutUsScreen;
