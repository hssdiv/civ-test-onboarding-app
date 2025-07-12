import { Image } from 'react-native';
import { Background, Button, Layout } from '../../../components';
import { SvgUri } from 'react-native-svg';
import { OnboardingCarousel } from './components';
import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';
import { getOnboardingData } from './helper';

export const Onboarding = () => {
  const ref = useRef<ICarouselInstance>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const [onboardingData] = useState(getOnboardingData())

  return (
    <Background>
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

        <OnboardingCarousel
          carouselRef={ref}
          data={onboardingData}
          setActiveIndex={setActiveIndex}
        />
        <Button
          text={activeIndex === onboardingData.length - 1 ? "Finish" : "Next"}
          onPress={() => ref.current?.next()}
        />
      </Layout>
    </Background>
  );
};
