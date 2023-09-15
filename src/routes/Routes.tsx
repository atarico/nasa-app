import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";

import { Home } from "../views/Home/Home";
import { Detail } from "../views/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();

const routesScreenDefaultOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: "rgb(7, 56, 170)",
  },
  headerTitleStyle: {
    color: "#fff",
  },
  headerTitleAlign: "center",
};

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={routesScreenDefaultOptions} />
      <Stack.Screen name="Detail" component={Detail} options={routesScreenDefaultOptions} />
    </Stack.Navigator>
  </NavigationContainer>
);
