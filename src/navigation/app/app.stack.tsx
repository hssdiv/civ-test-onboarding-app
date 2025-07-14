import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Account } from "./account";
export type AppScreens = {
  Account: { username?: string; password?: string } | undefined;
};

const Stack = createNativeStackNavigator<AppScreens>();

export type AppScreensNavigation = NativeStackNavigationProp<AppScreens>;

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}