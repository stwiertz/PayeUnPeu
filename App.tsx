import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Pressable,
    SafeAreaView,
    NativeModules,
    Dimensions,
    AsyncStorage,
} from 'react-native';
import Drink from "./src/Drink";
import Selecteur from "./src/Selecteur";
import {drinksData} from "./drinksData";

const { StatusBarManager} = NativeModules;
const App= ()=> {
    const [order, setOrder] = React.useState(Array(drinksData.length).fill(0));
    const [history, setHistory] = React.useState(Array(drinksData.length).fill(0));
    const [totalDrink, setTotalDrink] = React.useState(0);
    const [totalCaution, setTotalCaution] = React.useState(0);
    const [addingMode, setAddingMode]= React.useState(1);
    const [showHistory, setShowHistory] = React.useState(false);

    React.useEffect(()=> {
        if(showHistory){
            getFromAsyncHistory()
        }
    }, [showHistory]);

    const getFromAsyncHistory = React.useCallback(async ()=> {
        let historyTemp = []
        for(let i = 0; i< drinksData.length; i++){
            historyTemp.push(await AsyncStorage.getItem(drinksData[i].name) || 0);
        }
        setHistory(historyTemp);
    }, []);

    const total = React.useMemo(()=>{
       let res = 0;
       for(let i= 0; i < drinksData.length; i++){
        res += drinksData[i].price * order[i];
       }
       res-= totalCaution;
       return res;
    },[totalDrink, totalCaution, order]);

    const onCaution = React.useCallback(() => {
        if(totalCaution + addingMode>0){
            setTotalCaution(prevState => prevState + addingMode *2);
        }
    },[order, addingMode]);

    const onPress = React.useCallback(async(index: number) => {
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
    },[]);

    const onValidate = React.useCallback(async()=>{
        onReset();
        for(let i = 0; i < drinksData.length; i ++){
            try{
                const value = await AsyncStorage.getItem(drinksData[i].name)|| 0;
                const valueStr = String(+value +order[i])
                AsyncStorage.setItem(drinksData[i].name,  valueStr);
            }catch(error){
            }
        }

    }, [order]);

    const onResetHistory = React.useCallback(async()=>{
        onReset();
        for(let i = 0; i < drinksData.length; i ++){
            try{
                await AsyncStorage.setItem(drinksData[i].name,  "0");
            }catch(error){
            }
        }
        setShowHistory(false);
    }, [order]);



    return(
        <SafeAreaView style={ styles.container}>
            <StatusBar backgroundColor={"#610061"}/>
            <View style={[styles.topButtonContainer,addingMode === 1 ?{}:{backgroundColor: "red"}]}>
                <Pressable style={styles.mode} onPress={()=>setAddingMode(addingMode * -1)}><Text style={styles.modeText}>{addingMode === 1 ? "-": "+"}</Text></Pressable>
                <Pressable style={styles.history} onPress={()=>setShowHistory(prevState => !prevState)}><Text style={styles.historyText}>{"History"}</Text></Pressable>
            </View>
            {!showHistory &&
            <View style={styles.selecter}>
                <Selecteur onClick={onPress} order={order}/>
                <View style={styles.row}>
                    <Drink name='Reset' onClick={onReset} style ={[styles.box,styles.reset]} count={totalDrink}/>
                    <View style={[styles.box]}>
                        <Text style={styles.counter}> {total} </Text>
                    </View>

                    <Drink name='-Caution'  onClick={onCaution} style ={[styles.box,styles.caution]} count={totalCaution}/>
                </View>
                <View style={styles.row}>
                    <Pressable style={styles.validate} onPress={onValidate}><Text style={styles.modeText}>{"Validate"}</Text></Pressable>
                </View>
            </View>
            }
            {
            showHistory &&
                <View>
                    <HistoryBord history={history}/>
                    <Pressable onPress={onResetHistory} style={{backgroundColor: "red", height: 50, marginTop: 30}}>
                        <Text>{"RESET HISTORY"}</Text>
                    </Pressable>
                </View>

            }


        </SafeAreaView>
    )
}

const HistoryBord = (props) => {
    console.log("props",props);
    let row = [];
    for(let i = 0; i< drinksData.length; i++){
        row.push(<Text style={ {color:"white"}}>{drinksData[i].short +"  : " + props.history[i]}</Text>);
    }
    return(
        <View>
            {row}
        </View>
    )
}


const styles = StyleSheet.create({
    validate:{
        marginTop: 30,
        borderRadius: 4,
        backgroundColor:"grey",
        height: 50,
        width: "70%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    container:{
        paddingTop: 10,
        flex:1,
        marginTop: StatusBarManager.HEIGHT,
        backgroundColor: '#222',
    },
    selecter: {
      height: Dimensions.get("window").height- StatusBarManager.HEIGHT - 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
    modeText:{
        color:'white',
        fontSize: 30,
        lineHeight: 30,
    },
    historyText:{
        color:'white',
        fontSize: 20,
        lineHeight: 30,
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
        backgroundColor:'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    history:{
        alignSelf: "flex-end",
        paddingHorizontal:10,
        height:50,
        fontSize: 20,
        borderRadius: 4,
        backgroundColor:'grey',
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
        lineHeight: 30,
        color: 'white',

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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'darkblue',
    },
});

export default App;