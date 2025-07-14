import { useState } from 'react';
import { Dimensions, Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import { useColors } from '../../../../../styles';
import { Button, PasswordField, Text, TextInput } from '../../../../../components';

export const AuthCredentialModal = ({
  username,
  password,
  onClose,
}: {
  username: string;
  password: string;
  onClose: () => void;
}) => {
  const [modalVisible, setModalVisible] = useState(true)

  const colors = useColors();

  const [passwordSecure, setPasswordSecure] = useState(true);

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => {
        setTimeout(() => {
          onClose?.();
          setModalVisible(false);
        }, 100);
      }}
      animationType="fade"
      transparent
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}
      >

        <View
          style={{
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: 'grey',
            paddingVertical: 20,
            paddingHorizontal: 24,
            borderRadius: 12,
            width: '100%',
          }}
        >
          <ScrollView
            style={{
              maxHeight: Dimensions.get('screen').height / 1.5
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: colors.titlePrimary,
              }}
            >
              User signup successful!
            </Text>

            <Text
              style={{
                marginTop: 8,
              }}
            >
              Here are your credentials for Sign In:
            </Text>

            <TextInput
              label="Username"
              value={username}
              containerStyle={{
                marginBottom: 16,
                opacity: 0.5,
              }}
              editable={false}
            />
            <PasswordField
              labelText='Password'
              value={password}
              editable={false}
              secure={passwordSecure}
              setSecure={setPasswordSecure}
              style={{
                opacity: 0.5,
              }}
              placeholder={'asd'}
            />

            <Button
              text="Autofill & Close"
              onPress={() => {
                onClose?.();
                setModalVisible(false);
              }}
              containerStyle={{
                marginTop: 24,
              }}
            />
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          paddingHorizontal: 20,
        }}
        onPress={() => {
          setTimeout(() => {
            onClose?.();
            setModalVisible(false);
          }, 100);
        }}
      />
    </Modal>
  );
};
