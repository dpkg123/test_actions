var Config = {

  //DATA関連 (100未満）
  DATA_CLEAR_WEB_CACHE        : 1,
  DATA_REMOVE_ASSET           : 2,

  DATA_CALL_TOUCHES_BEGIN     : 5,
  DATA_CALL_TOUCHES_MOVE      : 6,
  DATA_CALL_TOUCHES_END       : 7,

  DATA_AWAKE_PURCHASE         : 10,
  DATA_PURCHASE_ITEM          : 11,
  DATA_RETRY_PURCHASE_ITEM    : 12,

  DATA_GET_SNS_USER_ID        : 20,
  DATA_GET_APP_VERSION        : 21,
  DATA_GET_DOWNLOAD_CONFIG    : 22,
  DATA_GET_DEVICE_INFO        : 23,
  DATA_CLOSE_APP              : 25,

  DATA_GET_FONT               : 30,
  DATA_GET_QUEST_RESULT_JSON  : 40,
  DATA_OPEN_URL               : 50,

  DATA_GET_BASE64             : 60,

  DATA_SET_CLIPBOARD          : 62,

  DATA_GET_REWARD             : 70,
  DATA_DELETE_REWARD          : 71,

  DATA_OPEN_EDIT_BOX          : 90,


  //SOUND関連 (100番台）
  SOUND_BGM_PLAY              : 100,
  SOUND_BGM_STOP              : 101,
  SOUND_BGM_RESUME            : 102,
  SOUND_BGM_PAUSE             : 103,
  SOUND_BGM_SET_VOL           : 104,
  SOUND_BGM_GET_VOL           : 105,

  SOUND_SE_PLAY               : 110,
  SOUND_SE_STOP               : 111,
  SOUND_SE_SET_VOL            : 114,
  SOUND_SE_GET_VOL            : 115,

  SOUND_VO_PLAY               : 120,
  SOUND_VO_STOP               : 121,
  SOUND_VO_SET_VOL            : 124,
  SOUND_VO_GET_VO             : 125,


  //SCENE関連 (200番台 or 300番台）
  SCENE_PUSH_WEBVIEW          : 201,
  SCENE_POP_WEBVIEW           : 202,

  SCENE_PUSH_LOADING          : 211,
  SCENE_PUSH_DOWNLOAD         : 221,

  SCENE_PUSH_GACHA            : 231,
  SCENE_PUSH_EVOLUTION        : 241,
  SCENE_PUSH_MEMORIA_COMPOSE  : 251,
  SCENE_PUSH_STORY            : 261,

  SCENE_PUSH_QUEST            : 271,
  SCENE_POP_QUEST             : 272,
  SCENE_PUSH_ARENA            : 281,
  SCENE_POP_ARENA             : 282,

  SCENE_PUSH_CHAT             : 291,
  SCENE_POP_CHAT              : 292,

  SCENE_PUSH_TOP              : 301,
  SCENE_POP_TOP               : 302,

  SCENE_PUSH_ANOTHER_QUEST    : 341,
  SCENE_POP_ANOTHER_QUEST     : 342,
  SCENE_PLAY_ANOTHER_QUEST    : 343,

  SCENE_PUSH_MOVIE            : 351,
  SCENE_PUSH_MOVIE_CHAR       : 361,

  SCENE_PUSH_EVENT_TEST       : 371,


  //DISPLAY関連 (400番台）
  DISPLAY_SET_WEBVIEW_VISIBLE : 400,

  DISPLAY_CHANGE_BG           : 410,

  DISPLAY_ADD_L2D             : 420,
  DISPLAY_REMOVE_L2D          : 421,
  DISPLAY_PALY_L2D_MOTION     : 422,

  DISPLAY_ADD_MINI            : 430,
  DISPLAY_REMOVE_MINI         : 431,
  DISPLAY_PLAY_MINI_MOTION    : 432,
  DISPLAY_PLAY_MINI_EFFECT    : 433,
  DISPLAY_STOP_MINI_EFFECT    : 434,

  DISPLAY_ADD_MOVIE           : 440,

  DISPLAY_PLAY_COMPOSE_EFFECT : 450,
  DISPLAY_SHOW_COMPOSE_RESULT : 451,
  DISPLAY_HIDE_COMPOSE        : 452,

  DISPLAY_PLAY_COMPOSE_MAGIA  : 460,
  DISPLAY_PLAY_AWAKE_ABILITY  : 465,

  DISPLAY_PLAY_NORMAL_GACHA_TOP : 470,
  DISPLAY_STOP_NORMAL_GACHA_TOP : 471,

  DISPLAY_PLAY_MEMORIA_TOP : 490,
  DISPLAY_STOP_MEMORIA_TOP : 491,

  DISPLAY_PLAY_FORMATION      : 600,
  DISPLAY_STOP_FORMATION      : 601,

  DISPLAY_PLAY_WEEKLY_QUEST_TOP : 610,
  DISPLAY_STOP_WEEKLY_QUEST_TOP : 611,

  DISPLAY_PLAY_FORMATION_ENEMY : 620,
  DISPLAY_STOP_FORMATION_ENEMY : 621,

  //Notification関連（500番台）
  NOTI_GET_CONF_PNOTE        : 500,
  NOTI_AWAKE_PNOTE           : 501,
  NOTI_TURN_ON_PNOTE         : 502,
  NOTI_TURN_OFF_PNOTE        : 503,

  NOTI_GET_CONF_WEEKLY_QUEST : 510,
  NOTI_TURN_ON_WEEKLY_QUEST  : 511,
  NOTI_TURN_OFF_WEEKLY_QUEST : 512,

  NOTI_GET_CONF_AP_FULL      : 520,
  NOTI_TURN_ON_AP_FULL       : 521,
  NOTI_TURN_OFF_AP_FULL      : 522,
};
