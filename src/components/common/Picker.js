import React from "react"
import {
  View,
  Text,
  StyleSheet
} from "react-native"
import {
  Button
} from "native-base"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/Feather"
import Ripple from 'react-native-material-ripple';


import cstyles from "../common/style"

export default class PickerComponent extends React.Component {
  state = {
    list: [
      {
        key: "java",
        text: "Java"
      },
      {
        key: "javascript",
        text: "JavaScript"
      },
      {
        key: "php",
        text: "PHP"
      }
    ],
    selectedItem: 1,
    open: false
  }
  expand = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }
  handleSelection = (index) => {
    setTimeout(() => {
      this.setState({ selectedItem: index, open: false })
    }, 250);
  }
  render() {
    const { white, transBorder } = cstyles
    const { list, open, selectedItem } = this.state
    const { filled } = this.props
    return (
      
      <View>
        <LinearGradient style={[styles.container]} 
          start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}}
          colors={ filled ? ['#5871B5', '#935CAE'] : ["#F7F7F7", "#F7F7F7"]}>
          <View>
            <Button onPress={this.expand} transparent style={[styles.indicator, filled && transBorder]} >
              <Text style={[styles.text, filled && white]} >{ list[selectedItem].text }</Text>
              <Icon name="chevron-down" size={30} color={filled ? "#fff" : "#935CAE"} />
            </Button>
          </View>
      </LinearGradient>
      { open && <View style={[styles.dropMenu]} >
        {
          list.map((el, index) => (
              <Ripple key={index} rippleColor="#935CAE" rippleDuration={1000} 
                rippleContainerBorderRadius={23} style={styles.menuItem} onPress={() => this.handleSelection(index)} >
                <Text data-key={el.key} style={styles.menuItemText} >{el.text}</Text>
              </Ripple>
          ))
        }
      </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 165,
    borderRadius: 5 ,
    overflow: 'hidden',
  },
  indicator: {
    width: 165,
    padding: 10,
    borderWidth: 2,
    borderColor: '#935CAE',
    borderRadius: 5 ,
  },
  text: {
    color: "#935CAE",
    fontSize: 16, 
  },
  dropMenu: {
    width: 165,
    marginVertical: 5,
    position: "absolute",
    top: 50,
    borderRadius: 5,
    zIndex: 5
  },
  menuItem: {
    borderRadius: 23,
    backgroundColor: "#fff",
    width: 165,  
    padding: 10,
    marginVertical: 5,
    overflow: "hidden",
    borderBottomWidth: 3,
    borderBottomColor: "lightgray"
  },
  menuItemText: {
    color: "#935CAE",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }
})


