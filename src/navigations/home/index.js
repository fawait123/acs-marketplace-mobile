import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../global/colors";
import ProfileScreen from "../../screens/profile";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return <HomeScreen />;
};

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: COLORS.black,
        inactiveTintColor: COLORS.gray,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: focused ? COLORS.black : COLORS.white,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name="home"
                size={24}
                color={focused ? COLORS.white : COLORS.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="carts"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: focused ? COLORS.black : COLORS.white,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name="shopping-bag"
                size={24}
                color={focused ? COLORS.white : COLORS.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: focused ? COLORS.black : COLORS.white,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name="bell"
                size={24}
                color={focused ? COLORS.white : COLORS.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profiles"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: focused ? COLORS.black : COLORS.white,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name="user"
                size={24}
                color={focused ? COLORS.white : COLORS.gray}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
