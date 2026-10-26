import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '开屏广告,任意界面切回APP开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="tv.danmaku.bili:id/count_down"][text^="跳"]',
      snapshotUrls: 'https://i.gkd.li/import/12705270',
      order: -1,
    },
    {
      key: 0,
      name: '评论区顶部公告横幅',
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
        'tv.danmaku.bili.MainActivityV2',
      ],
      rules:
        'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id="tv.danmaku.bili:id/close"][desc=`关闭`]',
      snapshotUrls: [
        'https://i.gkd.li/import/12785461',
        'https://i.gkd.li/import/12775156',
      ],
      enable: false,
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text*="青少年模式"] +n TextView[text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13746766',
      enable: false,
    },
    {
      key: 2,
      name: '动态推荐广告卡片',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      matchDelay: 5000,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://i.gkd.li/import/12700222',
        },
        {
          preKeys: 1,
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/import/12700243',
        },
      ],
      enable: false,
    },
    {
      enable: false,
      key: 4,
      name: '视频底部与评论区中间卡片式广告',
      desc: '需点击二次弹窗 屏蔽原因',
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          matches:
            'FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"] >n [id^="tv.danmaku.bili:id/more"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642260',
            'https://i.gkd.li/import/12705266',
            'https://i.gkd.li/import/12776568',
            'https://i.gkd.li/import/12707070',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '[id="tv.danmaku.bili:id/dislike_reasons"] @RelativeLayout > [text*="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642261',
            'https://i.gkd.li/import/13495649',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '更新弹窗',
      actionMaximum: 1,
      matchDelay: 5000,
      activityIds: [
        'com.bilibili.app.preferences.BiliPreferencesActivity',
        'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
        'tv.danmaku.bili.MainActivityV2',
      ],
      rules: [
        {
          key: 1,
          matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12649689',
            'https://i.gkd.li/import/13212209',
            'https://i.gkd.li/import/13228977',
            'https://i.gkd.li/import/13334963',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 7,
      name: '视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      rules: ['[id="tv.danmaku.bili:id/toast_x"]'],
      snapshotUrls: [
        'https://i.gkd.li/import/12892611',
        'https://i.gkd.li/import/13308344',
        'https://i.gkd.li/import/13538048',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
      ],
      enable: false,
    },
    {
      key: 8,
      name: '直播间卡片广告',
      desc: '直播间底部售卖卡片-点击右上角x',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: '[id="tv.danmaku.bili:id/shopping_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13200549',
      enable: false,
    },
    {
      enable: false,
      key: 9,
      name: '请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'tv.danmaku.bili.MainActivityV2',
        'com.bilibili.video.story.StoryTransparentActivity',
      ],
      rules: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13229159',
        'https://i.gkd.li/import/13614090',
      ],
    },
    {
      enable: false,
      key: 10,
      name: '首页-推荐视频卡片广告',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右下角菜单按钮',
          matches:
            '[id="tv.danmaku.bili:id/ad_tint_frame"] [id="tv.danmaku.bili:id/more"]',
          snapshotUrls: 'https://i.gkd.li/import/13256570',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不感兴趣]',
          matches: '@RelativeLayout > [text$="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13256605',
            'https://i.gkd.li/import/13625309',
            'https://i.gkd.li/import/13742257',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '个性化内容推荐弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules:
        '[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13448905',
      enable: false,
    },
  ],
});
