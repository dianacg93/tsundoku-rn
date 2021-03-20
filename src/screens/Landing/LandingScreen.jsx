import  React, {useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Context} from '../../store'

const LandingScreen = ({navigation}) => {

    const {state, onUserLogin, onUserLogout} = useContext(Context)

    console.log(`${JSON.stringify(state)}`)
    
    return (
        <View style={styles.container}>
            <Text>Landing Screen</Text>
            <Text> {JSON.stringify(state)}</Text>
            <TouchableOpacity
            // style={{
            //     height: 50,
            //     width: 220,
            //     marginTop: 10,
            //     marginBottom: 10,
            //     backgroundColor: '#ff5733',
            //     borderRadius: 30,
            //     justifyContent: 'center',
            //     alignItems: 'center'
            // }}
            onPress={onUserLogin}
            >
                <Text style={{color:'#fff', fontSize:18}}>User Login</Text>
            </TouchableOpacity>
            <Button title="NYT Best Sellers" onPress={() => navigation.navigate("Best Sellers")} />
            <Button title="Search" onPress={() => navigation.navigate("Search Books")} />
            <Button title="Mission" onPress={() => navigation.navigate("Mission")} />
            <Button title="About Us" onPress={() => navigation.navigate("About Us")} />
            <Button title="Book Stores" onPress={() => navigation.navigate("Book Stores")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LandingScreen