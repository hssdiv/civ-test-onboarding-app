import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStack } from "./app";
import { AuthStack } from "./auth";
import { View } from "react-native";
import { useAuth } from "../stores";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const account = useAuth(store => store.account)

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {account ?
          <Stack.Screen name="App" component={AppStack} /> :
          <Stack.Screen name="Auth" component={AuthStack} />}
      </Stack.Navigator>
    </View>
  );
}