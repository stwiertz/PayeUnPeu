import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import IconBadge from 'react-native-icon-badge'

export type DrinkProps = {
    id?: number;
    name: string;
    logo?: string;
    onClick: (price: number) => void;
    style: any;
    count: number;
}



const Drink: React.FC<DrinkProps> = (props: DrinkProps) => {
    return (

            <IconBadge
                MainElement={
                    <Pressable onPress={() => props.onClick(props.id || 0)} style={props.style}>
                        <Text style={styles.text}>
                            {props.name}
                        </Text>
                    </Pressable>
                }
                BadgeElement={
                    <Text style={{color:'#FFFFFF'}}>{props.count}</Text>
                }
                IconBadgeStyle={{
                    width:20,
                    height:20,
                    backgroundColor: '#ff001e'
                }}
                Hidden={props.count == null || props.count === 0}
            />


    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export default Drink;