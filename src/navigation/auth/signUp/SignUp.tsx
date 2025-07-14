import { Alert, View } from 'react-native';
import { Background, Button, ButtonNavigation, CheckboxText, Header, Layout, PasswordField, Text, TextInput } from '../../../components';
import { EMAIL_REGEX, safeOpenURL, showToast } from '../../../helper';
import { useColors } from '../../../styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigation } from '../auth.stack';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CreateAccountForm } from '../../../types';
import { useAuth } from '../../../stores';
import { getTempAccount } from './helper/getTempAccount';
import { RootScreensNavigation } from '../../root.stack';

export const SignUp = () => {
  const colors = useColors();

  const navigation = useNavigation<RootScreensNavigation>();

  const [securePassword, setSecurePassword] = useState(true);

  const signUp = useAuth(store => store.signUp);
  const setAccount = useAuth(store => store.setAccount);
  const loading = useAuth(store => store.loading);

  const onSubmit = async (data: CreateAccountForm) => {
    console.log('signup form data: ', data)
    await signUp(data);
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
          <Text
            style={{
              marginTop: 36,
              fontSize: 32,
              color: colors.titlePrimary,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              color: colors.textSecondary,
              fontSize: 16,
              marginTop: 8,
              marginBottom: 32,
            }}
          >
            Complete the sign up to get started
          </Text>

          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Name is required',
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
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
            flex: 1,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
            }}
          >Already have an account?{' '}
            <Text
              style={{ color: colors.primary }}
              onPress={() => {
                navigation.navigate('App', { screen: 'Account' })
              }}
            >
              Sign in
            </Text>
          </Text>

          <Button
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
