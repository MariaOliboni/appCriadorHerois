import { Pressable, Text, StyleSheet } from "react-native";

interface BotaoCustomizadoProps {
    title: string;
    corFundo: string;
    onPress: () => void;
}

export function BotaoCustomizado({title , corFundo = '#1f2937',onPress}: BotaoCustomizadoProps) {
    return(
        <Pressable
            style = {[styles.button, {backgroundColor: corFundo}]}
            onPress={onPress}
        >
            <Text style = {styles.buttonText}>{title}</Text>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginVertical: 6
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
