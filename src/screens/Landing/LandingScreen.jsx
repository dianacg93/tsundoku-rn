import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, Image, ScrollView, View, ImageBackground } from "react-native";
import { Context } from "../../store";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const LandingScreen = ({ navigation }) => {
	const { state, onUserLogin, onUserLogout } = useContext(Context);

	const [fontLoaded, setFontLoaded] = useState(false);

	const loadFonts = () => {
		return Font.loadAsync({
			"jost-reg": require("../../../assets/fonts/Jost-Regular.ttf"),
			"jost-bold": require("../../../assets/fonts/Jost-Bold.ttf"),
			"jost-light": require("../../../assets/fonts/Jost-Light.ttf"),
			"jost-thin": require("../../../assets/fonts/Jost-Thin.ttf"),
		});
	};

	if (!fontLoaded) {
		return <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)} />;
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri:
						"https://images.unsplash.com/photo-1600172454284-934feca24ccd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
				}}
				style={styles.image}
			/>

			<Text style={styles.title}>tsundoku</Text>
			<Text style={styles.slogan}>books are here to stay</Text>
			{/* <Text>{JSON.stringify(state)}</Text>
			<TouchableOpacity onPress={onUserLogin}>
				<Text style={{ color: "#fff", fontSize: 18 }}>User Login</Text>
			</TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		position: "absolute",
	},
	title: {
		fontSize: 60,
		padding: 10,
		fontFamily: "jost-bold",
	},
	slogan: {
		fontSize: 25,
		fontFamily: "jost-light",
	},
});

export default LandingScreen;
