import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fonts from '@components/fonts';

function test() {
    <View>

    </View>


}

export function Router() {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={test} />
        </Stack.Navigator>
    </NavigationContainer>
}