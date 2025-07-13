import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStack } from "./app";
import { AuthStack } from "./auth";
import { View } from "react-native";
import { useAuth } from "../stores";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const token = useAuth(store => store.token)

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {token ?
          <Stack.Screen name="App" component={AppStack} /> :
          <Stack.Screen name="Auth" component={AuthStack} />}
      </Stack.Navigator>
    </View>
  );
}