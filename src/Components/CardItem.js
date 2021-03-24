import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import tailwind from "tailwind-rn";

const CardItem = ({ name, imageUrl, description, address, website, websiteUrl }) => {
	return (
		<View style={tailwind("flex items-center border-t border-b p-10")}>
			<Image
				style={tailwind("w-56 h-56 rounded-xl")}
				source={{
					uri: imageUrl,
				}}
			/>
			<Text style={tailwind("text-xl font-bold uppercase pt-2 text-red-700")}>{name}</Text>
			<Text style={tailwind("text-center text-lg p-5")}>{description}</Text>
			<View style={tailwind("flex flex-row items-center")}>
				<Text style={tailwind("mr-2")}>
					<MaterialCommunityIcons name="map-marker" size={25} color="#b02727" />
				</Text>
				<Text>{address}</Text>
			</View>
			<View style={tailwind("flex flex-row items-center py-3")}>
				<Text style={tailwind("mr-2")}>
					<MaterialCommunityIcons name="web" size={25} color="#b02727" />
				</Text>
				<Text style={tailwind("text-red-700")} onPress={() => Linking.openURL(websiteUrl)}>
					{website}
				</Text>
			</View>
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
