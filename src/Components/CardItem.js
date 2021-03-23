import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import tailwind from "tailwind-rn";

const CardItem = ({ name, imageUrl, description, address, website, websiteUrl }) => {
	return (
		<View style={tailwind("flex items-center border-t-2 border-b p-10")}>
			<Image
				style={tailwind("w-56 h-56 rounded-xl")}
				source={{
					uri: imageUrl,
				}}
			/>
			<Text style={tailwind("text-xl font-bold uppercase pt-2 text-red-700")}>{name}</Text>
			<Text style={tailwind("text-center text-lg p-5")}>{description}</Text>
			<Text>{address}</Text>
			<Text style={tailwind("text-red-700 pt-2")} onPress={() => Linking.openURL(websiteUrl)}>
				{website}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
	},
});

export default CardItem;
