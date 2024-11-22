import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import taskcard from './Taskcard';
taskcard

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput style={styles.input}
        placeholder='Nome da Tarefa' />

      <Text style={styles.label}>Descrição da Tarefa:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline />

      <View style={styles.buttonContainer}>
        <Button title='Salvar'
          style={styles.buttongreen}
          color='darkgreen'
          onPress={
            () => {
              <taskcard>
                tittle={"teste"}
                description={"Descrição teste"}
                status={"c"}
                onClick={
                  
                }
              </taskcard>
            }
                
          } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },

  textArea: {
    height: 200,
    textAlignVertical: 'top'
  },

  buttonContainer: {
    marginTop: 16
  },

  buttongreen: {
    //backgroundColor: 'darkgreen',
    borderRadius: 12
  }

});
