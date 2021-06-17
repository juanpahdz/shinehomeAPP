import{StyleSheet} from 'react-native';
import Colors from '../../../shared/colors/Colors';

const SplashStyles = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    gradientContainer:{
        flex: 1,  
        justifyContent: "center",
        alignItems: "center"      
    },

    statusbar:{
        backgroundColor: Colors.colorTwo
    }

    
});

export default SplashStyles;