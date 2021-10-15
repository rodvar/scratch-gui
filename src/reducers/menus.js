const OPEN_MENU = 'scratch-gui/menus/OPEN_MENU';
const CLOSE_MENU = 'scratch-gui/menus/CLOSE_MENU';

const MENU_ABOUT = 'aboutMenu';
const MENU_ACCOUNT = 'accountMenu';
const MENU_FILE = 'fileMenu';
const MENU_EDIT = 'editMenu';
const MENU_SPRITES = 'editSprites';
const MENU_BACKDROPS = 'editBackdrops';
const MENU_LANGUAGE = 'languageMenu';
const MENU_LOGIN = 'loginMenu';


const initialState = {
    [MENU_ABOUT]: false,
    [MENU_ACCOUNT]: false,
    [MENU_FILE]: false,
    [MENU_EDIT]: false,
    [MENU_SPRITES]: false,
    [MENU_BACKDROPS]: false,
    [MENU_LANGUAGE]: false,
    [MENU_LOGIN]: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case OPEN_MENU:
        return Object.assign({}, state, {
            [action.menu]: true
        });
    case CLOSE_MENU:
        return Object.assign({}, state, {
            [action.menu]: false
        });
    default:
        return state;
    }
};
const openMenu = menu => ({
    type: OPEN_MENU,
    menu: menu
});
const closeMenu = menu => ({
    type: CLOSE_MENU,
    menu: menu
});
const openAboutMenu = () => openMenu(MENU_ABOUT);
const closeAboutMenu = () => closeMenu(MENU_ABOUT);
const aboutMenuOpen = state => state.scratchGui.menus[MENU_ABOUT];
const openAccountMenu = () => openMenu(MENU_ACCOUNT);
const closeAccountMenu = () => closeMenu(MENU_ACCOUNT);
const accountMenuOpen = state => state.scratchGui.menus[MENU_ACCOUNT];
const openFileMenu = () => openMenu(MENU_FILE);
const closeFileMenu = () => closeMenu(MENU_FILE);
const fileMenuOpen = state => state.scratchGui.menus[MENU_FILE];
const openEditMenu = () => openMenu(MENU_EDIT);
const openSpritesMenu = () => openMenu(MENU_SPRITES);
const openBackdropsMenu = () => openMenu(MENU_BACKDROPS);
const closeEditMenu = () => closeMenu(MENU_EDIT);
const closeSpritesMenu = () => closeMenu(MENU_SPRITES);
const closeBackdropsMenu = () => closeMenu(MENU_BACKDROPS);
const editMenuOpen = state => state.scratchGui.menus[MENU_EDIT];
const spritesMenuOpen = state => state.scratchGui.menus[MENU_SPRITES];
const backdropsMenuOpen = state => state.scratchGui.menus[MENU_BACKDROPS];
const openLanguageMenu = () => openMenu(MENU_LANGUAGE);
const closeLanguageMenu = () => closeMenu(MENU_LANGUAGE);
const languageMenuOpen = state => state.scratchGui.menus[MENU_LANGUAGE];
const openLoginMenu = () => openMenu(MENU_LOGIN);
const closeLoginMenu = () => closeMenu(MENU_LOGIN);
const loginMenuOpen = state => state.scratchGui.menus[MENU_LOGIN];

export {
    reducer as default,
    initialState as menuInitialState,
    openAboutMenu,
    closeAboutMenu,
    aboutMenuOpen,
    openAccountMenu,
    closeAccountMenu,
    accountMenuOpen,
    openFileMenu,
    closeFileMenu,
    fileMenuOpen,
    openEditMenu,
    openSpritesMenu,
    openBackdropsMenu,
    closeEditMenu,
    closeSpritesMenu,
    closeBackdropsMenu,
    editMenuOpen,
    spritesMenuOpen,
    backdropsMenuOpen,
    openLanguageMenu,
    closeLanguageMenu,
    languageMenuOpen,
    openLoginMenu,
    closeLoginMenu,
    loginMenuOpen
};
