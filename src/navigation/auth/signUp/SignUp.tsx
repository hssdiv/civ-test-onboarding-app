import { Alert, View } from 'react-native';
import { Background, Button, ButtonNavigation, CheckboxText, Header, Layout, PasswordField, Text, TextInput } from '../../../components';
import { EMAIL_REGEX, safeOpenURL } from '../../../helper';
import { useColors } from '../../../styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigation } from '../auth.stack';
import { Controller, useForm } from 'react-hook-form';
import { AuthApi } from '../../../services';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface CreateAccountForm {
  name: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const colors = useColors();

  const [loading, setLoading] = useState(false);

  const [checked, setChecked] = useState(false)

  const navigation = useNavigation<AuthNavigation>();

  const [securePassword, setSecurePassword] = useState(true);

  const onSubmit = async (data: CreateAccountForm) => {
    try {
      console.log(data)
      setLoading(true);
      // const result = await AuthApi.signUp(data);
      // console.log(result);
      // showToast({ description: 'Account successfully created' });
    } catch (error) {
      // showToast({ error });
    } finally {
      setLoading(false);
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
    },
  });

  return (
    <Background>
      <Header leftComponent={() => <ButtonNavigation />} />
      <Layout>
        <KeyboardAwareScrollView
          enableResetScrollToCoords={false}
        >
          <Text
            style={{
              marginTop: 36,
              fontSize: 32,
              fontWeight: 'bold',
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
            name="password"
          />

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
            checked={checked}
            onChange={setChecked}
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
                Alert.alert('navigation to sign in')
                // navigation.navigate('signIn')
              }}
            >
              Sign in
            </Text>
          </Text>

          <Button
            text="Create account"
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
