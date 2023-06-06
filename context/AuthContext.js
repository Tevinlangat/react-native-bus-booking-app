import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{ createContext, useState,useEffect } from 'react'

import { auth } from '../firebase'

export const AuthContext = createContext()

export const AuthProvider =({children})=>{

    const [isLoading,setIsLoading] = useState(false)
    const [userToken,setUserToken] = useState(null)
    

    const login=()=>{
        setUserToken('1233')
        setIsLoading(true)
        AsyncStorage.setItem('userToken','1233')
        setIsLoading(false)
    }

    const logout =()=>{
        setUserToken(null)
        setIsLoading(true)
        AsyncStorage.removeItem('userToken')
        setIsLoading(false)
        auth.signOut()
    }

    const isLoggedIn =async()=>{
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            setUserToken(userToken)
            setIsLoading(false)
        } catch (error) {
            console.log(`error: ${error}`)
        }    
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

    return(
         <AuthContext.Provider value={{login,logout,isLoading,userToken}} >
        {children}
    </AuthContext.Provider>
    )
   
}