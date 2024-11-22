import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import taskcard from './Taskcard';
import { useState } from 'react-native';

export default function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [task, setTask] = useState([]);
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);


  const onMessage = () => {
    setAlert1(false);
    setAlert2(false);

    if (taskTitle !== "" && taskDescription.length >= 10) {

      setTask([

        ...task, {
          id: task.length + 1,
          title: taskTitle,
          description: taskDescription
        }

      ])
      setTask("");
      setTaskDescription("");

    } else {
      if (!taskTitle.trim()) {
        setAlert1(true)
        setTimeout(() => {
          setTimeout(false);
        }, 4000);
      }

      if (taskDescription.length < 10) {
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false)
        }, 4000)
      }
    }

  }
}

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
        <Button
          title='Salvar'
          style={styles.buttongreen}
          color='darkgreen'
          onPress={() => onMessage()} />
      </View>

      <ScrollView>
        {
          task.map((item, index) => {
            <taskcard
              tittle={"Teste"}
              description={"Descrição"}
              status={"Done"}
              onClick={() => {
                deleteTask();
              }}
            />;
          })
        }

      </ScrollView>

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
  },

  separator: {
    marginTop: 16,
    width: "100%",
    hegth: 1,
    backgroundColor: "#222"
  },

  errorText: {
    colo: "red",
    fontSize: 12,
    fontStyle: "italic"
  }

});
