import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data= [
    {
        id:"123",
        title:"Emergency",
        image:"https://www.seekpng.com/png/detail/329-3293957_emergency-comments-emergency-icon.png",
        screen:"MapScreen",
    },
    
    {
        id:"567",
        title:"Not Panic",
        image:"https://www.citypng.com/public/uploads/preview/-11587917107zuo8ngnznh.png",
        screen:"MapScreen2",
    },
]
const NavOptions=()=>{
    return(
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item})=>{
            <TouchableOpacity
            style={tw`p-2 pl-6 pd-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View>
                    <Image 
                    style={{width:120, height:120, resizeMode: 'contain'}}
                    source={{uri:item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type='antdesign'
                    />
                </View>
            </TouchableOpacity>
        }}
        />
    );
};

export default NavOptions
