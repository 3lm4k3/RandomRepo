import React,{ Component } from 'react';
import {  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'mawkaaTest/src/components/common/StarRating';
import { Button,Card,Header,CategoryCard,CardSection,ContactCard,Input,Spinner,
  Checkbox } from '../components/common';

import * as actions from '../actions';
class ListItem extends Component{
	componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { tag, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <View style={{ flexDirection: 'row',}}>
            <TouchableHighlight style={{ flex: 1 }}>
              <Text>{tag.interest1name}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{ flex: 1 }}>
              <Text>{tag.interest2name}</Text>
            </TouchableHighlight>

            </View>
            <View style={{ flexDirection: 'row',}}>
            <TouchableHighlight style={{ flex: 1 }}>
              <Text>{tag.interest1name}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{ flex: 1 }}>
              <Text>{tag.interest2name}</Text>
            </TouchableHighlight>

          </View>


          


        </CardSection>
      );
    }
  }

	render() {
    const { titleStyle } = styles;
    const { id, title,ratings,subTitle,reviews,address } = this.props.tag;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectTag(id)}
      >
        <View>
          <ContactCard title={title} 
          ratingStars={ratings}
          subTitle={subTitle}
          reviews={reviews}
          address={address}

           icon={require('mawkaaTest/images/purpleBackground.png')}>
             
            <Text style={titleStyle}>
              {title}
            </Text>
           
          </ContactCard>
          
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTagId === ownProps.tag.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);