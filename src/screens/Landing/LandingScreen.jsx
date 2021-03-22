import React, { useContext } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { Context } from "../../store";

const LandingScreen = ({ navigation }) => {
	const { state, onUserLogin, onUserLogout } = useContext(Context);

	console.log(`${JSON.stringify(state)}`);

	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri:
						"https://images.unsplash.com/photo-1547104442-044448b73426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
				}}
				style={styles.image}
			/>
			<Text>Landing Screen</Text>
			<Text> {JSON.stringify(state)}</Text>
			<TouchableOpacity
				// style={{
				//     height: 50,
				//     width: 220,
				//     marginTop: 10,
				//     marginBottom: 10,
				//     backgroundColor: '#ff5733',
				//     borderRadius: 30,
				//     justifyContent: 'center',
				//     alignItems: 'center'
				// }}
				onPress={onUserLogin}
			>
				<Text style={{ color: "#fff", fontSize: 18 }}>User Login</Text>
			</TouchableOpacity>
			{/* <Button title="NYT Best Sellers" onPress={() => navigation.navigate("Best Sellers")} />
			<Button title="Search" onPress={() => navigation.navigate("Search Books")} />
			<Button title="Mission" onPress={() => navigation.navigate("Mission")} />
			<Button title="About Us" onPress={() => navigation.navigate("About Us")} />
			<Button title="Book Stores" onPress={() => navigation.navigate("Book Stores")} /> */}
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
});

export default LandingScreen;
