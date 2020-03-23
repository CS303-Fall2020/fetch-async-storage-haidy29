import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
 const getFonts = () => Font.loadAsync ({
    
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),

    })

export default function App() {
   const [fontsloaded, setFontsloaded] = useState(false);
   if(fontsloaded){
return(
<Navigator/>
);
} else {
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish={()=> setFontsloaded(true)}
    />

   )
}

}

