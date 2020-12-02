import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const [value, onChangeText] = React.useState()
  const [data, setData] = React.useState([]);
 
const add_todo = (e) => {
    let new_todo = {title:value,edit:false};
    console.log(new_todo)
    setData([...data,new_todo])
    onChangeText("")   
    
}

const handleChange = (e, index) => {
  console.log(e.nativeEvent.text)
  data[index].title = e.nativeEvent.text
  setData([...data])

}

const del_todo = (index) => {
  data.splice(index,1);
  setData([...data])

}

const dell_all = () => {
  setData({})
}

const edit_todo = (index) => {
  console.log("First Edit => ", data[index].edit)
 data[index].edit = true;
 setData([...data])
  console.log("Second Edit => ", data[index].edit) 

}

const update_todo = (index) => {
  data[index].edit = false;
  setData([...data])

}

  
  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Todo',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Todo',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Todo',
  //   },
  // ];
  // const Item = ({ item, index }) => (
  //   <View style={styles.item}>
  //               <View style={{flex:7}}><Text style={styles.title}>{item.title}</Text></View>
  //               <View style={{flex:1,alignItems:"flex-end"}}>
  //                   <TouchableOpacity>
  //                       <Icon style={styles.icon} name="edit" size={35} color="#000" />
  //                   </TouchableOpacity>
                                      
  //               </View>
  //               <View style={{flex:1, alignItems:"flex-end"}}>   
  //                   <TouchableOpacity onPress={() => del_todo(index)}>
  //                       <Icon style={styles.icon} name="remove" size={35} color="#000" />       
  //                   </TouchableOpacity>
  //               </View>
  // </View>    
  // );


  // const renderItem = ({ item, index }) => (
  //   <Item title={item} />
  // );
  return (

    
        <View style={styles.container}>
          <View style={styles.header}>
          <Text style={styles.heading}>Todo Application</Text>
          </View>
          <View style={styles.main}>
         
          <View style={{flexDirection:'row',padding:10, justifyContent:'space-around'}}>
            <View style={{flex:2,justifyContent:"center",}}>             
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              placeholder="Add New Todo"
              value={value}             
            />
             </View>
             <View style={{flex:1,justifyContent:"center",}}> 
              <TouchableOpacity style={styles.button} onPress={add_todo}>
                <Text style={{textAlign:'center',color:'#fff'}}>Add Todo</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign:"center",fontSize:24,marginBottom:20,color:"#F7941F",fontWeight:'bold'}}>List of Todos</Text>
           <ScrollView style={{flex: 1}}>
            <FlatList
              data={data}
              renderItem={({item, index })  => (
                        item.edit ? <View style={styles.item}>
                        <View style={{flex:7}}><TextInput
                                        style={{ height: 40,}}
                                        onChange={e => handleChange(e,index)}
                                        placeholder="Edit Todo"
                                        value={item.title}
                                        
                                      /></View>
                        <View style={{flex:1,alignItems:"flex-end"}}>
                            <TouchableOpacity onPress={() => update_todo(index)}>
                            <Icon style={styles.icon} name="check" size={35} color="#000" />
                            </TouchableOpacity>
                                              
                        </View>
                        <View style={{flex:1, alignItems:"flex-end"}}>   
                            <TouchableOpacity onPress={() => del_todo(index)}>
                                <Icon style={styles.icon} name="remove" size={35} color="#000" />       
                            </TouchableOpacity>
                        </View>
                      </View> : (
                              <View style={styles.item}>
                                    <View style={{flex:7}}><Text style={styles.title}>{item.title}</Text></View>
                                    <View style={{flex:1,alignItems:"flex-end"}}>
                                        <TouchableOpacity onPress={() => edit_todo(index)}>
                                        <Icon style={styles.icon} name="edit" size={35} color="#000" />
                                        </TouchableOpacity>
                                                          
                                    </View>
                                    <View style={{flex:1, alignItems:"flex-end"}}>   
                                        <TouchableOpacity onPress={() => del_todo(index)}>
                                            <Icon style={styles.icon} name="remove" size={35} color="#000" />       
                                        </TouchableOpacity>
                                    </View>
                                  </View>


                  )
                                    
                 

              )}
              keyExtractor={item => item.key}
            />
          <View style={{alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity style={{backgroundColor:'red',padding:15,borderRadius:5}} onPress={dell_all}>
              <Text style={{color:'white'}}>Delete All Todos</Text>
            </TouchableOpacity></View> 
           
            </ScrollView>
            </View>
          </View>
        </View>
         
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    flex:1,
    backgroundColor:"#F7941F",
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  icon: {
    flexDirection:"row",    
  },
  main:{
    flex:5,
    backgroundColor:"#fff",
    paddingTop:15
  },
  item:{
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    flexDirection:"row",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },  
  title: {
    fontSize:20
  },
   button:{
    backgroundColor:"#3F51B5",
    padding:11,
    color:"#eee"
  },
  text: {
    color:"#fff",
    marginBottom:30,
    fontSize:32,    
  },
  heading: {
    fontSize:32,  
    color:"#fff",
    fontWeight:'bold',
    marginTop:20
  } 

});
