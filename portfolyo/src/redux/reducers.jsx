export const NavbarR = (state=0,action) => {
    switch(action.type){
        case "choosenav":return action.payload;
        default:return state;
    }
}
export const NavbarBg = (state="#000",action) => {
    switch(action.type){
        case "choosebg":return action.payload;
        default:return state;
    }
}
export const NavbarIconColor = (state="#fff",action) => {
    switch(action.type){
        case "chooseiconcolor":return action.payload;
        default:return state;
    }
}
export const IconColor = (state="#fff",action) => {
    switch(action.type){
        case "iconcolor":return action.payload;
        default:return state;
    }
}
export const onScrollBg = (state="#000",action) => {
    switch(action.type){
        case "onscrollbg":return action.payload;
        default:return state;
    }
}
export const NavHoverColor = (state="#fff",action) => {
    switch(action.type){
        case "navhovercolor":return action.payload;
        default:return state;
    }
}
export const HomeIconText = (state= "HOME",action) => {
    switch(action.type){
        case "sethome": return action.payload;
        default:return state;
    }
}
export const ArticleIconText = (state= "Article",action) => {
    switch(action.type){
        case "setarticle": return action.payload;
        default:return state;
    }
}
export const AboutIconText = (state= "About",action) => {
    switch(action.type){
        case "setabout": return action.payload;
        default:return state;
    }
}
export const ContactIconText = (state= "Contact",action) => {
    switch(action.type){
        case "setcontact": return action.payload;
        default:return state;
    }
}
export const NavbarIconText = (state= "Navbar",action) => {
    switch(action.type){
        case "setnavbar": return action.payload;
        default:return state;
    }
}

export const profileSectionBackground = (state = 2, action) => {
    switch(action.type){
        case "setBackground":
            return action.payload;
        default:
            return state;
    }
}

export const profileSectionBackgroundColor = (state = "#000000", action) => {
    switch (action.type) {
		case "profileSectionBackgroundColor":
			return action.payload;
		default:
			return state;
	}
}

export const encryptBackgroundWords = (state = [
    "Hardworking", "Compititive", "Smart", "Intellignet"
], action) => {
    switch (action.type) {
		case "setencryptBackgroundWords":
			return action.payload;
		default:
			return state;
	}
}

export const AvatarCrop = (state = false, action) => {
	switch (action.type) {
		case "profileSectionBackgroundImage":
			return action.payload;
		default:
			return state;
	}
};
export const TabPointer = (state=0,action) => {
     switch(action.type){
        case "tabpointer" : return action.payload;
        default:return state;
     }
}
export const OpenEditor = (state=false,action) => {
    switch(action.type){
       case "openeditor" : return action.payload;
       default:return state;
    }
}
export const ProfilePicture = (state="",action) => {
    switch(action.type){
       case "profilepicture" : return action.payload;
       default:return state;
    }
}

export const UsernameP = (state="Username",action) => {
    switch(action.type){
        case "usernamep" : return action.payload;
        default:return state;
     }
} 
export const DescribeP = (state="Description",action) => {
    switch(action.type){
        case "describep" : return action.payload;
        default:return state;
     }
} 
export const AddressP = (state="Address",action) => {
    switch(action.type){
        case "addressp" : return action.payload;
        default:return state;
     }
} 
export const UsernameFontP = (state="open sans",action) => {
    switch(action.type){
        case "usernamefontp" : return action.payload;
        default:return state;
     }
} 
export const DescribeFontP = (state="open sans",action) => {
    switch(action.type){
        case "describefontp" : return action.payload;
        default:return state;
     }
} 
export const AddressFontP = (state="open sans",action) => {
    switch(action.type){
        case "addressfontp" : return action.payload;
        default:return state;
     }
} 

export const ButtonStyleP = (state="contained",action) => {
    switch(action.type){
        case "buttonstylep" : return action.payload;
        default:return state;
     }
} 

export const DButtonColorP = (state="#f50057",action) => {
    switch(action.type){
        case "dbuttoncolorp" : return action.payload;
        default:return state;
     }
} 

export const HButtonColorP = (state="#1769aa",action) => {
    switch(action.type){
        case "hbuttoncolorp" : return action.payload;
        default:return state;
     }
} 

export const DTextColorP = (state="#fff",action) => {
    switch(action.type){
        case "dtextcolorp" : return action.payload;
        default:return state;
     }
} 

export const HTextColorP = (state="#fff",action) => {
    switch(action.type){
        case "htextcolorp" : return action.payload;
        default:return state;
     }
} 

export const dpStructureP = (state=0,action) => {
    switch(action.type){
        case "dpstructurep" : return action.payload;
        default:return state;
     }
} 

export const layoutp = (state=1,action) => {
    switch(action.type){
        case "layoutp" : return action.payload;
        default:return state;
     }
} 

export const alignp = (state=1,action) => {
    switch(action.type){
        case "alignp" : return action.payload;
        default:return state;
     }
} 
