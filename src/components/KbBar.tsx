import { useState } from "react";
import { Alert, Button, Modal, TextInput, View, StyleSheet, Pressable, Text} from "react-native";

export default function KbBar(props) {
    const [plus, setPlus] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    
    const plusOnPress = () => {
      //props.show(plus)
      //setPlus(!plus);
      setModalVisible(true);
    }
    return (
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Button title="menu" />
        <TextInput style={{ flex: 1 }} />
        <Button title={plus ? "+++" : "xxx"} onPress={plusOnPress} />
        <Modal
          //animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text >Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )
  }


  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: theme.colors.background
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    text: {
      //color: theme.colors.typography
      //color: 'red',
      fontSize: 30,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  