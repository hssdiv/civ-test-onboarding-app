import { Dimensions, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useColors } from "../../../../styles";
import { OnboardingCarouselPagination } from "./OnboardingCarouselPagination";

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

      <OnboardingCarouselPagination
        progress={progress}
        data={data}
        carouselRef={ref}
      />
    </View>
  );
}
