import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.netdisk",
  "name": "百度网盘",
  "groups": [
    {
      "key": 1,
      "name": "活动弹窗",
      "desc": "关闭各种活动弹窗信息",
      "rules": [
        {
          "key": 1,
          "name": "一刻相册推广弹窗",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "matches": "[id=\"com.baidu.netdisk:id/cl_content\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642505"
          ]
        },
        {
          "key": 2,
          "name": "VIP弹窗",
          "activityIds": "com.baidu.netdisk.business.guide.dialog.lifeproduct.",
          "matches": "[id=\"com.baidu.netdisk:id/view_content_bg2\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12923937"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "首页banner广告",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": "[id=\"com.baidu.netdisk:id/banner_item_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12706544",
      "enable": false
    },
    {
      "key": 3,
      "name": "首页热门广告",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": "[id=\"com.baidu.netdisk:id/vf_content\"] + [id=\"com.baidu.netdisk:id/close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12706544",
      "enable": false
    },
    {
      "key": 4,
      "name": "我的页面-限时福利",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": "@TextView + [text=\"专属福利\"]",
      "snapshotUrls": "https://i.gkd.li/import/12706549",
      "enable": false
    },
    {
      "key": 5,
      "name": "相册页面-激活无限空间弹窗",
      "activityIds": "com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog",
      "rules": "@ImageView[id=\"com.baidu.netdisk:id/close_btn\"] + ImageView[id=\"com.baidu.netdisk:id/bg_image\"]",
      "snapshotUrls": "https://i.gkd.li/import/12648987",
      "enable": false
    },
    {
      "key": 6,
      "name": "更新弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text=\"立即更新\"] -n [text=\"下次再说\"]",
      "snapshotUrls": "https://i.gkd.li/import/12863984",
      "enable": false
    },
    {
      "key": 7,
      "name": "续费横幅提示",
      "desc": "关闭续费横幅提示",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": [
        {
          "matches": "View[desc=\"续费\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12924036"
        }
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 8,
      "name": "开启消息通知弹窗",
      "desc": "自动点击关闭",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": "ImageView[id=\"com.baidu.netdisk:id/dialog_cancel\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12923936"
      ]
    },
    {
      "enable": false,
      "key": 10,
      "name": "看视频免费享极速下载弹窗",
      "desc": "自动点击x按钮",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": "ViewGroup > [id=\"com.baidu.netdisk:id/background_image\"] +n [id=\"com.baidu.netdisk:id/iv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12783106"
    },
    {
      "key": 11,
      "name": "幸运券包弹窗",
      "desc": "自动点击关闭",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/tv_title\"][text^=\"恭喜获得\"] -3 ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13806852"
        }
      ],
      "enable": false
    }
  ]
});
