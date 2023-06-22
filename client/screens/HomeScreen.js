import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MyCard } from "../components/Card";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/queries";
import { NavBarCustom } from "../components/NavBarCustom";

export const HomeScreen = ({ navigation, handlePress }) => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  return (
    // <ScrollView>
    <SafeAreaView>
      <NavBarCustom />

      <FlatList
        data={data?.product}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", {
                itemId: item.id,
                product: item,
              })
            }
          >
            <MyCard product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, i) => i}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carding: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
