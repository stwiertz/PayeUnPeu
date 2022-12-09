import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {drinksData} from "../drinksData";
import Drink from "./Drink";

export type SelecteurProps = {
  onClick: (index: number)=>void;
  count?: number;
  order: Array<number>
};

const row = (index:number, onClick: (index: number)=>void, order: Array<number>) => {
    const boxes = []
    for(let i = index; i < drinksData.length && i < index+3;i++){
        boxes.push(
            <Drink name={drinksData[i].short} onClick={onClick} style={[styles.box, {backgroundColor: drinksData[i].type}]} key={i+ index} count={order[i]} id={i}/>
        )
    }
    return (
        <View style={styles.row} key ={index}>
            {boxes}
        </View>
    )
}
const Selecteur: React.FC<SelecteurProps> = (props:SelecteurProps) => {
    let rows = []
    for(let i =0; i < drinksData.length;i+=3){
        rows.push(row(i, props.onClick, props.order));
    }
    return(
        <View>
            {rows}
        </View>
    )
}

const styles = StyleSheet.create({

    row:{
        flexDirection: "row",
        alignContent:"space-between",
    },
    box:{
        width: 90,
        height:50,
        borderRadius: 4,
        margin : 10,
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Selecteur;