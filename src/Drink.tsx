import React from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";

export type DrinkProps = {
    name: string;
    price: number;
    logo?: string;
    onClick: (price : number)=> void;
    style: any;
}

const Drink: React.FC<DrinkProps> = (props: DrinkProps)=>{
    return (
        <Pressable onPress={()=> props.onClick( props.price)} style={props.style}>
            <Text style={styles.text}>
            {props.name}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text :{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export default Drink