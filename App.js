import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Taskcard from './Taskcard';
import { useState } from 'react';

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
      setTaskTitle("");
      setTaskDescription("");

    } else {

      if (!taskTitle.trim()) {
        setAlert1(true)
        setTimeout(() => {
          setAlert1(false);
        }, 4000);
      }

      if (taskDescription.length < 10) {
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false)
        }, 4000);
      }

    }

  }

  const deleteTask = (index) => {
    const updateTasks = [...task ];
    updateTasks.splice(index, 1);
    setTask(updateTasks);
  }

  return (

    <View style={styles.container}>

      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa'
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      {
        alert1 ? <Text style={styles.errorText}>
          Necessario informar o titulo
        </Text>
          : <></>
      }

      <Text style={styles.label}>Descrição da Tarefa:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline
        value={taskDescription}
        onChangeText={setTaskDescription}
      />

      {
        alert2 ? <Text style={styles.errorText}>
          Necessario mínimo 10 caractareres
        </Text>
          : <></>
      }



      <View style={styles.buttonContainer}>
        <Button
          title='Salvar'
          style={styles.buttongreen}
          color='darkgreen'
          onPress={() => onMessage()} />
      </View>

      {task.length > 0 ? <View style={styles.separator} /> : <></>}

      <ScrollView>
        {
          task.map((item, index) => (
            <Taskcard
              title={item.title}
              description={item.description}
              status={"Done"}
              onClick={() => {
                deleteTask(index);
              }}
            />
          ))
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
    height: 150,
    textAlignVertical: 'top'
  },

  buttonContainer: {
    marginTop: 16
  },

  buttongreen: {
    backgroundColor: 'darkgreen',
    borderRadius: 12
  },

  separator: {
    marginTop: 16,
    width: "100%",
    heigth: 1,
    backgroundColor: "#222"
  },

  errorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic"
  },

});
