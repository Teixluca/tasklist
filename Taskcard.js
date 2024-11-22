import { CircleCheck } from "lucide-react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const taskcard = (tittle, description, status, onClick) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.tittle}>
                    {
                        { tittle }
                    }
                </Text>
                <CircleCheck color={'green'} size={32} />
            </View>
            
            <Text style={styles.description}>{description}</Text>
            
            <TouchableOpacity
                style={styles.button}
                onPress={onClick}>
                    <Text style={styles.buttonText}>
                        {status === "Done" ? "Deletar" : "Check"}
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBotton: 10
    },

    tittle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#333'
    },

    status: {
        fontSize: '14',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    description: {
        fontSize: 14,
        color: '#666',
        marginBotton: 10

    },

    button: {
        backgroundColor: '#d33f49f',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default taskcard 