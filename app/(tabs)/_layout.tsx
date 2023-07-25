import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='home'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<FontAwesome
							name='home'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='details'
				options={{ headerShown: false }}
			/>
		</Tabs>
	)
}
export default TabsLayout
