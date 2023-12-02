import React, { useState } from 'react';
import tw from 'twrnc';
import CustomButton from './customButton';

import {TextInput, View, Keyboard, Button } from "react-native";

export default function Search({ onSearch }) {
    const [city, setCity] = useState("");
     const handleSearch = () => {
        onSearch(city);
     };
    return(





        <View style={tw`flex-row justify-end items-center  `}> 
            
            <TextInput 
                placeholder="Enter City"
                value={city}
                onChangeText={(text) => setCity(text)}
                style={tw`justify-center text-center flex-1 bg-zinc-300 rounded-full h-10`}
            />

            <CustomButton 
                className="bg-gray-500"
                title = "Search" 
                onPress={handleSearch}
                text="search"
                style={tw`flex `}
            />
        </View>



    );

}