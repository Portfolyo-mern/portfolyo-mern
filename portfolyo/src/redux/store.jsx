import {NavbarR,NavbarBg,NavbarIconColor,IconColor,onScrollBg,
    NavHoverColor,HomeIconText,ArticleIconText,AboutIconText,ContactIconText,NavbarIconText,TabPointer,OpenEditor,
    UsernameP,ProfilePicture,DescribeP,AddressP,DescribeFontP,AddressFontP,UsernameFontP,ButtonStyleP,DButtonColorP,
    HButtonColorP,HTextColorP,DTextColorP,dpStructureP,layoutp,alignp,profileSectionBackground,encryptBackgroundWords,
	profileSectionBackgroundColor,AvatarCrop,openbackgroundp,namee,descriptione,card1edu,educationsectiontitle,
    currenttabe,educationhfontname,educationpfontname,fontcolore,fontcolorep,animationtypeeh,animationtimeeh,
    animationdelayeh,carddetailse,editcardine,fontsineb,fontfamilyedu,imagetypeedu,newimageinedu,layoutinedu,shadowcardedu

} from './reducers';

import {createStore,combineReducers} from 'redux';


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
    TabPointer,
    OpenEditor,
    ProfilePicture,
    UsernameP,
    DescribeP,
    AddressP,
    DescribeFontP,
    AddressFontP,
    UsernameFontP,
    ButtonStyleP,
    DButtonColorP,
    HButtonColorP,
    HTextColorP,
    DTextColorP,
    dpStructureP,
    layoutp,
    alignp,
    openbackgroundp,
    namee,
    descriptione,
    card1edu,
    educationsectiontitle,
    currenttabe,
    educationhfontname,
    educationpfontname,
    fontcolore,
    fontcolorep,
    animationtypeeh,
    animationtimeeh,
    animationdelayeh,
    carddetailse,
    fontsineb,
    fontfamilyedu,
    editcardine,
    imagetypeedu,
    newimageinedu,
    layoutinedu,
    shadowcardedu
});

const Store = createStore(red);

export default Store;
