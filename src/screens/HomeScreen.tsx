import Box from "../components/Box";
import Button from "../components/Button";
import Text from "../components/Text";
import AntDesign from 'react-native-vector-icons/AntDesign'
import boostrap from "../styles/boostrap";
import { NavigationProps } from "../props/navigation-props";
import Routes from "../utility/Routes";
import Color from "../utility/Color";


export default function HomeScreen({ navigation }: NavigationProps) {
    return <Box flex justifyContent="center" alignItems="center" >
        <Text color={Color.dark} fontSize={22} >Home Screen <AntDesign name="android" size={22} /> </Text>
        <Button
            onPress={() => navigation.navigate(Routes.WEBVIEW)}
            color={Color.blue}
            style={{
                ...boostrap.btn,
                ...boostrap.btn_outline_primary,
                ...boostrap.mt1
            }}
        >Go To WebView</Button>
    </Box>
}