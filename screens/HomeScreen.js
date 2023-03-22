import React from "react";
import { StyleSheet, Text, View, SafeAreaView ,Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-10`}>
        <Image
          style={{
            width: 50,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://i.pinimg.com/564x/6d/83/1a/6d831a334156291eedd036d44803c147.jpg",
          }}
        />
      </View>
      <NavOptions/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles =
  StyleSheet.create[
    {
      text: {
        color: "blue",
      },
    }
  ];
