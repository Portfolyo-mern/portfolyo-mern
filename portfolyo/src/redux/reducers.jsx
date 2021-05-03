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

export const openbackgroundp = (state=false,action) => {
    switch(action.type){
        case "openbackgroundp" : return action.payload;
        default:return state;
     }
} 

export const aboutSectionBackground = (
	state = {
		backgroundType: 0,
		backgroundColor: "#ffffff",
		backgroundDesignType: 0,
		imageBorderColor: "#000000",
		backgroundTransition: "none",
		aboutSectionTitleAlignment: "middle",
        aboutSectionImageBorderColor: "#000000",
		aboutSectionTitle: {
			text: "About",
			fontStyle: "Open Sans",
			color: "#000000",
		},
		aboutSectionIntro: {
			text: "⚡ Introduce youself In a Sentance",
			fontStyle: "Abel",
			color: "#000000",
		},
		aboutSectionImageTitle: {
			text: "✨ Image Title",
			fontStyle: "open Sans",
			color: "#000000",
		},
		aboutSectionSocialMediaTitle: {
			text: "✨ Catch me On",
			fontStyle: "open Sans",
			color: "#000000",
		},
		aboutSectionPassage: {
			text:
				"A brief explanation about yourself Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorum velit, dignissimos incidunt nostrum repellat deserunt officia, exercitationem ad neque, quam assumenda earum alias provident atque ab similique amet fugit. Quam omnis, ipsa hic sit praesentium voluptatem veniam delectus dignissimos nam impedit itaque neque veritatis obcaecati at doloremque laboriosam enim distinctio voluptates. Autem neque doloribus culpa quae inventore dolore veniam.",
			fontStyle: "Open Sans",
			color: "#000000",
		},
		aboutSectionBasicInfo: {
			title: {
				text: "✨ Basic Information",
				fontStyle: "Open Sans",
				color: "#000000",
			},
			keys: {
				fontStyle: "Open Sans",
				color: "#000000",
			},
			values: {
				text: {
					age: "26",
					email: "example@gmail.com",
					phone: "1234567890",
					address:
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi a",
					languages: "English, Telugu",
				},
				fontStyle: "Open Sans",
				color: "#000000",
			},
		},
		aboutSectionSocialMediaLinks: {
			instagram: "https://www.instagram.com/deepesh_dragoneel/",
			gmail: "https://mail.google.com/mail/u/0/",
			linkedIn: "https://www.linkedin.com/",
			github: "https://github.com/",
		},
	},
	action
) => {
	switch (action.type) {
		case "aboutSectionBackgroundChange":
			return (state = {
				...state,
				backgroundType: action.payload,
			});
		case "aboutSectionBackgroundColorChange":
			return (state = {
				...state,
				backgroundColor: action.payload,
			});
		case "aboutSectionBackgroundDesignChange":
			return (state = {
				...state,
				backgroundDesignType: action.payload,
			});
		case "aboutSectionImageBorderColor":
			return (state = {
				...state,
				imageBorderColor: action.payload,
			});
		case "aboutSectionTransitionChanger":
			return (state = {
				...state,
				backgroundTransition: action.payload,
			});
		case "aboutSectionTitleAlignmentChanger":
			return (state = {
				...state,
				aboutSectionTitleAlignment: action.payload,
			});
		case "aboutSectionTitleTextChange":
			return (state = {
				...state,
				aboutSectionTitle: {
					...state.aboutSectionTitle,
					text: action.payload,
				},
			});
		case "aboutSectionTitleFontStyleChange":
			return (state = {
				...state,
				aboutSectionTitle: {
					...state.aboutSectionTitle,
					fontStyle: action.payload,
				},
			});
		case "aboutSectionTitleColorChange":
			return (state = {
				...state,
				aboutSectionTitle: {
					...state.aboutSectionTitle,
					color: action.payload,
				},
			});
		case "aboutSectionIntroTextChange":
			return (state = {
				...state,
				aboutSectionIntro: {
					...state.aboutSectionIntro,
					text: action.payload,
				},
			});
		case "aboutSectionIntroFontStyleChange":
			return (state = {
				...state,
				aboutSectionIntro: {
					...state.aboutSectionIntro,
					fontStyle: action.payload,
				},
			});
		case "aboutSectionIntroColorChange":
			return (state = {
				...state,
				aboutSectionIntro: {
					...state.aboutSectionIntro,
					color: action.payload,
				},
			});
		case "aboutSectionPassageTextChange":
			return (state = {
				...state,
				aboutSectionPassage: {
					...state.aboutSectionPassage,
					text: action.payload,
				},
			});
		case "aboutSectionPassageFontStyleChange":
			return (state = {
				...state,
				aboutSectionPassage: {
					...state.aboutSectionPassage,
					fontStyle: action.payload,
				},
			});
		case "aboutSectionPassageColorChange":
			return (state = {
				...state,
				aboutSectionPassage: {
					...state.aboutSectionPassage,
					color: action.payload,
				},
			});
		case "aboutSectionImageTitleTextChange":
			return (state = {
				...state,
				aboutSectionImageTitle: {
					...state.aboutSectionImageTitle,
					text: action.payload,
				},
			});
		case "aboutSectionImageTitleFontStyleChange":
			return (state = {
				...state,
				aboutSectionImageTitle: {
					...state.aboutSectionImageTitle,
					fontStyle: action.payload,
				},
			});
		case "aboutSectionImageTitleColorChange":
			return (state = {
				...state,
				aboutSectionImageTitle: {
					...state.aboutSectionImageTitle,
					color: action.payload,
				},
			});
		case "aboutSectionSocialMediaTitleTextChange":
			return (state = {
				...state,
				aboutSectionSocialMediaTitle: {
					...state.aboutSectionSocialMediaTitle,
					text: action.payload,
				},
			});
		case "aboutSectionSocialMediaTitleFontStyleChange":
			return (state = {
				...state,
				aboutSectionSocialMediaTitle: {
					...state.aboutSectionSocialMediaTitle,
					fontStyle: action.payload,
				},
			});
		case "aboutSectionSocialMediaTitleColorChange":
			return (state = {
				...state,
				aboutSectionSocialMediaTitle: {
					...state.aboutSectionSocialMediaTitle,
					color: action.payload,
				},
			});
		case "aboutSectionSocialMediaInstagramChange":
			return (state = {
				...state,
				aboutSectionSocialMediaLinks: {
					...state.aboutSectionSocialMediaLinks,
					instagram: action.payload,
				},
			});
		case "aboutSectionSocialMediaGmailChange":
			return (state = {
				...state,
				aboutSectionSocialMediaLinks: {
					...state.aboutSectionSocialMediaLinks,
					gmail: action.payload,
				},
			});
		case "aboutSectionSocialMediaLinkedInChange":
			return (state = {
				...state,
				aboutSectionSocialMediaLinks: {
					...state.aboutSectionSocialMediaLinks,
					linkedIn: action.payload,
				},
			});
		case "aboutSectionSocialMediaGitHubChange":
			return (state = {
				...state,
				aboutSectionSocialMediaLinks: {
					...state.aboutSectionSocialMediaLinks,
					github: action.payload,
				},
			});
		case "aboutSectionBasicInfoTitleTextChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					title: {
						...state.aboutSectionBasicInfo.title,
						text: action.payload,
					},
				},
			});
		case "aboutSectionBasicInfoTitleFontStyleChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					title: {
						...state.aboutSectionBasicInfo.title,
						fontStyle: action.payload,
					},
				},
			});
		case "aboutSectionBasicInfoTitleColorChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					title: {
						...state.aboutSectionBasicInfo.title,
						color: action.payload,
					},
				},
			});
		case "aboutSectionBasicInfoKeysFontStylesChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					keys: {
						...state.aboutSectionBasicInfo.keys,
						fontStyle: action.payload,
					},
				},
			});
		case "aboutSectionBasicInfoKeysColorChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					keys: {
						...state.aboutSectionBasicInfo.keys,
						color: action.payload,
					},
				},
			});
		case "aboutSectionBasicInfoValuesTextAgeChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					values: {
						...state.aboutSectionBasicInfo.values,
						text: {
							...state.aboutSectionBasicInfo.values.text,
							age: action.payload,
						},
					},
				},
			});
		case "aboutSectionBasicInfoValuesTextEmailChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					values: {
						...state.aboutSectionBasicInfo.values,
						text: {
							...state.aboutSectionBasicInfo.values.text,
							email: action.payload,
						},
					},
				},
			});
		case "aboutSectionBasicInfoValuesTextPhoneChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					values: {
						...state.aboutSectionBasicInfo.values,
						text: {
							...state.aboutSectionBasicInfo.values.text,
							phone: action.payload,
						},
					},
				},
			});
		case "aboutSectionBasicInfoValuesTextAddressChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					values: {
						...state.aboutSectionBasicInfo.values,
						text: {
							...state.aboutSectionBasicInfo.values.text,
							address: action.payload,
						},
					},
				},
			});
		case "aboutSectionBasicInfoValuesTextLanguagesChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					values: {
						...state.aboutSectionBasicInfo.values,
						text: {
							...state.aboutSectionBasicInfo.values.text,
							languages: action.payload,
						},
					},
				},
			});
		case "aboutSectionBasicInfoValuesFontStyleChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					values: {
						...state.aboutSectionBasicInfo.values,
						fontStyle: action.payload,
					},
				},
			});
		case "aboutSectionBasicInfoValuesColorChange":
			return (state = {
				...state,
				aboutSectionBasicInfo: {
					...state.aboutSectionBasicInfo,
					values: {
						...state.aboutSectionBasicInfo.values,
						color: action.payload,
					},
				},
			});
		default:
			return state;
	}
};
/* aboutSectionBasicInfo: {
    title: {
        text: "✨ Basic Information",
        fontStyle: "Open Sans",
        color: "#000000",
    },
    keys: {
        fontStyle: "Open Sans",
        color: "#000000",
    },
    values: {
        text: {
            age: "26",
            email: "example@gmail.com",
            phone: "1234567890",
            address:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi a",
            languages: "English, Telugu"
        },
        fontStyle: "Open Sans",
        color: "#000000"
    },
}, */
export const AboutSectionImageUploader = (state = false, action) => {
	switch (action.type) {
		case "AboutSectionImageUpload":
			return action.payload;
		default:
			return state;
	}
};