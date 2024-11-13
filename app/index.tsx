import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import RotaX from "./pages/RotaX";
import MyPlan from "./pages/MyPlan";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "RotaX") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "MyPlan") {
              iconName = focused ? "airplane" : "airplane-outline";
            }
            return (
              <Ionicons name={iconName as any} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "#0077b6",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            paddingBottom: 5, 
            height: 35, 
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="RotaX" component={RotaX} />
        <Tab.Screen name="MyPlan" component={MyPlan} />
      </Tab.Navigator>
  );
}
