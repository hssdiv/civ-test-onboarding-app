import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Onboarding } from "./onboarding";
import { SignUp } from "./signUp";
import { useAuth } from "../../stores";

export type AuthScreens = {
  Onboarding: undefined;
  SignUp: undefined
};

const Stack = createNativeStackNavigator<AuthScreens>();

export type AuthNavigation = NativeStackNavigationProp<AuthScreens>;

export const AuthStack = () => {

  const onboardingFinished = useAuth(store => store.onboardingFinished)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade'
      }}
      initialRouteName={onboardingFinished ? "SignUp" : "Onboarding"}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}