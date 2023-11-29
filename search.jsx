import React, { useState } from 'react';

import axios from 'axios';

import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";

export default function Search({ onSearch }) {
    const [city, setCity] = useState("");
     const handleSearch = () => {
        onSearch(city);
     };
    return(





        <View>
            <TextInput
                placeholder="Enter City"
                value={city}
                onChangeText={(text) => setCity(text)}
            />

            <Button title = "Search" onPress={handleSearch}/>
        </View>
    );

}