import {
    createDrawerNavigator,
    DrawerScreenProps
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Produto } from "@/app/Produto";

export type RotasDisponiveis = {
    home: undefined
    produto: undefined | { id: string }
}

export type DrawerRoutesProps<RotaAtual extends keyof RotasDisponiveis>
    = DrawerScreenProps<RotasDisponiveis, RotaAtual>

const Drawer = createDrawerNavigator<RotasDisponiveis>()

export function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "#676767",
            drawerActiveBackgroundColor: "red",

        }}>
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) =>
                        <MaterialIcons name="home" size={size} color={color} />
                }} />
            <Drawer.Screen name="produto"
                component={Produto}
                options={{
                    drawerIcon: ({ color }) =>
                        <MaterialIcons name="shopping-cart" size={24} color={color} />
                }}
            />

        </Drawer.Navigator>
    )
}