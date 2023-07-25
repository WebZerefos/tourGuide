import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

const index = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: 'https://www.pexels.com/photo/2662116/download/' }}
					style={styles.image}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>Travel Anywhere In The</Text>
					<Text style={styles.titleText}>World Without Any Hassle</Text>
					<Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. fuga quae laudantium soluta consectetur.</Text>
				</View>

				<View style={styles.buttonContainer}>
					<Pressable style={styles.skipBtn}>
						<Text style={styles.skipBtnText}>Skip</Text>
					</Pressable>
					<Link
						href='/(tabs)/home'
						asChild
					>
						<Pressable style={styles.nextBtn}>
							<Text style={styles.nextBtnText}>Next</Text>
							<FontAwesome
								name='long-arrow-right'
								color='white'
							/>
						</Pressable>
					</Link>
				</View>
			</View>
		</View>
	)
}

export default index

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 10,
		backgroundColor: 'white',
		paddingTop: 40,
	},
	imageContainer: {
		flex: 2,
	},
	image: {
		width: '100%',
		height: '70%',
		borderBottomRightRadius: 25,
		borderBottomLeftRadius: 25,
	},
	titleContainer: {
		alignItems: 'center',
		marginTop: 15,
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 24,
	},
	paragraph: {
		textAlign: 'center',
		marginTop: 15,
		color: 'gray',
		lineHeight: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	skipBtn: {
		backgroundColor: '#e5e7eb',
		justifyContent: 'center',
		width: '45%',
		alignItems: 'center',
		padding: 20,
		borderRadius: 100,
	},
	nextBtn: {
		backgroundColor: '#38bdf8',
		justifyContent: 'center',
		width: '45%',
		alignItems: 'center',
		padding: 20,
		borderRadius: 100,
		flexDirection: 'row',
	},
	skipBtnText: {
		color: 'grey',
		fontWeight: 'bold',
	},
	nextBtnText: {
		color: 'white',
		fontWeight: 'bold',
		marginRight: 10,
	},
})
