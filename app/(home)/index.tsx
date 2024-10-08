import { Text,View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import NavComponent from "@/components/nav"
export default function Home(){
    return(

        <ScrollView>
            <NavComponent page="home"></NavComponent>
        <Text>Yello</Text>
        </ScrollView>
    )
}