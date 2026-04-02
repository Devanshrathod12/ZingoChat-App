import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Route from "./src/Navigation/Routes"
import {AuthProvider} from "./src/Context/AppContext"
const App = () => {
  return (
    <>
    <AuthProvider>
   <Route/>
    </AuthProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})