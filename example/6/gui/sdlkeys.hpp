/////////////////////////////////////////////////////////////////////////
// $Id: sdlkeys.h 12388 2014-06-28 13:25:52Z vruppert $
/////////////////////////////////////////////////////////////////////////
  
// This file is simply a list of SDL key symbols taken from <SDL/SDL_keysym.h>.
// The order in this file is not important.  In sdl.cc, DEF_SDL_KEY() is
// defined as a macro and then it includes this file to fill in all the data in
// its key mapping table.
//
// The symbols, such as SDLK_RETURN, are used for two purposes.  They
// are converted into a string (by the # operator in processor), which is
// compared to the host key name in the keymap file.  Also, the value of
// the symbol is inserted into the key mapping table.  Then the value is
// compared with the keysym field of each key up/down event as it arrives.
//
// If you get undefined symbol errors in this file, it must mean that
// your SDL library version doesn't define those same SDLK_* symbols in
// <SDL/SDL_keysym.h>.  You can't fix it with #ifdef SDLK_SYM because
// they are enums, so you'll just have to comment out the offending line.
// The list was generated using symbols from SDL 1.2.3.

DEF_SDL_KEY( SDLK_UNKNOWN )
#if !BX_WITH_SDL2
#ifndef BX_ANDROID
DEF_SDL_KEY( SDLK_FIRST )
#endif
#endif
DEF_SDL_KEY( SDLK_BACKSPACE )
DEF_SDL_KEY( SDLK_TAB )
DEF_SDL_KEY( SDLK_CLEAR )
DEF_SDL_KEY( SDLK_RETURN )
DEF_SDL_KEY( SDLK_PAUSE )
DEF_SDL_KEY( SDLK_ESCAPE )
DEF_SDL_KEY( SDLK_SPACE )
DEF_SDL_KEY( SDLK_EXCLAIM )
DEF_SDL_KEY( SDLK_QUOTEDBL )
DEF_SDL_KEY( SDLK_HASH )
DEF_SDL_KEY( SDLK_DOLLAR )
DEF_SDL_KEY( SDLK_AMPERSAND )
DEF_SDL_KEY( SDLK_QUOTE )
DEF_SDL_KEY( SDLK_LEFTPAREN )
DEF_SDL_KEY( SDLK_RIGHTPAREN )
DEF_SDL_KEY( SDLK_ASTERISK )
DEF_SDL_KEY( SDLK_PLUS )
DEF_SDL_KEY( SDLK_COMMA )
DEF_SDL_KEY( SDLK_MINUS )
DEF_SDL_KEY( SDLK_PERIOD )
DEF_SDL_KEY( SDLK_SLASH )
DEF_SDL_KEY( SDLK_0 )
DEF_SDL_KEY( SDLK_1 )
DEF_SDL_KEY( SDLK_2 )
DEF_SDL_KEY( SDLK_3 )
DEF_SDL_KEY( SDLK_4 )
DEF_SDL_KEY( SDLK_5 )
DEF_SDL_KEY( SDLK_6 )
DEF_SDL_KEY( SDLK_7 )
DEF_SDL_KEY( SDLK_8 )
DEF_SDL_KEY( SDLK_9 )
DEF_SDL_KEY( SDLK_COLON )
DEF_SDL_KEY( SDLK_SEMICOLON )
DEF_SDL_KEY( SDLK_LESS )
DEF_SDL_KEY( SDLK_EQUALS )
DEF_SDL_KEY( SDLK_GREATER )
DEF_SDL_KEY( SDLK_QUESTION )
DEF_SDL_KEY( SDLK_AT )
//DEF_SDL_KEY(  )
//DEF_SDL_KEY( Skip uppercase letters )
//DEF_SDL_KEY(  )
DEF_SDL_KEY( SDLK_LEFTBRACKET )
DEF_SDL_KEY( SDLK_BACKSLASH )
DEF_SDL_KEY( SDLK_RIGHTBRACKET )
DEF_SDL_KEY( SDLK_CARET )
DEF_SDL_KEY( SDLK_UNDERSCORE )
DEF_SDL_KEY( SDLK_BACKQUOTE )
DEF_SDL_KEY( SDLK_a )
DEF_SDL_KEY( SDLK_b )
DEF_SDL_KEY( SDLK_c )
DEF_SDL_KEY( SDLK_d )
DEF_SDL_KEY( SDLK_e )
DEF_SDL_KEY( SDLK_f )
DEF_SDL_KEY( SDLK_g )
DEF_SDL_KEY( SDLK_h )
DEF_SDL_KEY( SDLK_i )
DEF_SDL_KEY( SDLK_j )
DEF_SDL_KEY( SDLK_k )
DEF_SDL_KEY( SDLK_l )
DEF_SDL_KEY( SDLK_m )
DEF_SDL_KEY( SDLK_n )
DEF_SDL_KEY( SDLK_o )
DEF_SDL_KEY( SDLK_p )
DEF_SDL_KEY( SDLK_q )
DEF_SDL_KEY( SDLK_r )
DEF_SDL_KEY( SDLK_s )
DEF_SDL_KEY( SDLK_t )
DEF_SDL_KEY( SDLK_u )
DEF_SDL_KEY( SDLK_v )
DEF_SDL_KEY( SDLK_w )
DEF_SDL_KEY( SDLK_x )
DEF_SDL_KEY( SDLK_y )
DEF_SDL_KEY( SDLK_z )
DEF_SDL_KEY( SDLK_DELETE )
#if !BX_WITH_SDL2
#ifndef BX_ANDROID
DEF_SDL_KEY( SDLK_WORLD_0 )
DEF_SDL_KEY( SDLK_WORLD_1 )
DEF_SDL_KEY( SDLK_WORLD_2 )
DEF_SDL_KEY( SDLK_WORLD_3 )
DEF_SDL_KEY( SDLK_WORLD_4 )
DEF_SDL_KEY( SDLK_WORLD_5 )
DEF_SDL_KEY( SDLK_WORLD_6 )
DEF_SDL_KEY( SDLK_WORLD_7 )
DEF_SDL_KEY( SDLK_WORLD_8 )
DEF_SDL_KEY( SDLK_WORLD_9 )
DEF_SDL_KEY( SDLK_WORLD_10 )
DEF_SDL_KEY( SDLK_WORLD_11 )
DEF_SDL_KEY( SDLK_WORLD_12 )
DEF_SDL_KEY( SDLK_WORLD_13 )
DEF_SDL_KEY( SDLK_WORLD_14 )
DEF_SDL_KEY( SDLK_WORLD_15 )
DEF_SDL_KEY( SDLK_WORLD_16 )
DEF_SDL_KEY( SDLK_WORLD_17 )
DEF_SDL_KEY( SDLK_WORLD_18 )
DEF_SDL_KEY( SDLK_WORLD_19 )
DEF_SDL_KEY( SDLK_WORLD_20 )
DEF_SDL_KEY( SDLK_WORLD_21 )
DEF_SDL_KEY( SDLK_WORLD_22 )
DEF_SDL_KEY( SDLK_WORLD_23 )
DEF_SDL_KEY( SDLK_WORLD_24 )
DEF_SDL_KEY( SDLK_WORLD_25 )
DEF_SDL_KEY( SDLK_WORLD_26 )
DEF_SDL_KEY( SDLK_WORLD_27 )
DEF_SDL_KEY( SDLK_WORLD_28 )
DEF_SDL_KEY( SDLK_WORLD_29 )
DEF_SDL_KEY( SDLK_WORLD_30 )
DEF_SDL_KEY( SDLK_WORLD_31 )
DEF_SDL_KEY( SDLK_WORLD_32 )
DEF_SDL_KEY( SDLK_WORLD_33 )
DEF_SDL_KEY( SDLK_WORLD_34 )
DEF_SDL_KEY( SDLK_WORLD_35 )
DEF_SDL_KEY( SDLK_WORLD_36 )
DEF_SDL_KEY( SDLK_WORLD_37 )
DEF_SDL_KEY( SDLK_WORLD_38 )
DEF_SDL_KEY( SDLK_WORLD_39 )
DEF_SDL_KEY( SDLK_WORLD_40 )
DEF_SDL_KEY( SDLK_WORLD_41 )
DEF_SDL_KEY( SDLK_WORLD_42 )
DEF_SDL_KEY( SDLK_WORLD_43 )
DEF_SDL_KEY( SDLK_WORLD_44 )
DEF_SDL_KEY( SDLK_WORLD_45 )
DEF_SDL_KEY( SDLK_WORLD_46 )
DEF_SDL_KEY( SDLK_WORLD_47 )
DEF_SDL_KEY( SDLK_WORLD_48 )
DEF_SDL_KEY( SDLK_WORLD_49 )
DEF_SDL_KEY( SDLK_WORLD_50 )
DEF_SDL_KEY( SDLK_WORLD_51 )
DEF_SDL_KEY( SDLK_WORLD_52 )
DEF_SDL_KEY( SDLK_WORLD_53 )
DEF_SDL_KEY( SDLK_WORLD_54 )
DEF_SDL_KEY( SDLK_WORLD_55 )
DEF_SDL_KEY( SDLK_WORLD_56 )
DEF_SDL_KEY( SDLK_WORLD_57 )
DEF_SDL_KEY( SDLK_WORLD_58 )
DEF_SDL_KEY( SDLK_WORLD_59 )
DEF_SDL_KEY( SDLK_WORLD_60 )
DEF_SDL_KEY( SDLK_WORLD_61 )
DEF_SDL_KEY( SDLK_WORLD_62 )
DEF_SDL_KEY( SDLK_WORLD_63 )
DEF_SDL_KEY( SDLK_WORLD_64 )
DEF_SDL_KEY( SDLK_WORLD_65 )
DEF_SDL_KEY( SDLK_WORLD_66 )
DEF_SDL_KEY( SDLK_WORLD_67 )
DEF_SDL_KEY( SDLK_WORLD_68 )
DEF_SDL_KEY( SDLK_WORLD_69 )
DEF_SDL_KEY( SDLK_WORLD_70 )
DEF_SDL_KEY( SDLK_WORLD_71 )
DEF_SDL_KEY( SDLK_WORLD_72 )
DEF_SDL_KEY( SDLK_WORLD_73 )
DEF_SDL_KEY( SDLK_WORLD_74 )
DEF_SDL_KEY( SDLK_WORLD_75 )
DEF_SDL_KEY( SDLK_WORLD_76 )
DEF_SDL_KEY( SDLK_WORLD_77 )
DEF_SDL_KEY( SDLK_WORLD_78 )
DEF_SDL_KEY( SDLK_WORLD_79 )
DEF_SDL_KEY( SDLK_WORLD_80 )
DEF_SDL_KEY( SDLK_WORLD_81 )
DEF_SDL_KEY( SDLK_WORLD_82 )
DEF_SDL_KEY( SDLK_WORLD_83 )
DEF_SDL_KEY( SDLK_WORLD_84 )
DEF_SDL_KEY( SDLK_WORLD_85 )
DEF_SDL_KEY( SDLK_WORLD_86 )
DEF_SDL_KEY( SDLK_WORLD_87 )
DEF_SDL_KEY( SDLK_WORLD_88 )
DEF_SDL_KEY( SDLK_WORLD_89 )
DEF_SDL_KEY( SDLK_WORLD_90 )
DEF_SDL_KEY( SDLK_WORLD_91 )
DEF_SDL_KEY( SDLK_WORLD_92 )
DEF_SDL_KEY( SDLK_WORLD_93 )
DEF_SDL_KEY( SDLK_WORLD_94 )
DEF_SDL_KEY( SDLK_WORLD_95 )
#endif
DEF_SDL_KEY( SDLK_KP0 )
DEF_SDL_KEY( SDLK_KP1 )
DEF_SDL_KEY( SDLK_KP2 )
DEF_SDL_KEY( SDLK_KP3 )
DEF_SDL_KEY( SDLK_KP4 )
DEF_SDL_KEY( SDLK_KP5 )
DEF_SDL_KEY( SDLK_KP6 )
DEF_SDL_KEY( SDLK_KP7 )
DEF_SDL_KEY( SDLK_KP8 )
DEF_SDL_KEY( SDLK_KP9 )
#else
#define SDLK_WORLD_20 180
#define SDLK_WORLD_63 223
#define SDLK_WORLD_68 228
#define SDLK_WORLD_86 246
#define SDLK_WORLD_92 252
DEF_SDL_KEY( SDLK_WORLD_20 )
DEF_SDL_KEY( SDLK_WORLD_63 )
DEF_SDL_KEY( SDLK_WORLD_68 )
DEF_SDL_KEY( SDLK_WORLD_86 )
DEF_SDL_KEY( SDLK_WORLD_92 )
DEF_SDL_KEY( SDLK_KP_0 )
DEF_SDL_KEY( SDLK_KP_1 )
DEF_SDL_KEY( SDLK_KP_2 )
DEF_SDL_KEY( SDLK_KP_3 )
DEF_SDL_KEY( SDLK_KP_4 )
DEF_SDL_KEY( SDLK_KP_5 )
DEF_SDL_KEY( SDLK_KP_6 )
DEF_SDL_KEY( SDLK_KP_7 )
DEF_SDL_KEY( SDLK_KP_8 )
DEF_SDL_KEY( SDLK_KP_9 )
#endif
DEF_SDL_KEY( SDLK_KP_PERIOD )
DEF_SDL_KEY( SDLK_KP_DIVIDE )
DEF_SDL_KEY( SDLK_KP_MULTIPLY )
DEF_SDL_KEY( SDLK_KP_MINUS )
DEF_SDL_KEY( SDLK_KP_PLUS )
DEF_SDL_KEY( SDLK_KP_ENTER )
DEF_SDL_KEY( SDLK_KP_EQUALS )
DEF_SDL_KEY( SDLK_UP )
DEF_SDL_KEY( SDLK_DOWN )
DEF_SDL_KEY( SDLK_RIGHT )
DEF_SDL_KEY( SDLK_LEFT )
DEF_SDL_KEY( SDLK_INSERT )
DEF_SDL_KEY( SDLK_HOME )
DEF_SDL_KEY( SDLK_END )
DEF_SDL_KEY( SDLK_PAGEUP )
DEF_SDL_KEY( SDLK_PAGEDOWN )
DEF_SDL_KEY( SDLK_F1 )
DEF_SDL_KEY( SDLK_F2 )
DEF_SDL_KEY( SDLK_F3 )
DEF_SDL_KEY( SDLK_F4 )
DEF_SDL_KEY( SDLK_F5 )
DEF_SDL_KEY( SDLK_F6 )
DEF_SDL_KEY( SDLK_F7 )
DEF_SDL_KEY( SDLK_F8 )
DEF_SDL_KEY( SDLK_F9 )
DEF_SDL_KEY( SDLK_F10 )
DEF_SDL_KEY( SDLK_F11 )
DEF_SDL_KEY( SDLK_F12 )
DEF_SDL_KEY( SDLK_F13 )
DEF_SDL_KEY( SDLK_F14 )
DEF_SDL_KEY( SDLK_F15 )
#if !BX_WITH_SDL2
DEF_SDL_KEY( SDLK_NUMLOCK )
DEF_SDL_KEY( SDLK_SCROLLOCK )
#else
DEF_SDL_KEY( SDLK_NUMLOCKCLEAR )
DEF_SDL_KEY( SDLK_SCROLLLOCK )
#endif
DEF_SDL_KEY( SDLK_CAPSLOCK )
DEF_SDL_KEY( SDLK_RSHIFT )
DEF_SDL_KEY( SDLK_LSHIFT )
DEF_SDL_KEY( SDLK_RCTRL )
DEF_SDL_KEY( SDLK_LCTRL )
DEF_SDL_KEY( SDLK_RALT )
DEF_SDL_KEY( SDLK_LALT )
#if !BX_WITH_SDL2
DEF_SDL_KEY( SDLK_RMETA )
DEF_SDL_KEY( SDLK_LMETA )
DEF_SDL_KEY( SDLK_LSUPER )
DEF_SDL_KEY( SDLK_RSUPER )
DEF_SDL_KEY( SDLK_PRINT )
#else
DEF_SDL_KEY( SDLK_RGUI )
DEF_SDL_KEY( SDLK_LGUI )
DEF_SDL_KEY( SDLK_PRINTSCREEN )
#endif
DEF_SDL_KEY( SDLK_MODE )
DEF_SDL_KEY( SDLK_HELP )
DEF_SDL_KEY( SDLK_SYSREQ )
DEF_SDL_KEY( SDLK_MENU )
DEF_SDL_KEY( SDLK_POWER )
DEF_SDL_KEY( SDLK_UNDO )
#if !BX_WITH_SDL2
DEF_SDL_KEY( SDLK_COMPOSE )
DEF_SDL_KEY( SDLK_BREAK )
DEF_SDL_KEY( SDLK_EURO )
#endif
