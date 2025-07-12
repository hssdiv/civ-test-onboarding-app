import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { AppStack } from "./app";
import { AuthStack } from "./auth";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Stack.Navigator>
        {isAuthorized ?
          <Stack.Screen name="App" component={AppStack} /> :
          <Stack.Screen name="Auth" component={AuthStack} />}
      </Stack.Navigator>
    </View>
  );
}