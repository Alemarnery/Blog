import React from "react";
import { createStackNavigator, createAppContainer } from "react-native";
import IndexScreen from "./src/screens/indexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
  },
  {
    InitialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
