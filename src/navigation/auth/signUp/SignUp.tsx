import { View } from 'react-native';
import { Background, Button, ButtonNavigation, CheckboxText, Header, Layout, PasswordField, Text, TextInput } from '../../../components';
import { EMAIL_REGEX, safeOpenURL } from '../../../helper';
import { useColors } from '../../../styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CreateAccountForm } from '../../../types';
import { useAuth } from '../../../stores';
import { RootScreensNavigation } from '../../root.stack';
import { NavigateToSignIn, SignUpHeader } from './components';

export const SignUp = () => {
  const colors = useColors();

  const navigation = useNavigation<RootScreensNavigation>();

  const [securePassword, setSecurePassword] = useState(true);

  const signUp = useAuth(store => store.signUp);
  const loading = useAuth(store => store.loading);

  const onSubmit = async (data: CreateAccountForm) => {
    // console.log('signup form data: ', data)
    const result = await signUp(data);
    if (result) {
      navigation.navigate('App', {
        screen: 'Account',
        params: {
          username: result?.basicAuthCredentials?.username,
          password: result?.basicAuthCredentials?.password,
        }
      })
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      terms: false,
    },
  });

  return (
    <Background>
      <Header
        leftComponent={() => (
          <ButtonNavigation
            onPress={() => {
              navigation.reset({
                index: 1,
                routes: [
                  { name: 'Auth', params: { screen: 'Onboarding' } },
                ],
              });
            }}
          />
        )}
      />
      <Layout>
        <KeyboardAwareScrollView
          enableResetScrollToCoords={false}
        >
          <SignUpHeader />

          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Name is required',
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                testID='SignUpName'
                label="Name"
                placeholder="Enter Name"
                value={value}
                onChangeText={onChange}
                error={errors?.name?.message}
                containerStyle={{
                  marginBottom: 16,
                }}
              />
            )} />

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'E-mail is required',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Email is not valid',
              },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                testID='SignUpEmail'
                label="Email"
                placeholder="Enter Email"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                error={errors?.email?.message}
                containerStyle={{
                  marginBottom: 16,
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Provide Password',
              minLength: {
                value: 6,
                message: 'Password has to be at least 6 characters',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <PasswordField
                testID='SignUpPassword'
                value={value || ''}
                onBlur={onBlur}
                setValue={onChange}
                secure={securePassword}
                setSecure={setSecurePassword}
                error={errors.password?.message}
                labelText="Password"
                style={{ borderColor: colors.primary }}
                containerStyle={{
                  marginBottom: 32,
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="terms"
            rules={{
              required: 'Accept Terms of Service and Privacy Policy',
              validate: (value) => Boolean(value),
            }}
            render={({ field: { onChange, value } }) => (
              <CheckboxText
                testID="SignUpTerms"
                component={<Text>
                  By signing up, you agree to the{' '}
                  <Text
                    style={{ color: colors.primary }}
                    onPress={() => safeOpenURL('https://example.com')}
                  >
                    Terms of Service and Privacy Policy
                  </Text>
                </Text>}
                checked={value}
                onChange={onChange}
                error={errors.terms?.message}
              />
            )}
          />
        </KeyboardAwareScrollView>


        <View
          style={{
            marginBottom: 16,
          }}
        >
          <NavigateToSignIn />

          <Button
            testID='SignUpButton'
            text="Create account"
            loading={loading}
            onPress={handleSubmit(onSubmit)}
            containerStyle={{
              marginTop: 16,
            }}
          />
        </View>
      </Layout>
    </Background>
  );
};
