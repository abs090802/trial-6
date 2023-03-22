import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const data= [
    {
        id:"123",
        title:"Emergency",
        image:"https://static.vecteezy.com/system/resources/previews/002/306/604/original/emergency-phone-right-arrow-sign-on-transparent-background-free-vector.jpg",
        screen:"MapScreen",
    },
    
    {
        id:"567",
        title:"Not Panic",
        image:"https://www.citypng.com/public/uploads/preview/-11587917107zuo8ngnznh.png",
        screen:"MapScreen",
    },
]

const NavOptions = () => {

    const naviagtion = useNavigation();
    return(
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item})=>(
            <TouchableOpacity
            onPress={() => naviagtion.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray m-2 w-40`}
            >
                <View>
                    <Image
                    style={{width:120, height:120, resizeMode: 'contain'}}
                    source={{uri:item.image}}
                    />
                    <Text 
                    style={tw`mt-2 text-lg font-semibold`}
                    >Bhavesh</Text>

                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type='antdesign'
                    />
                    
                </View>
            </TouchableOpacity>
    )}
        />
    );
};

export default NavOptions
