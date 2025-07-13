import { View } from 'react-native';
import { Extrapolation, interpolate, SharedValue } from 'react-native-reanimated';
import { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useColors } from '../../../../styles';

export const OnboardingCarouselPagination = ({
  progress,
  data,
  carouselRef,
}: {
  progress: SharedValue<number>;
  data: { title: string; description: string }[];
  carouselRef: React.RefObject<ICarouselInstance | null>;
}) => {

  const colors = useColors();

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <Pagination.Custom<{ color: string }>
      progress={progress}
      data={data.map(_ => ({ color: colors.primary }))}
      size={20}
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 16,
        backgroundColor: colors.systemSecondary,
      }}
      activeDotStyle={{
        borderRadius: 8,
        width: 6,
        height: 18,
        overflow: "hidden",
        backgroundColor: colors.systemPrimary,
      }}
      containerStyle={{
        gap: 5,
        alignItems: "center",
        height: 10,
      }}
      horizontal
      onPress={onPressPagination}
      customReanimatedStyle={(progress, index, length) => {
        let val = Math.abs(progress - index);
        if (index === 0 && progress > length - 1) {
          val = Math.abs(progress - length);
        }

        return {
          transform: [
            {
              translateY: interpolate(
                val,
                [0, 1],
                [0, 0],
                Extrapolation.CLAMP,
              ),
            },
          ],
        };
      }}
    />
  );
};
