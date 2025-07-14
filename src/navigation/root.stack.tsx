import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppScreens, AppStack } from "./app";
import { AuthScreens, AuthStack } from "./auth";
import { View } from "react-native";
import { useAuth } from "../stores";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootScreens = {
  Auth: NavigatorScreenParams<AuthScreens>;
  App: NavigatorScreenParams<AppScreens>;
};

const Stack = createNativeStackNavigator();

export type RootScreensNavigation = NativeStackNavigationProp<RootScreens>;

export const RootStack = () => {
  const account = useAuth(store => store.account)

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade'
        }}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </View>
  );
}