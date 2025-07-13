import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RootStack } from './src/navigation/root.stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { useGetToastConfig } from './src/helper';

export default function App() {
  const toastConfig = useGetToastConfig();

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <RootStack />
          <Toast
            visibilityTime={5000}
            position="bottom"
            config={toastConfig}
            onPress={() => Toast.hide()}
          />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
