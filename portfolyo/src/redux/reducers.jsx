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
export const ArticleIconText = (state= "Education",action) => {
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

export const openbackgroundp = (state=false,action) => {
    switch(action.type){
        case "openbackgroundp" : return action.payload;
        default:return state;
     }
} 

export const namee = (state="Education",action) => {
    switch(action.type){
        case "namee" : return action.payload;
        default:return state;
     }
} 

export const descriptione = (state="Lorem ipsum dolor sit, quos dignissimos. Quas ratione quasi et placeat consequuntur excepturi laboriosam! Aliquid, laboriosam?",action) => {
    switch(action.type){
        case "descriptione" : return action.payload;
        default:return state;
     }
}


const data = [
        {
            title:"TITLE1",
            year:"(2020-2021)",
            description:"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.",
            animation:"fade-right",
            animationdelay:0,
            animationduration:0.6,
            image:"",
            imageType:""
        },
        {
            title:"TITLE2",
            year:"(2020-2021)",
            description:"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.",
            animation:"fade-right",
            animationdelay:0,
            animationduration:0.6,
            image:"",
            imageType:""
        },
        {
            title:"TITLE3",
            year:"(2020-2021)",
            description:"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.",
            animation:"fade-right",
            animationdelay:0,
            animationduration:0.6,
            image:"",
            imageType:""
        }
    ]

export const card1edu = (state=data,action) => {
 
    switch(action.type){
        case "card1edu":return action.payload;
        default:return state;
    }
}

export const educationsectiontitle = (state="EDUCATION",action) => {
 
    switch(action.type){
        case "educationsectiontitle":return action.payload;
        default:return state;
    }
}
export const currenttabe = (state=0,action) => {
 
    switch(action.type){
        case "currenttabe":return action.payload;
        default:return state;
    }
}

export const educationhfontname = (state="Open Sans",action) => {
    switch(action.type){
        case "educationhfontname":return action.payload;
        default:return state;
    }
}


export const educationpfontname = (state="Open Sans",action) => {
    switch(action.type){
        case "educationpfontname":return action.payload;
        default:return state;
    }
}
export const fontcolore = (state="black",action) => {
    switch(action.type){
        case "fontcolore":return action.payload;
        default:return state;
    }
}
export const fontcolorep = (state="#777",action) => {
    switch(action.type){
        case "fontcolorep":return action.payload;
        default:return state;
    }
}

export const animationtypeeh = (state="zoom-in",action) => {
    switch(action.type){
        case "animationtypeeh":return action.payload;
        default:return state;
    }
}

export const animationtimeeh = (state=0.3,action) => {
    switch(action.type){
        case "animationtimeeh":return action.payload;
        default:return state;
    }
}

export const animationdelayeh = (state=0,action) => {
    switch(action.type){
        case "animationdelayeh":return action.payload;
        default:return state;
    }
}

export const carddetailse = (state={title:"",year:"",description:"",imageType:"",image:"",animation:"fade-right",animationdelay:0,animationduration:0.6},action) => {
    switch(action.type){
        case "carddetailse":return action.payload;
        default:return state;
    }
}

export const editcardine = (state={index:null,imageType:"",title:"",year:"",description:"",animation:"fade-right",animationdelay:0,animationduration:0.6},action) => {
    switch(action.type){
        case "editcardine":return action.payload;
        default:return state;
    }
} 

export const fontsineb = (state={title:"#000",year:"#bbb",description:"#777",bgcolor:"#fff"},action) => {
    switch(action.type){
        case "fontsineb":return action.payload;
        default:return state;
    }
}
export const fontfamilyedu = (state={title:"Arial",year:"Arial",description:"Arial"},action) => {
    switch(action.type){
        case "fontfamilyedu":return action.payload;
        default:return state;
    }
}

export const imagetypeedu = (state="",action) => {
    switch(action.type){
        case "imagetypeedu":return action.payload;
        default:return state;
    }
}

export const newimageinedu = (state="",action) => {
    switch(action.type){
        case "newimageinedu":return action.payload;
        default:return state;
    }
}

export const layoutinedu = (state="layout1",action) => {
    switch(action.type){
        case "layoutinedu":return action.payload;
        default:return state;
    }
}

export const shadowcardedu = (state="0 .5rem 1rem rgba(0,0,0,.15)",action) => {
    switch(action.type){
        case "shadowcardedu":return action.payload;
        default:return state;
    }
}
