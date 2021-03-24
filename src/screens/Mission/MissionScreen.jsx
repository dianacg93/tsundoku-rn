import  React from 'react';
import { Linking, StyleSheet, Text, View, ScrollView, Image } from "react-native"; 
import tailwind from 'tailwind-rn';

const ReturnBodyText = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={tailwind("text-justify px-10 pl-16 pr-16")}>
                From relieving stress to improving brain function to increasing empathy, <strong> books are capable of doing a lot more than just entertaining the people who enjoy them </strong>. In fact, reading is the <strong> best workout for your brain </strong>, and it can even <strong> improve your memory </strong>. Sure, unwinding with Netflix at the end of every day is relaxing and all, but regularly reading is good for your mind, body, and soul.
                </Text>
                <br />
                <Text style={tailwind("text-justify px-10 pl-16 pr-16")}>
                You may not be able to see it, but <strong>your brain is one of the most important parts of yourself</strong>. Without it and the memories it keeps, you wouldn't be you, let alone remember all of your favorite books.    
                </Text>
                <br />
                <Text style={tailwind("text-justify px-10 pb-10 pl-16 pr-16")}>
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
                <View style={tailwind("flex flex-col lg:flex-row border-t-2 items-center pt-3 pt-3")}>
                
                <Image 
                    source={{
                        uri: 'https://tsundoku.netlify.app/static/media/1.2336d694.png',
                    }}
                    style={{ width: 200, height: 200, }} 
                    />
                </View>
                <View  style={styles.centered}>
                    <Text style={tailwind("lg:w-1/4 p-3 font-bold")}>Why Unread Books Are More Valuable to Our Lives than Read Ones</Text>
                </View>
                <View style={styles.storyDescription}>
                    <Text style={tailwind("text justify w-screen px-10 lg:w-11/12 p-3")}>
                    The writer Umberto Eco belongs to that small class of scholars who are encyclopedic, insightful, and nondull. He is the owner of a large personal library (containing thirty thousand books) ...
                    </Text>
                </View>
                <Text style={tailwind("text justify w-screen p-3 font-bold text-red-500")}
                    onPress={() => Linking.openURL("https://www.brainpickings.org/2015/03/24/umberto-eco-antilibrary/")}>
                    Read More >
                </Text>
                <View style={styles.storyAuthor}>
                    <Text style={tailwind("text-center lg:w-1/4 p-3 border-b ")}>
                    by Maria Popova
                    </Text>
                </View>
            </View>
            <View style={styles.storyContainer}>
                <View style={tailwind("flex flex-col lg:flex-row border-t-2 items-center pt-3")}>
                <Image 
                    source={{
                        uri: 'https://tsundoku.netlify.app/static/media/2.b4d1c8c9.png',
                    }}
                    style={{ width: 200, height: 200 }} 
                    />
                </View>
                <View style={styles.centered}>
                    <Text style={tailwind("lg:w-1/4 p-3 font-bold")}>5 Astonishing Ways Reading Changes Your Brain</Text>
                </View>
                <View style={tailwind("text justify w-screen px-10 lg:w-11/12 p-3")}>
                    <Text>
                    Since you were a child, you've probably been told to read because "it's good for you." Parents and doctors, teachers and librarians — even me on this very site — have touted the many health and wellness benefits of books, but has anyone every told you ...
                    </Text>
                </View>
                <Text style={tailwind("text justify w-screen p-3 font-bold text-red-500")}
                    onPress={() => Linking.openURL("https://www.bustle.com/p/what-does-reading-do-to-your-brain-these-5-effects-are-pretty-astounding-74676")}>
                    Read More >
                </Text>
                <View style={styles.storyAuthor}>
                    <Text style={tailwind("text-center lg:w-1/4 p-3 border-b ")}>
                    by Sadie Trombetta
                    </Text>
                </View>
            </View>
            <View style={styles.storyContainer}>
                <View style={tailwind("flex flex-col lg:flex-row border-t-2 items-center pt-3")}>
              <Image 
                    source={{
                        uri: 'https://tsundoku.netlify.app/static/media/3.348bd846.png',
                    }}
                    style={{ width: 200, height: 200 }} 
                    />
                </View>
                <View style={styles.centered}>
                    <Text style={tailwind("lg:w-1/4 p-3 font-bold")}>Why Books Are Here to Stay</Text>
                </View>
                <View style={tailwind("text justify w-screen px-10 lg:w-11/12 p-3")}>
                    <Text>
                    Despite the rise of e-books, physical books aren't going anywhere. Graphic designer Chip Kidd shares why their design is so lasting. The physical object of a book is almost like a person. I mean, it has a spine and it has a backbone. It has a face. Actually ...
                    </Text>
                </View>
                <Text style={tailwind("text justify w-screen p-3 font-bold text-red-500")}
                    onPress={() => Linking.openURL("https://www.ted.com/talks/chip_kidd_why_books_are_here_to_stay")}>
                    Read More >
                </Text>
                <View style={styles.storyAuthor}>
                    <Text style={tailwind("text-center lg:w-1/4 p-3 border-b ")}>
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
            <View >
                <Text style={tailwind("text-2xl uppercase font-bold font-headings text-center p-6 pr-10")}>
                    The Tsundoku Project - Books Are Here To Stay
                </Text>
            </View>
           <hr />
            <View style={tailwind("p-5 lg:px-20 font-headings")}>
                <Text style={tailwind("text-2xl uppercase font-bold font-headings text-right p-6 pr-10")}>mission</Text>
            </View>
            <View >
                <Text style={tailwind("font-bold text-3xl pl-6")}>WHY WE BELIEVE</Text>
                <Text style={tailwind("font-bold text-3xl pl-6")}>IN READING BOOKS</Text>
            </View>
            <View>
                <View style={tailwind("flex flex-col lg:flex-row justify-between items-center pt-4 pb-1 w-full lg:w-3/4")}>
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
})


 

export default MissionScreen