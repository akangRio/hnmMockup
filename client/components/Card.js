import { Card } from "@rneui/themed";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const MyCard = ({ product, navigation }) => {
  return (
    <Card>
      {/* <Card.Title>{product.name}</Card.Title> */}
      <Image
        source={{ uri: product.mainImg }}
        style={{ width: 152, height: 220 }}
      />
      <Card.Divider />
      <Text>{product.name}</Text>
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{product.price} IDR</Text>
        <Icon name="heart-o" />
      </View>
    </Card>
  );
};
