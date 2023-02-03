import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import RegulationsScreen from './screens/RegulationsScreen';
import ContactsScreen from './screens/ContactsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Image } from 'react-native';
// import store from './store/store';
// import { Provider } from 'react-redux';

const config={
  screens: {
    Home: {
      screens: {
        Order: 'order'
      }
    },

    Contacts: 'contacts',
    Regulations: 'regulations'
    
  }
}

const linking = {
  prefixes: ['https://cryptoexchenge', '/cryptoexchenge://'],
  config,
};


const Stack = createNativeStackNavigator();
const Drawer= createDrawerNavigator();



function DrawerNavigation(){
  function openDrawer(){
    navigation.openDrawer()
  }

  return <Drawer.Navigator defaultStatus='closed' screenOptions={({navigation})=>({ 
    headerStyle: {backgroundColor: GlobalStyles.colors.primaryHeader, height: 50, borderBottomColor:GlobalStyles.colors.primaryHeader },
    headerTintColor: GlobalStyles.colors.smth,
    sceneContainerStyle: {backgroundColor: GlobalStyles.colors.backgroundColor},
    drawerContentStyle:{backgroundColor: GlobalStyles.colors.backgroundColor},
    drawerInactiveTintColor: GlobalStyles.colors.smth,
    drawerActiveTintColor: GlobalStyles.colors.primatyBtn,
    drawerActiveBackgroundColor:  GlobalStyles.colors.smth,
    // headerShown: false,
    headerRight: () => 
    <TouchableOpacity onPress={()=> navigation.navigate('Exchange')}>
      <Image
      style={{width: 30, height: 30, marginHorizontal: 20}}
      source={require('.//assets/crypto_proj.png')}/>
    </TouchableOpacity>,
    
    headerLeft: ()=> 
<TouchableOpacity onPress={navigation.openDrawer}>
    <Image
      style={{width: 30, height: 30, marginHorizontal: 20}}
      source={require('.//assets/menu.png')}/>
    </TouchableOpacity>
    ,
    
  })
  }>
    <Drawer.Screen  name='Exchange' component={HomeScreen} options={{ headerTitle: '' }}/>
    <Drawer.Screen name='Contacts' component={ContactsScreen} options={{ headerTitle: '' }}/>
    <Drawer.Screen  name='Regulations' component={RegulationsScreen} options={{ headerTitle: '' }}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    
    <NavigationContainer  linking={linking}>
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle:{backgroundColor: GlobalStyles.colors.backgroundColor},
    }} >
    <Stack.Screen name="Home" component={DrawerNavigation}/>
    <Stack.Screen name="Order" component={OrderScreen} options={({navigation})=>({
      headerStyle: {backgroundColor: GlobalStyles.colors.primaryHeader, height: 50, borderBottomColor:GlobalStyles.colors.primaryHeader },
      headerShown: true, 
      title: '',
      headerRight: () => 
    <TouchableOpacity onPress={()=> navigation.navigate('Exchange')}>
      <Image
      style={{width: 30, height: 30, marginHorizontal: 20}}
      source={require('.//assets/crypto_proj.png')}/>
    </TouchableOpacity>,
    headerLeft: ()=> null
    })}/>
  </Stack.Navigator>
    </NavigationContainer>
    
  );
}


