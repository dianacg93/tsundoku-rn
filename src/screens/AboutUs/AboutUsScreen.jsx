import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Diana</Text>
        <Text>Kitchen</Text>
        <Text>Banana Yoshimoto</Text>
        <Image
          source={{
            uri:
              "https://prodimage.images-bn.com/pimages/9780802142443_p0_v1_s600x595.jpg",
          }}
          style={{ width: 40, height: 40 }}
        />
        <Text>
          About me: Hello fellow readers! My name is Diana. Growing up reading
          books in Spanish and eventually transitioning to reading books in
          English, literature has been and continues to be a past time that
          allows me to see into other people's minds and learn many lessons I
          may have not learned in my day-to-day routine. As I have grown older,
          I have seen my favorite genre change many times, and at the moment I
          find myself reading self-help and business books
        </Text>
      </View>

      <View>
        <Text>Shafee</Text>
        <Text>The Brothers Karamazov</Text>
        <Text>Fyodor Dostoevsky</Text>
        <Image
          source={{
            uri:
              "https://prodimage.images-bn.com/pimages/9780140449242_p0_v2_s600x595.jpg",
          }}
          style={{ width: 40, height: 40 }}
        ></Image>
        <Text>
          Hey, Shafee here. My love for literature started when I read a book by
          Haruki Murakami called 'Kafka on the Shore'. His works led me to one
          of my favorite genres of literature, Russian, with authors like
          Dostoevsky and Bulgakov.
        </Text>
      </View>

      <View>
        <Text>Jahaziel</Text>
        <Text>Between the World and Me</Text>
        <Text>Ta-Nehisi Coates</Text>
        <Image
          source={{
            uri:
              "https://prodimage.images-bn.com/pimages/9780812993547_p0_v5_s600x595.jpg",
          }}
          style={{ width: 40, height: 40 }}
        ></Image>
        <Text>
          Hi, I'm Jahaziel and when I'm not rummaging through the dozens of
          sidewalk carts of discounted books at Strand Bookstore or Center for
          Fiction in Brooklyn, you can certainly find me breaking all sorts of
          stereotypes while reading or journaling on the subway, or in my
          freetime writing hand-lettered calligraphy cards and letters to close
          friends.
        </Text>
      </View>

      <View>
        <Text>Shan</Text>
        <Text>Guns, Germs, and Steel</Text>
        <Text>Jared Diamond</Text>
        <Image
          source={{
            uri:
              "https://prodimage.images-bn.com/pimages/9780393354324_p0_v3_s600x595.jpg",
          }}
          style={{ width: 40, height: 40 }}
        ></Image>
        <Text>
          "Hey, I'm Shan and I have been to many places in books, some real,
          some fictional. Most of them are far away. However I feel like I own a
          piece of those places because of the fictional memories I have there.
          Books hold insight, so many of things I know about life I learned from
          books. Books have shaped me as a person."
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AboutUsScreen;
