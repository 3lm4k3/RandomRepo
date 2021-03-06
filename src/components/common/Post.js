import React from "react"

import {
  View,
  Image,
  StyleSheet
} from "react-native"
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Left, 
  Body, 
  Right
} from 'native-base';
import Icon from "react-native-vector-icons/Feather"
import IonIcon from "react-native-vector-icons/Ionicons"






export default class Post extends React.Component {
  state = {
    liked: false,
    likes: 23,
    loaded: false,
    bookmarked: false
  }
  toggleBookmark = () => {
    this.setState(((prevState, props) => {
      return { bookmarked: !prevState.bookmarked};
    }))
  }
  toggleLike = () => {
    const { liked } = this.state
    if(liked) {
      this.setState(state => ({
        liked: false,
        likes: state.likes--
      }))
    }else {
      this.setState(state => ({
        liked: true,
        likes: state.likes++
      }))
    }
    
  }
  toggleComment = () => {
    console.log("comment");
    
  }
  handleShare = ( ) => {

  }
  render() {
    
    const { selling, sponsored, album } = this.props
    const { loaded, bookmarked, likes, liked } = this.state
    return (
      <View style={styles.container} >
        <View style={ [styles.card ]} >
          <CardItem style={styles.cardItem}>
            <View style={styles.cardActions} >
              <Button transparent onPress={this.toggleBookmark} >
                <IonIcon name={bookmarked ? "ios-bookmark" : "ios-bookmark-outline"} size={45} color="#484848" style={{marginHorizontal: 5}} /> 
                
              </Button>
              <Button transparent>
                <Icon name="more-horizontal" size={25} color="#484848" style={{marginHorizontal: 5}} />
              </Button>
            </View>
            <Left>
              <Thumbnail source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />
              <Body>
                <Text>NativeBase</Text>
                <View>
                  {
                    !sponsored  && <Text note>GeekyAnts</Text>
                  }
                  <Text note style={{color: "#935CAE"}} >December 12 at 5:30 PM</Text>
                </View>
                {
                  sponsored && <Text style={{color: "#FE8080"}}>Sponsored</Text>
                }
              </Body>
            </Left>
          </CardItem>
          <CardItem style={styles.cardItem}>
          <View>
            {
              selling && 
              <View>
                <Text style={ {lineHeight: 30}} >Ipsum commodo ex Lorem esse consectetur.</Text>
                <Text style={styles.price}>30,000 EGP</Text>
              </View>
            }
            <Text style ={{color : "#95989A"}}>
              Elit culpa reprehenderit ad ullamco voluptate anim ipsum nostrud eiusmod ullamco.
            </Text>
          </View>
          
          </CardItem>
          <CardItem cardBody style={styles.cardBody} >
            {
              album ? <Album/> :
                <Image source={{uri: (!loaded ? "https://picsum.photos/200/300/?blur" : 'https://picsum.photos/200/300/?random') }} style={{height: 350, width: null, flex: 1}}/>
            }
          </CardItem>
          
          <View style={[ { flexDirection:'row',paddingHorizontal: 10, paddingBottom: 10}]}>
            <Left>
              <Button transparent onPress={this.toggleLike} active={liked} >
                <Icon name="thumbs-up" size={25} color={liked ? "#935CAE" : "#484848"}/>
                <Text style={{ marginTop: 5, color: liked ? "#935CAE" : "#484848"}}>{likes} Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent onPress={this.toggleComment} >
                <Icon name="message-square" size={25} color="#484848"/>
                <Text style={{ color: "#484848"}}>4 Comments</Text>
              </Button>
            </Body>
            <Right >
            <Button transparent onPress={this.handleShare} >
                <IonIcon name="ios-share-alt-outline" size={25} color="#484848"/>
                <Text style={{ color: "#484848"}}>Share</Text>
              </Button>
            </Right>
          </View>
          
        </View>
      </View>
    )
  }
}

const styles = ({
  container: {
    backgroundColor: "#F8F8F8",
    marginVertical: 10
  },
  card: {
  },
  cardItem: {
    backgroundColor: "#F8F8F8",

  },
  cardActions: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    zIndex: 2
  },
  cardBody: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  price: {
    color: "#FE8080"
  }
})