import React from "react"

import {
  View, 
  Image, 
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import CarrouselCard from "./CarrouselCard";

const randomColors = ["#9933CC", "#FFEB3B", "#F44336", "#00BCD4"]
const getRandomColor = () => randomColors[parseInt(Math.random()*4)]


export default (props) => (
  <View style={ styles.container } >
    <ScrollView horizontal bounces alwaysBounceHorizontal showsHorizontalScrollIndicator={false}>
      <CarrouselCard title="Engineers" color={getRandomColor()}/>
      <CarrouselCard title="Contractors" color={getRandomColor()}/>
      <CarrouselCard title="Clients" color={getRandomColor()}/>
      <CarrouselCard title="Suppliers" color={getRandomColor()}/>
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 15
  },
})

