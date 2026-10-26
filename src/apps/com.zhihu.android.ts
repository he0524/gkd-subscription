import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[id="com.zhihu.android:id/btn_skip"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12707641',
        'https://i.gkd.li/import/12899263',
        'https://i.gkd.li/import/13070251',
        'https://i.gkd.li/import/12841423',
        'https://i.gkd.li/import/12883329',
        'https://i.gkd.li/import/12981146',
      ],
      order: -1,
    },
    {
      key: 1,
      name: '关闭广告弹窗',
      desc: '点击 关闭广告按钮 之后出现的广告弹窗',
      activityIds: [
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules:
        '@FrameLayout ImageView + TextView[text*=`虚假广告`][id=`com.zhihu.android:id/tv_content`]',
      enable: false,
    },
    {
      key: 2,
      name: '关闭广告原因',
      desc: '点击 关闭广告按钮 之后出现的选择原因',
      activityIds: 'com.zhihu.android.ContentActivity',
      rules: [
        '[id=`com.zhihu.android:id/confirm_uninterest`]',
        '[id=`com.zhihu.android:id/revert_uninterest`] <n * + [id=`com.zhihu.android:id/reason_container`] > [id=`com.zhihu.android:id/uninterest_reason`]',
      ],
      enable: false,
    },
    {
      key: 3,
      name: '关闭推荐',
      desc: '关闭回答底部其他回答',
      activityIds: 'com.zhihu.android.mix.activity.ContentMixProfileActivity',
      rules: [
        'TextView + View + TextView + TextView[text$=`评论`][text*=`赞同`] + View',
      ],
      enable: false,
    },
    {
      key: 5,
      name: '分段广告-推荐页广告卡片',
      desc: '赚稿费广告卡片,盐选推荐广告,知乎学课堂,汽车广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[id="com.zhihu.android:id/content"] >2 TextView[text="不感兴趣"][id="com.zhihu.android:id/title"]',
        },
        {
          key: 1,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            'TextView[text=`内容质量差`][id=`com.zhihu.android:id/tv_content`]',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]',
        },
        {
          key: 3,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[id=null][clickable=true] -n TextView[text*=`广告`][index=0]',
        },
      ],
      enable: false,
    },
    {
      key: 6,
      name: '分段广告-问题-回答列表-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.ContentActivity',
          matches: '@ImageView[clickable=true] -n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849671',
        },
        {
          key: 1,
          activityIds: 'com.zhihu.android.ContentActivity',
          matches:
            'ImageView[id=null] + TextView[text!=null][id=null] + ViewGroup > ImageView[clickable=true]',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.ContentActivity',
          matches: '@ImageView[clickable=true] -3 * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849442',
        },
        {
          key: 90,
          preKeys: [0],
          activityIds: 'com.zhihu.android.ContentActivity',
          matches: '@[clickable=true] >3 [text="内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13849689',
        },
      ],
      enable: false,
    },
    {
      key: 7,
      name: '回答底部评论顶部的任意广告推荐',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@Image + TextView[text$=`的广告`]',
        },
        {
          key: 1,
          matches:
            'TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12864109',
        },
        {
          key: 2,
          activityIds: [
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
          ],
          matches: 'TextView[text="查看详情"] + TextView[text="×"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647617',
            'https://i.gkd.li/import/12647659',
          ],
        },
        {
          key: 3,
          matches: 'TextView[text*=`赞同`][text*=`评论`] + TextView[text=`×`]',
        },
        {
          key: 4,
          matches: 'TextView[text*=`回答`][text*=`关注`] + TextView[text=`×`]',
        },
        {
          key: 6,
          matches: 'TextView[text$=`的广告`] - Image[id=null]',
        },
        {
          key: 8,
          matches: 'TextView[text*=`点赞`][text*=`的回答`] +2 Image[id=null]',
        },
        {
          key: 9,
          matches:
            'TextView[text=""] + Image[text=""] + TextView[text="​"] + Image[id=null][clickable=true]',
        },
        {
          key: 10,
          matches:
            '@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12647525'],
        },
        {
          preKeys: [10],
          key: 100,
          name: '反馈弹窗-点击“不感兴趣”',
          matches:
            '[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/import/12647541'],
        },
      ],
      enable: false,
    },
    {
      key: 8,
      name: '关闭首页广告',
      activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
      rules: '[id=`com.zhihu.android:id/tv_ad_close`]',
      enable: false,
    },
    {
      key: 9,
      name: '推荐页-顶部广告',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/tv_ad_tag"] + [id="com.zhihu.android:id/img_close_focus"]',
      ],
      enable: false,
    },
    {
      enable: false,
      key: 10,
      name: '推送通知弹窗',
      desc: '推送通知弹窗-点击x按钮',
      activityIds: 'com.zhihu.android.app.ui.dialog.d',
      rules: [
        'TextView[id="com.zhihu.android:id/guide_title"] - ImageView[id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647583'],
    },
    {
      enable: false,
      key: 11,
      name: '会员页面-月卡红包',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/floating_img"] + ImageView[id="com.zhihu.android:id/floating_close_btn"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647421'],
    },
    {
      key: 12,
      name: '会员页面-广告弹窗',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12707676'],
      enable: false,
    },
    {
      enable: false,
      key: 101,
      name: '问题回答-自动展开',
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12647688',
        'https://i.gkd.li/import/12707687',
      ],
    },
  ],
});
