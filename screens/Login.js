import { View, Text,SafeAreaView,Image,StyleSheet,TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'

import { MaterialCommunityIcons, Entypo,Icon,FontAwesome5,MaterialIcons,Ionicons } from '@expo/vector-icons'
import { windowWidth,windowHeight } from '../utils/Dimensions'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Login = ({navigation}) => {
  
  const {login} = useContext(AuthContext)

const [email,setEmail] = useState('')
const [password,setPasword] = useState('')


  const registerBtnHandler=()=>{
    navigation.navigate('RegisterPage')
  }

  const handleLogin=()=>{
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user = userCredentials.user
      console.log('Logged in as: ',user.email)
      login()
  })
  .catch(error => alert(error.message))
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff',flex:1}} >
      <View style={{margin:6}} >
        <Image source={require('../assets/login.png')} style={styles.loginImg} />
      <View style={{padding:12,}} >
         <Text
      style={{fontSize:33,fontWeight:'bold',color:'#495057',marginVertical:25}}
      > Login </Text>
      
      <View  style={styles.inputField} >
        <MaterialIcons name='alternate-email' size ={20} color='#666' style={{marginRight:5}} />
        <TextInput placeholder='Email' style={{flexGrow:1}} keyboardType='email-address' value={email} onChangeText={text=> setEmail(text)} />
      </View>
      <View  style={styles.inputField} >
        <Ionicons name='ios-lock-closed-outline' size ={20} color='#666' style={{marginRight:5}} />
        <TextInput placeholder='Password' secureTextEntry={true} style={{flexGrow:1}} keyboardType="default"  value={password} onChangeText={text=>setPasword(text)} />
            {/* todo onPress */}
            {/* <TouchableOpacity  > 
              <Text style={{color:'#ce4257',fontWeight:'bold'}}  > Forgot ? </Text>
            </TouchableOpacity> */}
      </View>
      </View>
      <View style={{alignItems:'center',marginVertical:30}} >
         <TouchableOpacity onPress={handleLogin} > 
         <View style={styles.loginBtn} >
        {/* todo onPress */}
          <Text style={{color:'#495057',fontWeight:'bold',fontSize:18}}  > Login </Text>
        </View>
      </TouchableOpacity>
      <Text style={{marginTop:20}} > or login with: </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}} >
        {/* todo onPress */}
        <TouchableOpacity>
          <Image source={require('../assets/google.png')} style={{height:40,width:40}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/facebook.png')} style={{height:40,width:40}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/twitter.png')} style={{height:40,width:40}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',padding:30}}>
        <Text> New to the App? </Text>
        <TouchableOpacity onPress={registerBtnHandler} >
          <Text style={{color:'#ce4257',fontWeight:'bold'}}> Register </Text>
        </TouchableOpacity>
        
      </View>
      
      </View>
     
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loginImg:{
    width:windowWidth-10,
    height:250,
    marginTop:'5%'
    
  },
  inputField:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:'#ccc',
    borderBottomWidth:2,
    paddingBottom:6,
    marginBottom:25
  },
  loginBtn:{
    padding:8,
    alignItems:'center',
    backgroundColor:'#fff',
    borderColor:'#ce4257',
    borderWidth:4,
    borderRadius:10,
    width:windowWidth-80

  }
})


export default Login