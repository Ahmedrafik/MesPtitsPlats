import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./app/screen/Login";
import Home from "./app/screen/Home";
import Recipe from "./app/screen/Recipe";
import {useEffect, useState} from "react";
import {User, onAuthStateChanged} from "firebase/auth";
import {FIREBASE_AUTH} from "./FirebaseConfig";


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
    return (
      <InsideStack.Navigator>
          <InsideStack.Screen name={"Home"} component={Home}/>
          <InsideStack.Screen name={"Recipe"} component={Recipe}/>
      </InsideStack.Navigator>
    );
}
export default function App() {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            console.log('user', user);
            setUser(user);
        })
    }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
          {user?
              <Stack.Screen name={'Login'} component={InsideLayout} options={{headerShown: false}}/>
           :
              <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}}/>
          }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
