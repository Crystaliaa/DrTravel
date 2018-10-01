import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import Main from "./screens/Main/";
import Login from "./screens/Login/";
import SignUp from "./screens/SignUp/";
import Where from "./screens/WhereAcheView/";
import Questions from "./screens/Questions";
import Map from "./screens/Map/";
import SettingsScreen from "./screens/Setting/";

/*const Drawer = createDrawerNavigator(
  {
    Main: { screen: Main },
  },
  {
    initialRouteName: "Main",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);*/

const AppNavigator = createStackNavigator(
  {
    //Drawer: {screen: Drawer },

    Main: { screen: Main },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Where: { screen: Where },
    Questions: { screen: Questions },
    Map: { screen: Map },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
