import { LinearGradient } from 'expo-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import { GlobalStyles } from '../constants/styles';

 
const BackgroundColorTemplate = ({ children, headerPadding }) => {
//useHeaderHeight is a hook that gives you the height of the header
const headerHeight = useHeaderHeight();
 
return (

<LinearGradient 
colors={[GlobalStyles.colors.primaryHeader,  GlobalStyles.colors.primaryBackground ,GlobalStyles.colors.primaryBack ]}
        
start={{ x: 0, y: 0 }}
end={{ x: 1, y: 1 }}
style={{  flex: 1, paddingTop: headerPadding ? headerHeight : 0, justifyContent: 'center', alignItems: 'center'}}
>
 {children}
 
</LinearGradient>

)
}

export default BackgroundColorTemplate;