import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BookstoresScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Bookstore Screen Screen</Text>
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

export default BookstoresScreen;
