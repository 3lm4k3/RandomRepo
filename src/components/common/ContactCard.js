import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import StarRating from './StarRating';


const ContactCard = (props) => {
	return (
		<View style={styles.containerStyle}>
			{/* <Image style={styles.image} source={props.icon} >
				<TouchableOpacity style={styles.saveImage}>
					<Image source={require('../../assets/images/home.png')}></Image>
				</TouchableOpacity>
				<View style={{flexDirection:'row',marginTop:30,
				alignItems:'center',marginLeft:5}}>
					<Image style={styles.innerImage} source={require('../../assets/images/prices.png')}></Image>
					
					
					
					<View style={{marginLeft:2}}>
						<Text style={styles.title} >{props.title}</Text>
						<Text style={styles.subTitle} >{props.subTitle}</Text>
						<View style={{marginLeft:16,flexDirection:'row'}}>
							<StarRating
			                maxStars={5}
			                rating={props.ratingStars}
			                starSize={10}
			                selectStar={require('../../assets/images/select_star.png')}
			                unSelectStar={require('../../assets/images/unselect_star.png')}
			                valueChanged={this._valueChanged}

			              	/>
			              	<Text style={styles.reviews} >{props.reviews}</Text>
		            	</View>
						<Text style={styles.address} >{props.address}</Text>
						
					</View>
				</View>

			</Image> */}
			
			<View style={{marginTop:10,flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
				<TouchableOpacity style={styles.call}>
					<Text style={styles.callContactText}>
						Call
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.contact}>
					<Text style={styles.callContactText}>
						Contact
					</Text>
				</TouchableOpacity>
			</View>
		</View>

		);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		width:undefined,
		height:undefined,
		flex:1,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		
		
		
	},
	image:{
		backgroundColor:'#95989A',
		width:376,
		height:151,
		alignItems:'baseline',

	},
	innerImage:{
		width:36,
		height:36,
		
		marginLeft:16,


		
		
	},
	saveImage:{
		marginRight:5,
		marginTop:10,
		justifyContent:'flex-end',
		alignSelf: 'flex-end'
	},
	contact:{
		backgroundColor:'#935CAE',
		width:144,
		height:36,
		
		marginRight:18,
		marginBottom:16,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:29,
	},
	call:{
		backgroundColor:'#76DB6E',
		width:144,
		height:36,
		marginLeft:34,
		marginRight:18,
		marginBottom:16,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:29,

	},
	callContactText:{
		fontSize:14,
		fontWeight:'normal',
		color:'white'
	},
	address:{
		backgroundColor:'transparent',
		color:'white',

		width:320,
		paddingLeft:18,
		textDecorationLine: 'underline',
		
		fontSize:12,

		fontWeight:'normal',


	},
	title:{
		backgroundColor:'transparent',
		color:'white',
		paddingLeft:18,
		fontSize:14,
		fontWeight:'bold',
	},
	subTitle:{
		backgroundColor:'transparent',
		color:'white',
		paddingLeft:18,
		fontSize:9,
		fontWeight:'bold',
	},
	
	reviews:{
		backgroundColor:'transparent',
		color:'white',
		paddingLeft:18,
		fontSize:10,
		fontWeight:'normal',
	},

};
export  {ContactCard};