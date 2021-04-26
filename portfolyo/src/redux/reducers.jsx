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