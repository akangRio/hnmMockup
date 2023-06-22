import { View, Text, Image } from "react-native";
import { Icon as Icon2 } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";

export const NavBarCustom = () => {
  return (
    <View
      style={{
        flexDirection: "row",

        height: 50,

        alignItems: "center",
        // overflow: "hidden",
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Icon2 name="menu" style={{ width: 30, height: 20, marginLeft: 10 }} />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/260px-H%26M-Logo.svg.png",
          }}
          style={{ width: 30, height: 20, marginLeft: 10 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Icon2
          name="search"
          style={{
            flex: 1,
            width: 30,
            height: 20,
            marginLeft: 10,
          }}
        />
        {/* <Text>TEXT</Text> */}
        <Icon2
          name="person"
          style={{
            width: 30,
            height: 20,
            marginLeft: 10,
          }}
        />
        <Text style={{ marginTop: 3 }}>English</Text>

        <Icon
          name="angle-down"
          style={{
            width: 30,
            height: 20,
            marginLeft: 10,
          }}
          size={20}
        />
        <Icon name="heart-o" size={20} />
        <Icon
          name="shopping-cart"
          size={20}
          style={{
            width: 30,
            height: 20,
            marginLeft: 10,
          }}
        />
      </View>
    </View>
  );
};
