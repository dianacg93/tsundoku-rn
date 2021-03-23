import React from "react";
import { Provider } from "./store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import LandingScreen from "./Screens/Landing/LandingScreen";
import BestsellersScreen from "./Screens/Bestsellers/BestSellersScreen";
import SearchBooksScreen from "./Screens/SearchBooks/SearchBooksScreen";
import MissionScreen from "./Screens/Mission/MissionScreen";
import BookstoresScreen from "./Screens/BookStores/BookStoresScreen";
import AboutUsScreen from "./Screens/AboutUs/AboutUsScreen";

import { header } from "./StackStyles";

const LandingStack = createStackNavigator();
const BestsellerStack = createStackNavigator();
const SearchBooksStack = createStackNavigator();
const MissionStack = createStackNavigator();
const BookstoresStack = createStackNavigator();
const AboutUsStack = createStackNavigator();

const Drawer = createDrawerNavigator();

// stack screens
const LandingStackScreen = ({ navigation }) => (
	<LandingStack.Navigator screenOptions={header}>
		<LandingStack.Screen
			name="Home"
			component={LandingScreen}
			options={{
				title: "Home",
				headerLeft: () => <MaterialCommunityIcons name="menu" size={25} color="white" onPress={() => navigation.openDrawer()} />,
			}}
		/>
	</LandingStack.Navigator>
);

const BestsellersStackScreen = ({ navigation }) => (
	<BestsellerStack.Navigator screenOptions={header}>
		<BestsellerStack.Screen
			name="Best Sellers"
			component={BestsellersScreen}
			options={{
				title: "Best Sellers",
				headerLeft: () => <MaterialCommunityIcons name="menu" size={25} color="white" onPress={() => navigation.openDrawer()} />,
			}}
		/>
	</BestsellerStack.Navigator>
);

const SearchBooksStackScreen = ({ navigation }) => (
	<SearchBooksStack.Navigator screenOptions={header}>
		<SearchBooksStack.Screen
			name="Search for a Book"
			component={SearchBooksScreen}
			options={{
				title: "Search Books",
				headerLeft: () => <MaterialCommunityIcons name="menu" size={25} color="white" onPress={() => navigation.openDrawer()} />,
			}}
		/>
	</SearchBooksStack.Navigator>
);

const MissionStackScreen = ({ navigation }) => (
	<MissionStack.Navigator screenOptions={header}>
		<MissionStack.Screen
			name="Mission"
			component={MissionScreen}
			options={{
				title: "Mission Screen",
				headerLeft: () => <MaterialCommunityIcons name="menu" size={25} color="white" onPress={() => navigation.openDrawer()} />,
			}}
		/>
	</MissionStack.Navigator>
);

const BookstoresStackScreen = ({ navigation }) => (
	<BookstoresStack.Navigator screenOptions={header}>
		<BookstoresStack.Screen
			name="Bookstores"
			component={BookstoresScreen}
			options={{
				title: "Bookstores",
				headerLeft: () => <MaterialCommunityIcons name="menu" size={25} color="white" onPress={() => navigation.openDrawer()} />,
			}}
		/>
	</BookstoresStack.Navigator>
);

const AboutUsStackScreen = ({ navigation }) => (
	<AboutUsStack.Navigator screenOptions={header}>
		<AboutUsStack.Screen
			name="About Us"
			component={AboutUsScreen}
			options={{
				title: "About Us Screen",
				headerLeft: () => <MaterialCommunityIcons name="menu" size={25} color="white" onPress={() => navigation.openDrawer()} />,
			}}
		/>
	</AboutUsStack.Navigator>
);

export default function App() {
	return (
		<Provider>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Landing">
					<Drawer.Screen name="Home" component={LandingStackScreen} />
					<Drawer.Screen name="Bestsellers" component={BestsellersStackScreen} />
					<Drawer.Screen name="Search Books" component={SearchBooksStackScreen} />
					<Drawer.Screen name="Mission" component={MissionStackScreen} />
					<Drawer.Screen name="Bookstores" component={BookstoresStackScreen} />
					<Drawer.Screen name="About Us" component={AboutUsStackScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
