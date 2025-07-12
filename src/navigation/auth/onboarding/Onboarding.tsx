import { Image, View } from 'react-native';
import { Background, Button, ButtonSecondary, Header, Layout } from '../../../components';
import { SvgUri } from 'react-native-svg';
import { OnboardingCarousel } from './components';
import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';
import { getOnboardingData } from './helper';
import { useColors } from '../../../styles';

export const Onboarding = () => {
  const ref = useRef<ICarouselInstance>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const [onboardingData] = useState(getOnboardingData())

  const colors = useColors();

  return (
    <Background>
      <Header
        rightComponent={() => <ButtonSecondary text="Skip" onPress={() => { }} />}
      />

      <Layout>

        <SvgUri
          width="100%"
          height="43%"
          style={{
            flex: 1,
          }}
          uri={
            Image.resolveAssetSource(
              require('../../../../assets/files/Onboarding.svg'),
            ).uri
          }
        />

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
            onPress={() => ref.current?.next()}
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
