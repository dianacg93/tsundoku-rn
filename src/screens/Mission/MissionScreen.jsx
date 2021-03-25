import  React from 'react';
import { Linking, StyleSheet, Text, View, ScrollView, Image } from "react-native"; 
import tailwind from 'tailwind-rn';

const ReturnBodyText = () => {
    return (
            <View style={styles.container}>
                <Text style={tailwind("px-10 pl-16 pr-16 pb-10")}>
                    <Text>
                    From relieving stress to improving brain function to increasing empathy,  books are capable of doing a lot more than just entertaining the people who enjoy them. In fact, reading is the  best workout for your brain , and it can even  improve your memory . Sure, unwinding with Netflix at the end of every day is relaxing and all, but regularly reading is good for your mind, body, and soul.
                    </Text>
                </Text>
                    <Text style={tailwind("px-10 pl-16 pr-16 pb-10")}>
                    You may not be able to see it, but your brain is one of the most important parts of yourself. Without it and the memories it keeps, you wouldn't be you, let alone remember all of your favorite books.    
                    </Text>
                    <Text style={tailwind("px-10 pb-10 pl-16 pr-16")}>
                    Luckily, just be reading them, you can help improve your memory and exercise your brain in the most fun and effective way.    
                    </Text>
            </View>
    );
};

const ReturnWebStory = () => {
    return (
        <View>
            <View style={styles.storyContainer}>
                <View style={tailwind("flex flex-col border-t-2 items-center pt-3 pt-3")}>
                
                <Image 
                    source={{
                        uri: 'https://tsundoku.netlify.app/static/media/1.2336d694.png',
                    }}
                    style={{ width: 200, height: 200, }} 
                    />
                </View>
                <View  style={styles.centered}>
                    <Text style={tailwind("p-3 pl-16 pr-16 font-bold")}>
                        <Text>Why Unread Books Are More Valuable to Our Lives than Read Ones</Text>
                    </Text>
                </View>
                <View style={styles.storyDescription}>
                    <Text style={tailwind("px-10 p-3 pl-16 pr-16")}>
                        <Text>
                        The writer Umberto Eco belongs to that small class of scholars who are encyclopedic, insightful, and nondull. He is the owner of a large personal library (containing thirty thousand books)...
                        </Text>
                    </Text>
                </View>
                <Text style={tailwind("p-3 pl-16 font-bold text-red-500")}>
                    <Text 
                        onPress={() => Linking.openURL("https://www.brainpickings.org/2015/03/24/umberto-eco-antilibrary/")}>
                        Read More >
                    </Text>
                </Text>
                <View style={styles.storyAuthor}>
                    <Text style={tailwind("pb-4")}>
                        <Text style={tailwind("text-center p-3 border-b ")}>
                        by Maria Popova
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.storyContainer}>
                <View style={tailwind("flex flex-col border-t-2 items-center pt-3")}>
                <Image 
                    source={{
                        uri: 'https://tsundoku.netlify.app/static/media/2.b4d1c8c9.png',
                    }}
                    style={{ width: 200, height: 200 }} 
                    />
                </View>
                <View style={styles.centered}>
                    <Text style={tailwind("p-3 pl-16 pr-16 font-bold")}>
                        <Text>5 Astonishing Ways Reading Changes Your Brain</Text>
                    </Text>
                </View>
                <View >
                    <Text style={tailwind("px-10 p-3 pl-16 pr-16")}>
                        <Text>
                        Since you were a child, you've probably been told to read because "it's good for you." Parents and doctors, teachers and librarians — even me on this very site — have touted the many health and wellness benefits of books, but has anyone every told you ...
                        </Text>
                    </Text>
                </View>
                <Text style={tailwind("p-3 pl-16 font-bold text-red-500")}>
                    <Text 
                        onPress={() => Linking.openURL("https://www.bustle.com/p/what-does-reading-do-to-your-brain-these-5-effects-are-pretty-astounding-74676")}>
                        Read More >
                </Text>
                </Text>
                <View style={styles.storyAuthor}>
                    <Text style={tailwind("pb-4")}>
                        <Text style={tailwind("text-center p-3 border-b ")}>
                        by Sadie Trombetta
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.storyContainer}>
                <View style={tailwind("flex flex-col border-t-2 items-center pt-3")}>
              <Image 
                    source={{
                        uri: 'https://tsundoku.netlify.app/static/media/3.348bd846.png',
                    }}
                    style={{ width: 200, height: 200 }} 
                    />
                </View>
                <View style={styles.centered}>
                    <Text style={tailwind("p-3 pl-16 pr-16 font-bold")}>
                        <Text>Why Books Are Here to Stay</Text>
                    </Text>
                </View>
                <View >
                    <Text style={tailwind("px-10 p-3 pl-16 pr-16")}>
                        <Text>
                        Despite the rise of e-books, physical books aren't going anywhere. Graphic designer Chip Kidd shares why their design is so lasting. The physical object of a book is almost like a person. I mean, it has a spine and it has a backbone. It has a face. Actually...
                        </Text>
                    </Text>
                </View>
                <Text style={tailwind("p-3 pl-16 font-bold text-red-500")}>
                    <Text 
                        onPress={() => Linking.openURL("https://www.ted.com/talks/chip_kidd_why_books_are_here_to_stay")}>
                        Read More >
                    </Text>
                </Text>
                <View style={styles.storyAuthor}>
                    <Text style={tailwind("pb-20")}>
                        <Text style={tailwind("text-center p-3 border-b")}>
                        by Chip Kidd
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const MissionScreen = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View >
                    <Text>
                        <Text style={tailwind("text-xl uppercase font-bold text-center p-6 pr-10")}>
                            The Tsundoku Project - Books Are Here To Stay
                        </Text>
                    </Text>
                </View>
                <View style={tailwind("p-5")}>
                    <Text>
                        <Text style={tailwind("text-xl uppercase font-bold  text-right p-6 pr-10")}>mission</Text>
                    </Text>
                </View>
                <View >
                    <Text style={tailwind("pl-8")}>
                        <Text style={tailwind("font-bold text-2xl text-left")}>WHY WE BELIEVE </Text>
                        <Text style={tailwind("font-bold text-2xl text-left")}>IN READING BOOKS</Text>
                    </Text>
                </View>
                <View>
                    <View style={tailwind("flex flex-col justify-between items-center pt-4 pb-1 w-full")}>
                        <Text>
                            <Text style={tailwind("font-bold")}>
                                By Tsundoku Team 
                            </Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <ReturnBodyText />
                </View>
                <ReturnWebStory />
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
		paddingTop: 20,
		flex: 1,
		justifyContent: "center",
		width: "100%",
		height: "100%",
        backgroundColor: "#FFFFEE"
	},
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
    storyStyle: {
        flex: 1,
        flexDirection: "row",
    }
})


 

export default MissionScreen