import { Dimensions, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useColors } from "../../../../styles";
import { OnboardingCarouselPagination } from "./OnboardingCarouselPagination";
import { ScrollView } from "react-native-gesture-handler";

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
        height={Dimensions.get("window").height * 0.17}
        data={data}
        loop={false}
        onProgressChange={progress}
        style={{
          marginBottom: 24,
        }}
        renderItem={({ item }) => (
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              paddingHorizontal: 24
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                color: colors.titlePrimary,
                fontWeight: '700',
                marginBottom: 16,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: colors.textSecondary,
              }}
            >
              {item.description}
            </Text>
          </ScrollView>
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
