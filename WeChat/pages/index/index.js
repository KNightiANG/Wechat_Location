//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myLatitude:'',
    myLongitude:'',
    mySpeed:'0.0',
    myLocationAccuracy: '0',
    myAltitude:'0',
    myVerticalAccuracy:'0',
    myHorizontalAccuracy:'0',
    lcoationInfo:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.getLocation({
      type: 'wgs84 ',
      altitude: true,
      success: function (res) {
        
          myLatitude= "经度：" + res.latitude,
          myLongitude= "纬度：" + res.longitude,
          mySpeed= "速度：" + res.speed,
          myLocationAccuracy= "位置精度：" + res.accuracy,
          myAltitude= "高度：" + res.altitude,
          myVerticalAccuracy= "垂直精度：" + res.verticalAccuracy,
          myHorizontalAccuracy= "水平精度：" + res.horizontalAccuracy
        
        
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
