import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState,useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Entypo,
  Icon,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import Seats from "../components/Seats";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { db } from "../firebase";
import { collection, addDoc,doc, setDoc } from "firebase/firestore";




const BookingPage = ({ navigation }) => {
  const route = useRoute();

  let Amount = route.params?.Amount;
  const destination = route.params?.destination
  const title = route.params?.title
  const trip = `${title} to ${destination}`

  const [modalOpen, setModalOpen] = useState(false);
  const [phone, setPhone] = useState();
  const [time,SetTime] = useState()

  const timeData =[
    {key:'1', value:'8:00 am', disabled:true},
    {key:'2', value:'10:00am'},
    {key:'1', value:'9:00 pm', disabled:true},
  ]
 

  const SEAT_STATES = {
    EMPTY: 'empty',
    BOOKED: 'booked',
    TRUE:true,
    FALSE:false,
  };

  const [row1,setRow1] = useState([
   
  ])

  useEffect(() => {
    // //add seats to firebase
    // addTodo()
    // Load seats data from Firebase
    db.collection(trip).onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRow1(data);
    });
  }, []);

 
  

  let selectedSeats =[]

  const onSelectRow1=(index)=>{
    
    let tempRow = []
    tempRow = row1
    tempRow.map((item,ind)=>{
        if(index==ind){
            if(item.selected==true){

                item.selected=false
                item.empty=true
                
            }else{
                
                
                item.selected=true
                item.empty=false
            }
        }
    })

    let tempSeat=[]
    tempRow.map(item=>{
        tempSeat.push(item)
    })
    setRow1(tempSeat)

  }


  
 
  
   
//   const addTodo = async (e) => {
    
//     try {
//       // const docRef = await addDoc(collection(db, "test2"),'1', {
        
//       //     empty: true, selected: false ,
          
//       // });
//       const docRef = await db.collection(trip).doc("1").set({
//         empty: true, selected: false ,
//     })
//     await db.collection(trip).doc("2").set({
//       empty: true, selected: false ,
//   })
//   await db.collection(trip).doc("3").set({
//     empty: true, selected: false ,
// })
// await db.collection(trip).doc("4").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("5").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("6").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("7").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("8").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("9").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a10").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a11").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a12").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a13").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a14").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a15").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a16").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a17").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a18").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a19").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a20").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a21").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a22").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a23").set({
//   empty: true, selected: false ,
// })
// await db.collection(trip).doc("a24").set({
//   empty: true, selected: false ,
// })

//       console.log("Document written with ID: ");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };
  

  const getAllSeats=()=>{
    let noSeatSelected =0
    row1.map((item)=>{
        if(item.selected==true){
            
          noSeatSelected = noSeatSelected+1
          
            db.collection(trip)
            .doc(item.id)
            .update({
              empty: SEAT_STATES.FALSE,
              selected: SEAT_STATES.TRUE,
            });
    
        }
    })
  }

  const makePayment = async () => {
    await  getAllSeats()
    await addPhoneNo()

    //make paymment
    
    await fetch("https://mpesa-server-production.up.railway.app/token", {
      method: "POST",
      body: JSON.stringify({
        phone: phone,
        amount: Amount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.log(error.message);
    });

    // save to firebase
    
     console.log(selectedSeats[0])
     
   
  };
 

  
  const addPhoneNo = async (e) => {
    
   
    try {
        const docRef = await addDoc(collection(db, "Phone Numbers"), {
          PhoneNumber: phone,  
          trip:trip,
          
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


  return (
    <>
      

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
          margin:'10%'
        }}
      >
       
        <Text>{trip}</Text>
        <View
          style={{
            width: "100%",
            height: "100%",
            borderWidth: 3,
            borderColor: "#a4133c",
            borderRadius: 28,
          }}
        >
          <Image
            source={require("../assets/icons8-steering-64.png")}
            style={{ height: 32, width: 32, alignSelf: "flex-end",margin:10 }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
                <FlatList data={row1} numColumns={4} style={{margin:8}} renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity style={styles.seat} onPress={()=>{
                            if(item.selected==true && item.empty==false){
                                alert('already booked')
                            }else{
                                onSelectRow1(index)
                                
                               
                            }
                        }} >
                            {
                            item.empty==false && item.selected==true?( <MaterialIcons name="event-seat" size={32} color="#22223b" />):
                            item.empty==true && item.selected==false?(<MaterialIcons name="event-seat" size={32} color="#C9C9C9" />): null
                            
                        }
                        </TouchableOpacity>
                    )
                }}/>
            </View>
           
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          
        }}
      >
        <View style={styles.bookButton}>
          <Text style={{ color: "#495057", fontWeight: "bold", fontSize: 18 }}>
            Book Now
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={{marginLeft:20}}>Get us on Email: tevindavid3@gmail.com</Text>
      <Modal visible={modalOpen}>
        <View>
          <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <MaterialIcons name="close" size={32} />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: "20%" }}>
            <Image
              source={require("../assets/M-PESA_LOGO-01.png")}
              style={{ width: 200, resizeMode: "contain" }}
            />
          </View>
          <View>
            <View style={styles.inputField}>
              <TextInput
                placeholder="Enter Phone number"
                style={{ flexGrow: 1 }}
                keyboardType="numeric"
                value={phone}
                onChangeText={(phone) => setPhone(phone)}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => makePayment()}>
            <View style={styles.bookButton}>
              <Text
                style={{ color: "#495057", fontWeight: "bold", fontSize: 18 }}
              >
                PAY
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default BookingPage;

const styles = StyleSheet.create({
  busView: {
    padding: 28,
    marginHorizontal: 30,
    marginTop: "30%",
    borderWidth: 3,
    borderColor: "#a4133c",
    borderRadius: 28,
  },
  bookButton: {
    padding: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ce4257",
    borderWidth: 4,
    borderRadius: 10,
    width: windowWidth - 80,
    marginHorizontal: 30,
    marginTop: 40,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    paddingBottom: 6,
    marginBottom: 25,
    marginHorizontal: "15%",
    marginVertical: "15%",
  },
  seat: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
