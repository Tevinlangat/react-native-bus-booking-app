import { View, Text,SafeAreaView,Image,StyleSheet,TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React,{ useState,useContext } from 'react'
import DatePicker from 'react-native-date-picker'

import { MaterialCommunityIcons, Entypo,Icon,FontAwesome5,MaterialIcons,Ionicons } from '@expo/vector-icons'
import { windowWidth,windowHeight } from '../utils/Dimensions'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const RegisterPage = ({navigation}) => {

  const {login} = useContext(AuthContext)

  const loginBtnHandler=()=>{
    navigation.goBack()
  }

  const handleSignUp=()=>{
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials =>{
        const user = userCredentials.user
        console.log(user.email)
        login()
    })
    .catch(error => alert(error.message))
  }

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

const [email,setEmail] = useState('')
const [password,setPasword] = useState('')
const [names,setNames] = useState('')

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff',flex:1}} >
      <View style={{margin:6}} >
        <Image source={require('../assets/register.png')} style={styles.loginImg} />
      <View style={{padding:12,}} >
         <Text
      style={{fontSize:33,fontWeight:'bold',color:'#495057',marginVertical:25}}
      > Register </Text>
       
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
      <View style={{alignItems:'center',padding:20}} >
        <Text> Register with email : </Text>
      </View>
        
        <View  style={styles.inputField} >
            <Ionicons name='person-outline' size ={20} color='#666' style={{marginRight:5}} />
            <TextInput placeholder='Full Name' style={{flexGrow:1}}  keyboardType="default" value={names} onChangeText={text=> setNames(text)}/>
        </View>
        <View  style={styles.inputField} >
            <MaterialIcons name='alternate-email' size ={20} color='#666' style={{marginRight:5}} />
            <TextInput placeholder='Email' style={{flexGrow:1}} keyboardType='email-address' value={email} onChangeText={text=> setEmail(text)} />
        </View>
        <View  style={styles.inputField} >
            <Ionicons name='ios-lock-closed-outline' size ={20} color='#666' style={{marginRight:5}} />
            <TextInput placeholder='Password' secureTextEntry={true} style={{flexGrow:1}} keyboardType="default" value={password} onChangeText={text=> setPasword(text)} />
        </View>
       
        {/* <View  style={styles.inputField} >
            <Ionicons name='calendar-outline' size ={20} color='#666' style={{marginRight:5}} />
            <TouchableOpacity onPress={()=>setOpen(true)} >
                <Text style={{color:'#666'}} > Date of Birth </Text>
            </TouchableOpacity>
            
            <DatePicker
                modal
                open={open}
                date={date}
                mode={date}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />

        </View> */}

      </View>

      <View style={{alignItems:'center',marginVertical:25}} >
        <TouchableOpacity onPress={handleSignUp} > 
            <View style={styles.loginBtn} >
                {/* todo onPress */}
                <Text style={{color:'#495057',fontWeight:'bold',fontSize:18}} > Register </Text>
            </View>
        </TouchableOpacity>
        
      </View>
     
      <View style={{flexDirection:'row',justifyContent:'center',padding:30}}>
        <Text> Already registered: </Text>
        <TouchableOpacity onPress={loginBtnHandler} >
          <Text style={{color:'#ce4257',fontWeight:'bold'}}> login </Text>
        </TouchableOpacity>
        
      </View>
      
      </View>
     
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loginImg:{
    width:windowWidth-5,
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



export default RegisterPage