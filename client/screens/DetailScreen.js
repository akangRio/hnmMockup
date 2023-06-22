import { Button } from "@rneui/base";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { NavBarCustom } from "../components/NavBarCustom";

export const DetailScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <SafeAreaView>
      {/* <NavBarCustom /> */}
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: product.mainImg }}
            style={{
              width: 300,
              height: 400,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              width: "100%",
              height: 100,
              padding: 10,
            }}
          >
            <View
              style={{
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>Name: {product.name}</Text>
                <Text>Description: {product.description}</Text>
                <Text>Price: {product.price}</Text>
                <Text>Category: {product.Category.name}</Text>
              </View>
              <Button title={"Buy Now"} style={{ marginTop: 20 }} />
            </View>
          </View>

          <FlatList
            horizontal={true}
            data={product.Images}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.imgUrl }}
                style={{
                  width: 150,
                  height: 250,
                }}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              backgroundColor: "white",
              width: 2000,
              height: 50,
            }}
          >
            <Text
              style={{
                flex: 1,
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              Product Owner: {product.User.username}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
