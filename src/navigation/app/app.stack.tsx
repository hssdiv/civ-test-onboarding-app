import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Account } from "./account";
export type AppScreens = {
  Account: { username?: string; password?: string } | undefined;
};

export type AppScreensNavigation = NativeStackNavigationProp<AppScreens>;

export type AccountSignInRoute = NativeStackScreenProps<AppScreens, 'Account'>['route'];

const Stack = createNativeStackNavigator<AppScreens>();

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