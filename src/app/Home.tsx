import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"

import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Title from "@/components/Title";
// import { StackRoutesProps } from "@/routes/StackRoutes"
// import { BottomTabRoutesProps } from "@/routes/BottomTabRoutes"
import { DrawerRoutesProps } from "@/routes/DrawerRoutes"

export function Home({ navigation }: DrawerRoutesProps<"home">) {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, padding: 32, paddingTop: insets.top }
        }>
            <Header>
                <ButtonIcon nomeIcon="menu"
                    onPress={() => { navigation.openDrawer() }} />
                <Title>Home</Title>
                <ButtonIcon nomeIcon="add-circle"
                    onPress={() => navigation.navigate("produto", { id: "67" })} />
            </Header>
        </View >
    )
}