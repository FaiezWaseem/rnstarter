import { Text, View } from "react-native";
import { NavigationProps } from "../props/navigation-props";
import Button from "../components/Button";
import Routes from "../utility/Routes";
import InputFeild from "../components/InputFeild";
import Loader from "../components/Loader";


export default function HomeScreen({ navigation }: NavigationProps) {
    return <View className="flex-1 justify-center items-center p-2 bg-white dark:bg-slate-900">
        <Text className="text-black my-3 font-bold text-lg" >Native Wind Css</Text>
        <Loader isVisible={true} message="Loading..." showMessage />
        <View className="w-full" >
            <InputFeild label='Email'
                labelStyle='text-black dark:text-white'
                placeholder='Enter your email'
                containerStyle="px-2"
            />
        </View>
        <Button
            title="Go To WebView"
            bgVariant="dark"
            onPress={() => {
                console.log('Pressed')
                navigation.navigate(Routes.WEBVIEW)
            }} />
    </View>
}