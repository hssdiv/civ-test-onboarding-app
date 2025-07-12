import { Dimensions, Text, View } from "react-native";
import { Extrapolation, interpolate, useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { useColors } from "../../../../styles";

export const OnboardingCarousel = ({
  carouselRef: ref,
  data,
  setActiveIndex,
}: {
  carouselRef: React.RefObject<ICarouselInstance | null>;
  data: { title: string; description: string }[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const progress = useSharedValue<number>(0);

  const colors = useColors();

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View>
      <Carousel
        ref={ref}
        width={Dimensions.get("window").width - 40}
        height={Math.max(Dimensions.get("window").height * 0.2, 200)}
        data={data}
        loop={false}
        onProgressChange={progress}
        style={{
          marginBottom: 24,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 24
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                color: colors.primary,
                fontWeight: 'bold',
                marginBottom: 16,
              }}>
              {item.title}
            </Text>
            <Text
              style={{ textAlign: "center" }}
            >
              {item.description}
            </Text>
          </View>
        )}
        onSnapToItem={(index) => setActiveIndex(index)}
      />

      <Pagination.Custom<{ color: string }>
        progress={progress}
        data={data.map(_ => ({ color: colors.primary }))}
        size={20}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 16,
          backgroundColor: 'rgba(187, 187, 187, 1)',
        }}
        activeDotStyle={{
          borderRadius: 8,
          width: 6,
          height: 18,
          overflow: "hidden",
          backgroundColor: colors.primary,
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
    </View>
  );
}
