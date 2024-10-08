import { View, Text, TouchableOpacity } from "react-native";
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

interface NavComponentProps {
  page: string; 
}

export default function NavComponent({ page }: NavComponentProps) {
  const navigation = useNavigation();
  return (
    <View style={[
      tw`absolute -bottom-162 left-0 right-0 flex-row items-center justify-between p-0.01 bg-white`,
      { 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 },  
        shadowOpacity: 0.25,  
        shadowRadius: 10,  
        elevation: 8  
      }
    ]}>
      <TouchableOpacity 
        style={[
          tw`bg-white p-4 m-2 items-center`, 
          page === "home" ? { backgroundColor: 'rgba(239, 68, 68, 0.7)', padding:"1.5vw",paddingLeft:"8vw",paddingRight:"8vw",borderRadius:"4vw",color:"white" } : {}
        ]}
        onPress={() => navigation.navigate('home')}
      >
        <svg style={{zIndex:'9'}} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="35px" fill={page==="home" ? "#ffff" :"#808080" }>
          <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/>
        </svg>    
        <Text style={page === "home" ? tw`text-white` : tw`text-gray-500`}>Home</Text>
        </TouchableOpacity>

      <TouchableOpacity 
      style={[
        tw`bg-white p-4 m-2 items-center`, 
        page === "orders" ? { backgroundColor: 'rgba(239, 68, 68, 0.7)', padding:"1.5vw",paddingLeft:"8vw",paddingRight:"8vw",borderRadius:"4vw",color:"white" } : {}
      ]}
      onPress={() => navigation.navigate('orders')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={page==="orders" ? "#ffff" :"#808080" }>
          <path d="M280-600v-240q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v240h40v-240q0-17 11.5-28.5T440-880q17 0 28.5 11.5T480-840v240q0 56-34.5 98T360-446v326q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-326q-51-14-85.5-56T160-600v-240q0-17 11.5-28.5T200-880q17 0 28.5 11.5T240-840v240h40Zm400 200h-80q-17 0-28.5-11.5T560-440v-240q0-70 51.5-135T718-880q18 0 30 14t12 33v713q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-280Z"/>
        </svg>
        <Text style={page === "orders" ? tw`text-white` : tw`text-gray-500`}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={[
        tw`bg-white p-4 m-2 items-center`, 
        page === "profile" ? { backgroundColor: 'rgba(239, 68, 68, 0.7)', padding:"1.5vw",paddingLeft:"8vw",paddingRight:"8vw",borderRadius:"4vw",color:"white" } : {}
      ]}
      onPress={() => navigation.navigate('profile')}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={page==="profile" ? "#ffff" :"#808080" }>
          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
        </svg>
        <Text style={page === "profile" ? tw`text-white` : tw`text-gray-500`}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
