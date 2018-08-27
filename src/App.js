import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Main from "./screens/Main/";

const Drawer = DrawerNavigator(
  {
    Main: { screen: Main },
  },
  {
    initialRouteName: "Main",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: {screen: Drawer },

    Main: { screen: Main }
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
