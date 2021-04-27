import {NavbarR,NavbarBg,NavbarIconColor,IconColor,onScrollBg,
    NavHoverColor,HomeIconText,ArticleIconText,AboutIconText,ContactIconText,NavbarIconText,TabPointer,OpenEditor,
    ProfilePicture
} from './reducers';
import {createStore,combineReducers} from 'redux';


let red = combineReducers({
    Navbar:NavbarR,
    NavbarBg:NavbarBg,
    NavbarIconColor:NavbarIconColor,
    IconColor:IconColor,
    onScrollBg:onScrollBg,
    NavHoverColor:NavHoverColor,
    HomeIconText:HomeIconText,
    ArticleIconText,
    AboutIconText,
    ContactIconText,
    NavbarIconText,
    TabPointer,
    OpenEditor,
    ProfilePicture
});

const Store = createStore(red);

export default Store;