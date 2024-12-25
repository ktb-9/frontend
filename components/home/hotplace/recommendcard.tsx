import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import heart from "@/assets/images/iconheart.png";

type Destination = {
  id: number;
  image: any;
  mainDescription: string;
  subDescription: string;
  url: string;
};

const DestinationCard: React.FC<{ destination: Destination; style?: any }> = ({
  destination,
  style,
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/hotplace/webview",
      params: { url: destination.url },
    });
  };

  return (
    <TouchableOpacity style={[styles.box, style]} onPress={handlePress}>
      <Image
        source={destination.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.mainTitle}>{destination.mainDescription}</Text>
        <Text style={styles.subTitle}>{destination.subDescription}</Text>
        <Image source={heart} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default DestinationCard;
