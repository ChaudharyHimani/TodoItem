import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {

    return(
        <TouchableOpacity onPress = {() => pressHandler(item.key)}>
            <View style= {styles.item}>
            <Text>{item.text}</Text>
            <MaterialIcons name='delete' size={18} color = 'orange'/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
item: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
    borderColor: '#bbb',
    borderWidth:1,
    borderStyle: 'dashed',
    borderRadius: 10
}
})