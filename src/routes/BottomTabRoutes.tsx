import {
    createBottomTabNavigator,
    BottomTabScreenProps

} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Produto } from "@/app/Produto";

export type RotasDisponiveis = {
    home: undefined
    produto: undefined | { id: string }
}

export type BottomTabRoutesProps<RotaAtual extends keyof RotasDisponiveis>
    = BottomTabScreenProps<RotasDisponiveis, RotaAtual>

const Tab = createBottomTabNavigator<RotasDisponiveis>()

export function BottomTabRoutes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#676767",
            tabBarActiveBackgroundColor: "red",
            
        }}>
            <Tab.Screen 
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialIcons name="home" size={size} color={color} />
                }} />
            <Tab.Screen name="produto"
                component={Produto}
                options={{
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons name="shopping-cart" size={24} color={color} />
                }}
            />

        </Tab.Navigator>
    )
}