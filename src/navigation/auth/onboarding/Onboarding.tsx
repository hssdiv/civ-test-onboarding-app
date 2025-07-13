import { Image, View } from 'react-native';
import { Background, Button, ButtonSmall, Header, Layout } from '../../../components';
import { OnboardingCarousel } from './components';
import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';
import { getOnboardingData } from './helper';
import { useColors } from '../../../styles';
import { useAuth } from '../../../stores';
import { AuthNavigation } from '../auth.stack';
import { useNavigation } from '@react-navigation/native';

export const Onboarding = () => {
  const ref = useRef<ICarouselInstance>(null);

  const onFinishedOnboarding = useAuth(store => store.onFinishedOnboarding);

  const [activeIndex, setActiveIndex] = useState(0);

  const [onboardingData] = useState(getOnboardingData())

  const colors = useColors();

  const navigation = useNavigation<AuthNavigation>();

  const onFinishedOnboardingPressed = () => {
    onFinishedOnboarding()
    navigation.navigate('SignUp')
  }

  return (
    <Background>
      <Header
        rightComponent={() => <ButtonSmall
          text="Skip"
          onPress={() => onFinishedOnboardingPressed()}
        />}
      />

      <Image
        source={require('../../../../assets/files/Onboarding.png')}
        style={{
          width: '100%',
          height: "43%",
        }}
      />

      <Layout>
        <View
          style={{
            backgroundColor: colors.backgroundSecondary,
            borderRadius: 48,
            paddingTop: 36,
            // flex: 1,
            overflow: 'hidden',
            // justifyContent: 'center',
          }}
        >
          <OnboardingCarousel
            carouselRef={ref}
            data={onboardingData}
            setActiveIndex={setActiveIndex}
          />

          <Button
            text={activeIndex === onboardingData.length - 1 ? "Finish" : "Next"}
            onPress={() => {
              if (activeIndex === onboardingData.length - 1) {
                onFinishedOnboardingPressed();
              } else {
                ref.current?.next()
              }
            }}
            containerStyle={{
              marginTop: 32,
              marginBottom: 36,
              marginHorizontal: 24,
            }}
          />
        </View>
      </Layout>
    </Background>
  );
};
