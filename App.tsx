import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button} from 'react-native';
import Drink from "./src/Drink";



const App= ()=> {
    const [total, setPrice] = React.useState(0);
    const onPress = (price: number) => {
        setPrice( total + price);
    }
    return(
        <View style={styles.container}>
            {/*<StatusBar backgroundColor="#610061"/>*/}
            <View style={styles.row}>
                <Drink name='VD Noel' price={5} onClick={onPress} style ={styles.box}/>
                <Drink name='Pils' price={2.5} onClick={onPress} style ={styles.box}/>
                <Drink name='Biere' price={4} onClick={onPress} style ={styles.box}/>
            </View>
            <View style={styles.row}>
                <Drink name='Kastel R' price={5} onClick={onPress} style ={styles.box}/>
                <Drink name='Eupener' price={2.5} onClick={onPress} style ={styles.box}/>
                <Drink name='Nachos' price={4} onClick={onPress} style ={styles.box}/>
            </View>
            <View style={styles.row}>
                <Drink name='VD Noel' price={5} onClick={onPress} style ={styles.box}/>
                <Drink name='Pils' price={2.5} onClick={onPress} style ={styles.box}/>
                <Drink name='Biere' price={4} onClick={onPress} style ={styles.box}/>
            </View>
            <View style={styles.row}>
                <Drink name='Reset' price={-total} onClick={onPress} style ={[styles.box,styles.reset]}/>
                <Text style={styles.counter}> {total} </Text>
                <Drink name='Caution' price={-1} onClick={onPress} style ={[styles.box,styles.caution]}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
    reset:{
      backgroundColor:'red',
    },
    caution:{
        backgroundColor:'green',
    },
    counter:{
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height:80,
    }
});

export default App;