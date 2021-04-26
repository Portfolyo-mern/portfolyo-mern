import {NavbarR,NavbarBg,NavbarIconColor,IconColor,onScrollBg,
    NavHoverColor,HomeIconText,ArticleIconText,AboutIconText,ContactIconText,NavbarIconText
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
    NavbarIconText
});

const Store = createStore(red);

export default Store;