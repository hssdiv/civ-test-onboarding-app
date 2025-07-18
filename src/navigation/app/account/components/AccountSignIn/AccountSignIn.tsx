import { useState } from "react";
import { useAuth } from "../../../../../stores";
import { useColors } from "../../../../../styles";
import { SignInForm } from "../../../../../types";
import { Controller, useForm } from "react-hook-form";
import { Button, Layout, PasswordField, Text, TextInput } from "../../../../../components";
import { AccountBank } from "../AccountBank";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRoute } from "@react-navigation/native";
import { AccountSignInRoute } from "../../../app.stack";
import { AuthCredentialModal } from "../AuthCredentialModal";

export const AccountSignIn = () => {
  const colors = useColors();

  const [securePassword, setSecurePassword] = useState(true);

  const getAccount = useAuth(store => store.getAccount);
  const loading = useAuth(store => store.loading);

  const onSubmit = async (data: SignInForm) => {
    console.log('account signin form data: ', data)
    await getAccount(data)
  };

  const { params } = useRoute<AccountSignInRoute>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignInForm>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Layout>
      <KeyboardAwareScrollView
        enableResetScrollToCoords={false}
      >
        <AccountBank />
        <Text
          style={{
            marginTop: 36,
            fontSize: 32,
            color: colors.titlePrimary,
            marginBottom: 32,
          }}
        >
          Sign into Account
        </Text>

        <Controller
          control={control}
          name="username"
          rules={{
            required: 'Name is required',
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Username"
              placeholder="Enter username"
              value={value}
              onChangeText={onChange}
              error={errors?.username?.message}
              containerStyle={{
                marginBottom: 16,
              }}
            />
          )} />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Provide Password',
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
      </KeyboardAwareScrollView>

      <Button
        text="Sign in"
        containerStyle={{
          marginBottom: 16,
        }}
        loading={loading}
        onPress={handleSubmit(onSubmit)}
      />

      {params?.username && params?.password ?
        <AuthCredentialModal
          username={params.username}
          password={params.password}
          onClose={() => {
            setValue('username', params.username as string)
            setValue('password', params.password as string)
          }}
        /> 
        : null}
    </Layout>
  );
};
