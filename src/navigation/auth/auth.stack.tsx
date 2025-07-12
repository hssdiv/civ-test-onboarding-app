import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Onboarding } from "./onboarding";
import { SignUp } from "./signUp";

export type AuthScreens = {
  Onboarding: undefined;
  SignUp: undefined
};

const Stack = createNativeStackNavigator<AuthScreens>();

export type AuthScreensNavigation = NativeStackNavigationProp<AuthScreens>;

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}