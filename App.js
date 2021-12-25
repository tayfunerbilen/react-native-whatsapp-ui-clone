import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {Status, Calls, Chats, Camera, Settings} from "./icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// screens
import ChatsScreen from "./screens/Chats";
import StatusScreen from "./screens/Status";
import ChatScreen from "./screens/Chat";

function Root(){
    return (
        <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#F6F6F6',
                borderTopColor: '#A6A6AA'
            },
            headerStyle: {
                backgroundColor: '#F6F6F6',
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#8D8D8F'
        }}
    >
        <Tab.Screen
            name="Status"
            component={StatusScreen}
            options={{
                tabBarIcon: ({focused, color}) => {
                    if (focused)
                        return <Status fill={color}/>
                    return <Status fill={color}/>
                }
            }}
        />
        <Tab.Screen
            name="Calls"
            component={ChatsScreen}
            options={{
                tabBarIcon: ({focused, color}) => {
                    if (focused)
                        return <Calls fill={color}/>
                    return <Calls fill={color}/>
                }
            }}
        />
        <Tab.Screen
            name="Camera"
            component={ChatsScreen}
            options={{
                tabBarIcon: ({focused, color}) => {
                    if (focused)
                        return <Camera fill={color}/>
                    return <Camera fill={color}/>
                }
            }}
        />
        <Tab.Screen
            name="Chats"
            component={ChatsScreen}
            options={{
                tabBarIcon: ({focused, color}) => {
                    if (focused)
                        return <Chats fill={color}/>
                    return <Chats fill={color}/>
                }
            }}
        />
        <Tab.Screen
            name="Settings"
            component={ChatsScreen}
            options={{
                tabBarIcon: ({focused, color}) => {
                    if (focused)
                        return <Settings fill={color}/>
                    return <Settings fill={color}/>
                }
            }}

        />
  
    </Tab.Navigator>
    )
}
export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="Root">
                <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Root" component={Root} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
