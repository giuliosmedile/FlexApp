import React from "react";
import {
  Appbar,
  MD3LightTheme as DefaultTheme,
  withTheme,
} from "react-native-paper";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";

export default function RootLayout() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Appbar.Header elevated={true} style={{ elevation: 2 }}>
        <Appbar.Content title="FlexApp" titleStyle={{ fontWeight: "bold" }} />
      </Appbar.Header>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#e91e63"
        screenOptions={({ route }) => ({
          tabBarLabel: route.name,
          elevation: 2,
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Statistiche",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="trending-up"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
