// ================== EXERCISE 3 ==================
import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const initialData = [
    {
        data: [
            {
                name: "Ivysaur",
                imageUrl: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1-2x.png",
                element: "Grass"
            },
            {
                name: "Bulbasaur",
                imageUrl: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1-2x.png",
                element: "Grass"
            }
        ],
        title: "Grass",
        bgColor: 'green',
        icon: 'leaf'
    },
    {
        data: [
            {
                name: "Charmander",
                imageUrl: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png",
                element: "Fire"
            },
            {
                name: "Charmeleon",
                imageUrl: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_5-2x.png",
                element: "Fire"
            }
        ],
        title: "Fire",
        bgColor: 'red',
        icon: 'flame'
    },
    {
        data: [
            {
                name: "Squirtle",
                imageUrl: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png",
                element: "Water"
            },
            {
                name: "Wartortle",
                imageUrl: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_8-2x.png",
                element: "Water"
            }
        ],
        title: "Water",
        bgColor: 'blue',
        icon: 'water'
    }
];

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        marginVertical: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
        flex: 1
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        width: 60,
        height: 90,
        borderRadius: 5
    },
    iconStyle: {
        marginRight: 10,
    }
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
    </TouchableOpacity>
);

const App = () => {
    const [data, setData] = useState(initialData);

    const addPokemon = () => {
        const newPokemon = {
            name: "Pikachu",  // Name of the new Pokémon
            imageUrl: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png", // Image URL
            element: "Electric"  // Element of the new Pokémon
        };

        const newData = [...data];
        const sectionIndex = newData.findIndex(section => section.title === newPokemon.element);

        if (sectionIndex !== -1) {
            newData[sectionIndex].data.push(newPokemon);
        } else {

            newData.push({
                title: newPokemon.element,
                bgColor: "yellow",
                data: [newPokemon],
                icon: 'flash'
            });
        }

        setData(newData);
    };

    return (
        <View style={{ marginBottom: 50, margin: 10 }}>
            <StatusBar hidden={true} />
            <Button title="Add Pokémon" onPress={addPokemon} />
            <SectionList
                sections={data}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                    <View style={[styles.headerText, { backgroundColor: bgColor }]}>
                        <Ionicons name={icon} size={24} color="white" style={styles.iconStyle} />
                        <Text>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default App;
