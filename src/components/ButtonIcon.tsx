import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    nomeIcon: keyof typeof MaterialIcons.glyphMap
}

export default function ButtonIcon({ nomeIcon, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <MaterialIcons name={nomeIcon} size={32} />
        </TouchableOpacity>
    )
}