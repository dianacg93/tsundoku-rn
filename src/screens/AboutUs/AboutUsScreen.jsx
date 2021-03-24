import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image } from "react-native";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.reads}>TEAM'S FAVORITE READS</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.name}>DIANA GAONA</Text>
          <Text style={styles.title}>Kitchen</Text>
          <Text style={styles.spc}>by Banana Yoshimoto</Text>
          <Image
            source={{
              uri:
                "https://prodimage.images-bn.com/pimages/9780802142443_p0_v1_s600x595.jpg",
            }}
            style={{ width: 75, height: 90 }}
          />
          <Text style={styles.pad}>
            Hello fellow readers! My name is Diana. Growing up reading books in
            Spanish and eventually transitioning to reading books in English,
            literature has been and continues to be a past time that allows me
            to see into other people's minds and learn many lessons I may have
            not learned in my day-to-day routine. As I have grown older, I have
            seen my favorite genre change many times, and at the moment I find
            myself reading self-help and business books
          </Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.name}>SHAFEE AHMED</Text>
          <Text style={styles.title}>The Brothers Karamazov</Text>
          <Text style={styles.spc}>by Fyodor Dostoevsky</Text>
          <Image
            source={{
              uri:
                "https://images-na.ssl-images-amazon.com/images/I/917QNDtEGML.jpg",
            }}
            style={{ width: 75, height: 90 }}
          ></Image>
          <Text style={styles.pad}>
            Hey, Shafee here. My love for literature started when I read a book
            by Haruki Murakami called 'Kafka on the Shore'. His works led me to
            one of my favorite genres of literature, Russian, with authors like
            Dostoevsky and Bulgakov.
          </Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.name}>JAHAZIEL ISRAEL</Text>
          <Text style={styles.title}>Between the World and Me</Text>
          <Text style={styles.spc}>by Ta-Nehisi Coates</Text>
          <Image
            source={{
              uri:
                "https://prodimage.images-bn.com/pimages/9780812993547_p0_v5_s600x595.jpg",
            }}
            style={{ width: 75, height: 90 }}
          ></Image>
          <Text style={styles.pad}>
            Hi, I'm Jahaziel and when I'm not rummaging through the dozens of
            sidewalk carts of discounted books at Strand Bookstore or Center for
            Fiction in Brooklyn, you can certainly find me breaking all sorts of
            stereotypes while reading or journaling on the subway, or in my
            freetime writing hand-lettered calligraphy cards and letters to
            close friends.
          </Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.name}>SHAN SIDDIQUI</Text>
          <Text style={styles.title}>Guns, Germs, and Steel</Text>
          <Text style={styles.spc}> by Jared Diamond</Text>
          <Image
            source={{
              uri:
                "https://prodimage.images-bn.com/pimages/9780393354324_p0_v3_s600x595.jpg",
            }}
            style={{ width: 75, height: 90 }}
          ></Image>
          <Text style={styles.pad}>
            Hey, I'm Shan and I have been to many places in books, some real,
            some fictional. Most of them are far away. However I feel like I own
            a piece of those places because of the fictional memories I have
            there. Books hold insight, so many of things I know about life I
            learned from books. Books have shaped me as a person.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFAF1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 12,
    padding: 20,
    fontWeight: "bold",
    borderColor: "#EBECF0",
    borderWidth: 5,
    borderTopWidth: 2,
  },
  title: {
    color: "#B91C1C",
    fontWeight: "bold",
  },
  pad: {
    paddingBottom: 20,
    paddingTop: 10,
    textAlign: "justify",
  },
  name: {
    fontSize: 20,
    paddingBottom: 10,
  },
  spc: {
    paddingBottom: 10,
  },
  reads: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 12,
  },
});

export default AboutUsScreen;
