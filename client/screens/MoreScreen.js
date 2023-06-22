import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { NavBarCustom } from "../components/NavBarCustom";

export const MoreScreen = () => {
  return (
    <SafeAreaView>
      <NavBarCustom />
      <ScrollView style={{ height: "100%" }}>
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "27%",
          }}
        >
          <Image source={require("../assets/underConstruction.jpg")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
