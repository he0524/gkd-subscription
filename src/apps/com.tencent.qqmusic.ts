import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.qqmusic",
  "name": "QQ音乐",
  "groups": [
    {
      "key": 1,
      "name": "广告卡片",
      "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
      "rules": [
        {
          "key": 2,
          "matches": "[text=\"广告\"] +n [desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13206534",
            "https://i.gkd.li/import/13797001"
          ]
        },
        {
          "key": 3,
          "matches": "@ImageView - ImageView - RelativeLayout >n [text=\"听歌入会赢绿钻\"||text=\"摇动点击广告跳转\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13206982",
            "https://i.gkd.li/import/13218134"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "首页-底部广告弹窗",
      "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity",
      "rules": "View[id=\"js_close_btn\"][desc=\"关闭\"]",
      "snapshotUrls": "https://i.gkd.li/import/13115121",
      "enable": false
    },
    {
      "key": 3,
      "name": "内测体验弹窗",
      "desc": "点击[不再提醒]",
      "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
      "rules": "[text=\"抢先体验\"] -2 [text=\"不再提醒\"]",
      "snapshotUrls": "https://i.gkd.li/import/13178485",
      "enable": false
    },
    {
      "key": 4,
      "name": "免流弹窗",
      "desc": "点击[流量够用]",
      "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
      "rules": "[text=\"流量够用\"]",
      "snapshotUrls": "https://i.gkd.li/import/13197868",
      "enable": false
    }
  ]
});
