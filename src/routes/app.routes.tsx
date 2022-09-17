import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home";
import Game from "../Screens/Game";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="game" component={Game} />
    </Navigator>
  );
};
