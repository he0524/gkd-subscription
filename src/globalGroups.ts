import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    order: -1,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: -1,
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
      },
    ],
    apps: [
      {
        id: 'com.android.systemui',
        enable: false,
      },
      {
        id: 'com.android.settings',
        enable: false,
      },
      {
        id: 'com.miui.aod',
        enable: false,
      },
      {
        id: 'miui.systemui.plugin',
        enable: false,
      },
      {
        id: 'com.tencent.mm',
        enable: false,
      },
      {
        id: 'li.songe.gkd',
        enable: false,
      },
      {
        id: 'mark.via',
        enable: false,
      },
      {
        id: 'com.mycompany.app.soulbrowser',
        enable: false,
      },
      {
        id: 'com.mmbox.xbrowser',
        enable: false,
      },
      {
        id: 'info.muge.appshare',
        enable: false,
      },
      {
        id: 'net.csdn.csdnplus',
        enable: false,
      },
      {
        id: 'make.more.r2d2.cellular_z',
        enable: false,
      },
      {
        id: 'com.eco.global.app',
        enable: false,
      },
      {
        id: 'com.superrhino.rarering',
        enable: false,
      },
      {
        id: 'com.ksf.yyx',
        enable: false,
      },
      {
        id: 'com.cyl.musiccy.ou',
        enable: false,
      },
      {
        id: 'com.picacomic.fregata',
        enable: false,
      },
      {
        id: 'com.tencent.mobileqq',
        enable: false,
      },
      {
        id: 'cn.soulapp.android',
        enable: false,
      },
      {
        id: 'com.taptap',
        enable: false,
      },
      {
        id: 'com.dubox.drive',
        enable: false,
      },
      {
        id: 'dxwt.questionnaire.ui',
        enable: false,
      },
      {
        id: 'com.mfcloudcalculate.networkdisk',
        enable: false,
      },
      {
        id: 'com.dfsly.bbs',
        enable: false,
      },
      {
        id: 'com.chunqiu.ah',
        enable: false,
      },
      {
        id: 'gov.pianzong.androidnga',
        enable: false,
      },
      {
        id: 'com.tencent.mtt',
        enable: false,
      },
      {
        id: 'com.tencent.androidqqmail',
        enable: false,
      },
      {
        id: 'com.UCMobile',
        enable: false,
      },
      {
        id: 'com.upupoo.apu.mobile',
        enable: false,
      },
      {
        id: 'com.midea.vm.washer',
        enable: false,
      },
      {
        id: 'com.qiyi.video',
        enable: false,
      },
      {
        id: 'com.qiyi.video.lite',
        enable: false,
      },
      {
        id: 'com.hanweb.android.sdzwfw.activity',
        enable: false,
      },
      {
        id: 'com.shanghaionstar',
        enable: false,
      },
      {
        id: 'com.baidu.tieba',
        enable: false,
      },
      {
        id: 'com.byfen.market',
        enable: false,
      },
      {
        id: 'tv.danmaku.bili',
        enable: false,
      },
      {
        id: 'tv.danmaku.bilibilihd',
        enable: false,
      },
      {
        id: 'com.kuangxiangciweimao.novel',
        enable: false,
      },
      {
        id: 'cn.damai',
        enable: false,
      },
      {
        id: 'com.delicloud.app.smartoffice',
        enable: false,
      },
      {
        id: 'com.zlfcapp.batterymanager',
        enable: false,
      },
      {
        id: 'com.dianxinai.mobile',
        enable: false,
      },
      {
        id: 'com.didapinche.booking',
        enable: false,
      },
      {
        id: 'com.citiccard.mobilebank',
        enable: false,
      },
      {
        id: 'com.dongqiudi.news',
        enable: false,
      },
      {
        id: 'com.diershoubing.erbing',
        enable: false,
      },
      {
        id: 'com.feeyo.vz.pro.cdm',
        enable: false,
      },
      {
        id: 'com.fbank.mobile',
        enable: false,
      },
      {
        id: 'com.xpx365.projphoto',
        enable: false,
      },
      {
        id: 'com.huawei.browser',
        enable: false,
      },
      {
        id: 'com.huawei.himovie',
        enable: false,
      },
      {
        id: 'com.huawei.android.totemweather',
        enable: false,
      },
      {
        id: 'com.huawei.music',
        enable: false,
      },
      {
        id: 'com.android.mediacenter',
        enable: false,
      },
      {
        id: 'com.huawei.health',
        enable: false,
      },
      {
        id: 'com.huawei.android.thememanager',
        enable: false,
      },
      {
        id: 'com.handsgo.jiakao.android',
        enable: false,
      },
      {
        id: 'com.yek.android.kfc.activitys',
        enable: false,
      },
      {
        id: 'com.kkeji.news.client',
        enable: false,
      },
      {
        id: 'com.coolapk.market',
        enable: false,
      },
      {
        id: 'com.kugou.android',
        enable: false,
      },
      {
        id: 'com.ecellsz.watch.guard',
        enable: false,
      },
      {
        id: 'com.hxak.liangongbao',
        enable: false,
      },
      {
        id: 'com.manmanbuy.bijia',
        enable: false,
      },
      {
        id: 'com.antfortune.wealth',
        enable: false,
      },
      {
        id: 'com.paokeji.yiqu',
        enable: false,
      },
      {
        id: 'com.motoband',
        enable: false,
      },
      {
        id: 'com.mostone.life',
        enable: false,
      },
      {
        id: 'com.nowcoder.app.florida',
        enable: false,
      },
      {
        id: 'com.xiaohu.olevodmobile',
        enable: false,
      },
      {
        id: 'com.qiekj.user',
        enable: false,
      },
      {
        id: 'com.gentle.ppcat',
        enable: false,
      },
      {
        id: 'com.tencent.tmgp.kgame.ppcr',
        enable: false,
      },
      {
        id: 'com.example.pptv',
        enable: false,
      },
      {
        id: 'cn.samsclub.app',
        enable: false,
      },
      {
        id: 'com.flyersoft.seekbooks',
        enable: false,
      },
      {
        id: 'com.mymoney',
        enable: false,
      },
      {
        id: 'com.taobao.taobao',
        enable: false,
      },
      {
        id: 'com.leixun.taofen8',
        enable: false,
      },
      {
        id: 'com.taobao.litetao',
        enable: false,
      },
      {
        id: 'com.tencent.qqlive',
        enable: false,
      },
      {
        id: 'com.tencent.qqsports',
        enable: false,
      },
      {
        id: 'com.qq.qcloud',
        enable: false,
      },
      {
        id: 'com.tencent.docs',
        enable: false,
      },
      {
        id: 'com.wacai365',
        enable: false,
      },
      {
        id: 'com.waimaiii.waimaiii',
        enable: false,
      },
      {
        id: 'cn.lezhi.speedtest',
        enable: false,
      },
      {
        id: 'com.netease.mobimail',
        enable: false,
      },
      {
        id: 'com.netease.mail',
        enable: false,
      },
      {
        id: 'com.example.maintenancemaster',
        enable: false,
      },
      {
        id: 'com.realtech.xiaocan',
        enable: false,
      },
      {
        id: 'com.xiaoenai.app',
        enable: false,
      },
      {
        id: 'com.craftvpn.craft',
        enable: false,
      },
      {
        id: 'com.xiaote',
        enable: false,
      },
      {
        id: 'moc.nauxuoyoaixoaix.www',
        enable: false,
      },
      {
        id: 'com.firebear.androil',
        enable: false,
      },
      {
        id: 'me.zhouzhuo810.zznote',
        enable: false,
      },
      {
        id: 'cn.wsds.gamemaster',
        enable: false,
      },
      {
        id: 'com.ky.medical.reference',
        enable: false,
      },
      {
        id: 'com.cmstop.shaoxing',
        enable: false,
      },
      {
        id: 'com.wwwscn.yuexingbao',
        enable: false,
      },
      {
        id: 'com.zgnet.eClass',
        enable: false,
      },
      {
        id: 'com.zhihu.android',
        enable: false,
      },
      {
        id: 'com.crirp.zhipu',
        enable: false,
      },
      {
        id: 'cn.mil.junhao',
        enable: false,
      },
    ],
  },
]);
