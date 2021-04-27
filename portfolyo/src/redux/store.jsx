import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";

import {
	NavbarR,
	NavbarBg,
	NavbarIconColor,
	IconColor,
	onScrollBg,
	NavHoverColor,
	HomeIconText,
	ArticleIconText,
	AboutIconText,
	ContactIconText,
	NavbarIconText,
	profileSectionBackground,
	encryptBackgroundWords,
	profileSectionBackgroundColor,
	AvatarCrop,
} from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let red = combineReducers({
	Navbar: NavbarR,
	NavbarBg: NavbarBg,
	NavbarIconColor: NavbarIconColor,
	IconColor: IconColor,
	onScrollBg: onScrollBg,
	NavHoverColor: NavHoverColor,
	HomeIconText: HomeIconText,
	ArticleIconText,
	AboutIconText,
	ContactIconText,
	NavbarIconText,
	profileSectionBackground: profileSectionBackground,
	encryptBackgroundWords: encryptBackgroundWords,
	profileSectionBackgroundColor: profileSectionBackgroundColor,
	AvatarCrop: AvatarCrop,
});

const Store = createStore(red, composeEnhancers(applyMiddleware(logger)));

export default Store;
