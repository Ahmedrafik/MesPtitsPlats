import {Button, StyleSheet, View} from "react-native";
import React from "react";
import {FIREBASE_AUTH} from "../../FirebaseConfig";
import {NavigationProp} from "@react-navigation/native";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Recipe = ({ navigation }: RouterProps) => {
    return (
        <View style={styles.home}>
            <Button onPress={() => navigation.navigate('Recipe')} title={'Open recipe'}/>
            <Button onPress={() => FIREBASE_AUTH.signOut()} title={'Logout'}/>
        </View>
    );
};
export default Recipe;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});