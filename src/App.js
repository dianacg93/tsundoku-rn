import React from "react";
import { Provider } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./screens/Landing/LandingScreen";
import BestsellersScreen from "./screens/Bestsellers/BestSellersScreen";
import SearchBooksScreen from "./screens/SearchBooks/SearchBooksScreen";
import MissionScreen from "./screens/Mission/MissionScreen";
import BookstoresScreen from "./screens/BookStores/BookStoresScreen";
import AboutUsScreen from "./screens/AboutUs/AboutUsScreen";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Landing" component={LandingScreen} />
          <RootStack.Screen name="Best Sellers" component={BestsellersScreen} />
          <RootStack.Screen name="Search Books" component={SearchBooksScreen} />
          <RootStack.Screen name="Mission" component={MissionScreen} />
          <RootStack.Screen name="Book Stores" component={BookstoresScreen} />
          <RootStack.Screen name="About Us" component={AboutUsScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
