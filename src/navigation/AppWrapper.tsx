import { NavigationContainer } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

import { navigationRoutes } from "../constants/navigationRoutes";
import HomeScreen from "../screens/home/home.screen";
import PhotoScreen from "../screens/photo/photo.screen";
import { RuLocale } from "../constants/ruLocale";

export type WrapperStackParamList = {
  [navigationRoutes.HomeScreen]: undefined;
  [navigationRoutes.PhotoScreen]: { id: string; userName: string };
};

export type NavigationProps = StackNavigationProp<WrapperStackParamList>;

const Stack = createStackNavigator<WrapperStackParamList>();

const AppWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={navigationRoutes.HomeScreen}
          component={HomeScreen}
          options={{
            headerTitle: "Photogram",
          }}
        />
        <Stack.Screen
          name={navigationRoutes.PhotoScreen}
          component={PhotoScreen}
          options={{
            headerTitle: RuLocale.publications,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
