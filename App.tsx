import { StatusBar } from 'expo-status-bar';
import React from "react";
import {StyleSheet, Text, View, Button, Pressable, SafeAreaView, NativeModules, Dimensions} from 'react-native';
import Drink from "./src/Drink";
import Selecteur from "./src/Selecteur";
import {drinksData} from "./drinksData";

const { StatusBarManager,} = NativeModules;
const App= ()=> {
    const [order, setOrder] = React.useState(Array(drinksData.length).fill(0));
    const [totalDrink, setTotalDrink] = React.useState(0);
    const [totalCaution, setTotalCaution] = React.useState(0);
    const [addingMode, setAddingMode]= React.useState(1);
    const total = React.useMemo(()=>{
       let res = 0;
       for(let i= 0; i < drinksData.length; i++){
        res += drinksData[i].price * order[i];
       }
       res-= totalCaution;
       return res;
    },[totalDrink, totalCaution]);

    const onCaution = React.useCallback(() => {
        setTotalCaution(prevState => prevState + addingMode);
    },[order, addingMode]);

    const onPress = React.useCallback((index: number) => {
        if(order[index]+addingMode>=0){
            order[index]+= addingMode;
            setTotalDrink(prevState => prevState + addingMode)
            setOrder( order);
        }

    },[order, addingMode]);

    const onReset = React.useCallback(() => {
        setTotalDrink(0);
        setTotalCaution(0);
        setOrder(Array(drinksData.length).fill(0));
    },[order]);
    console.log("StatusBarManager.height", StatusBarManager.HEIGHT);
    return(
        <SafeAreaView style={ styles.container}>
            <StatusBar backgroundColor={"#610061"}/>
            <View style={styles.topButtonContainer}>
                <Pressable style={styles.mode} onPress={()=>setAddingMode(addingMode * -1)}><Text style={styles.modeText}>{addingMode === 1 ? "-": "+"}</Text></Pressable>
                <Pressable style={styles.history} onPress={()=>setAddingMode(addingMode * -1)}><Text style={styles.modeText}>{addingMode === 1 ? "-": "+"}</Text></Pressable>
            </View>
            <View style={styles.selecter}>
                <Selecteur onClick={onPress} order={order}/>
                <View style={styles.row}>
                    <Drink name='Reset' onClick={onReset} style ={[styles.box,styles.reset]} count={totalDrink}/>
                    <Text style={[styles.box,styles.counter]}> {total} </Text>
                    <Drink name='-Caution'  onClick={onCaution} style ={[styles.box,styles.caution]} count={totalCaution}/>
                </View>
         </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        flex:1,
        marginTop: StatusBarManager.HEIGHT,
        backgroundColor: '#222',
    },
    selecter: {
      height: Dimensions.get("window").height,
      alignItems: 'center',
      justifyContent: 'center',
  },
    modeText:{
        color:'white',
    },
    topButtonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    mode:{
      alignSelf: "flex-start",
        width: 50,
        height:50,
        borderRadius: 4,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    history:{
        alignSelf: "flex-end",
        width: 50,
        height:50,
        borderRadius: 4,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reset:{
      backgroundColor:'red',
    },
    caution:{
        backgroundColor:'green',
    },
    counter:{
        fontSize: 30,
        textAlign: "center",
        width: 80,
        height:80,
        color: 'white',
        backgroundColor:'darkblue',
    },
    row:{
        flexDirection: "row",
        alignContent:"space-between",
    },
    box:{
        width: 80,
        height:80,
        borderRadius: 4,
        margin : 10,
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;