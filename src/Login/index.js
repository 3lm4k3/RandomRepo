import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Linear background component

export default class Login extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.linearGradient}>
          <Header/>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
          {/* <TouchableOpacity onPress={() => {}}>
            <Text>Facebook</Text>  
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text>LinkedIn</Text>  
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text>Google</Text>  
          </TouchableOpacity> */}
        </LinearGradient>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  }
  
});


export default Login