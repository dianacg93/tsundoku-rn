import  React from 'react';
import { Linking, StyleSheet, Text, View, ScrollView, Image } from "react-native";

const ReturnBodyText = () => {
    return (
        <ScrollView>
            <View>
                <Text>
                From relieving stress to improving brain function to increasing empathy, <strong> books are capable of doing a lot more than just entertaining the people who enjoy them </strong>. In fact, reading is the <strong> best workout for your brain </strong>, and it can even <strong> improve your memory </strong>. Sure, unwinding with Netflix at the end of every day is relaxing and all, but regularly reading is good for your mind, body, and soul.
                </Text>
                <br />
                <Text>
                You may not be able to see it, but <strong>your brain is one of the most important parts of yourself</strong>. Without it and the memories it keeps, you wouldn't be you, let alone remember all of your favorite books.    
                </Text>
                <br />
                <Text>
                Luckily, just be reading them, you can help improve your memory and exercise your brain in the most fun and effective way.    
                </Text>
            </View>
        </ScrollView>
    );
};

const ReturnWebStory = () => {
    return (
        <View>
            <View style={styles.storyContainer}>
                <View style={styles.storyPhoto}>
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL("https://www.brainpickings.org/2015/03/24/umberto-eco-antilibrary/")}>
                    Article 1
                </Text>
                <Image 
                    source={{
                        uri: './1.png',
                    }}
                    style={{ width: 40, height: 40 }} 
                    />
                </View>
                <View style={styles.storyTitle}>
                    <Text>Why Unread Books Are More Valuable to Our Lives than Read Ones</Text>
                </View>
                <View style={styles.storyDescription}>
                    <Text>
                    The writer Umberto Eco belongs to that small class of scholars who are encyclopedic, insightful, and nondull. He is the owner of a large personal library (containing thirty thousand books) ...
                    </Text>
                </View>
                <View style={styles.storyAuthor}>
                    <Text>
                    by Maria Popova
                    </Text>
                </View>
            </View>
            <View style={styles.storyContainer}>
                <View style={styles.storyPhoto}>
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL("https://www.bustle.com/p/what-does-reading-do-to-your-brain-these-5-effects-are-pretty-astounding-74676")}>
                    Article 2
                </Text>
                <Image 
                    source={{
                        uri: './2.png',
                    }}
                    style={{ width: 40, height: 40 }} 
                    />
                </View>
                <View style={styles.storyTitle}>
                    <Text>5 Astonishing Ways Reading Changes Your Brain</Text>
                </View>
                <View style={styles.storyDescription}>
                    <Text>
                    Since you were a child, you've probably been told to read because "it's good for you." Parents and doctors, teachers and librarians — even me on this very site — have touted the many health and wellness benefits of books, but has anyone every told you ...
                    </Text>
                </View>
                <View style={styles.storyAuthor}>
                    <Text>
                    by Sadie Trombetta
                    </Text>
                </View>
            </View>
            <View style={styles.storyContainer}>
                <View style={styles.storyPhoto}>
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL("https://www.ted.com/talks/chip_kidd_why_books_are_here_to_stay")}>
                    Article 3
                </Text>
                <Image 
                    source={{
                        uri: './3.png',
                    }}
                    style={{ width: 40, height: 40 }} 
                    />
                </View>
                <View style={styles.storyTitle}>
                    <Text>Why Books Are Here to Stay</Text>
                </View>
                <View style={styles.storyDescription}>
                    <Text>
                    Despite the rise of e-books, physical books aren't going anywhere. Graphic designer Chip Kidd shares why their design is so lasting. The physical object of a book is almost like a person. I mean, it has a spine and it has a backbone. It has a face. Actually ...
                    </Text>
                </View>
                <View style={styles.storyAuthor}>
                    <Text>
                    by Chip Kidd
                    </Text>
                </View>
            </View>
        </View>
    );
};

const MissionScreen = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text>
                    The Tsundoku Project - Books Are Here To Stay
                </Text>
            </View>
           <hr />
            <View>
                <Text>mission</Text>
            </View>
            <View>
                <Text>WHY WE BELIEVE</Text>
                <Text>IN READING BOOKS</Text>
            </View>
            <View>
                <View>
                    <Text>
                        <strong> By Tsundoku Team </strong>
                    </Text>
                </View>
            </View>
            <View>
                <ReturnBodyText />
            </View>
            <ReturnWebStory />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


 

export default MissionScreen