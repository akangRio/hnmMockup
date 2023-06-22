import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "./screens/ProfileScreen";
import { WishlistScreen } from "./screens/WishlistScreen";
import { ShoppingBagScreen } from "./screens/ShoppingBagScreen";
import { MoreScreen } from "./screens/MoreScreen";
import { StackHomeScreen } from "./screens/StackHomeScreen";
import { ApolloProvider } from "@apollo/client";
import client from "./config";

export default function App() {
  const botNav = createBottomTabNavigator();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <botNav.Navigator screenOptions={{ headerShown: false }}>
          <botNav.Screen
            name="homePage"
            component={StackHomeScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/260px-H%26M-Logo.svg.png",
                  }}
                  style={{ width: 30, height: 20 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <botNav.Screen
            name="profilePage"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://static.thenounproject.com/png/5753337-200.png",
                  }}
                  style={{ width: 30, height: 22 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <botNav.Screen
            name="wishlistPage"
            component={WishlistScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://static.thenounproject.com/png/5752353-200.png",
                  }}
                  style={{ width: 23, height: 23 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <botNav.Screen
            name="shoppingPage"
            component={ShoppingBagScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://static.thenounproject.com/png/72632-200.png",
                  }}
                  style={{ width: 23, height: 23 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <botNav.Screen
            name="morePage"
            component={MoreScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://static.thenounproject.com/png/1517835-200.png",
                  }}
                  style={{ width: 23, height: 23 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
        </botNav.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
