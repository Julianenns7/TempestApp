import React from "react";
import {TouchableOpacity, Text, View} from 'react-native'
import tw from 'twrnc';
const CustomButton = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={tw`rounded-full bg-sky-500 w-30 h-10 justify-center m-2`}>
                <Text style={tw`text-center text-white`}>{text}</Text> 
            </View>
        </TouchableOpacity>
    )
}
export default CustomButton;