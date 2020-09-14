var app = getApp();
import { send_photo } from "../../utils/util.js";

Page({
  data: {
    serverUri:'https://wangdy.xyz',
    file1: "",
    file2: "",
    file3: ""
  },
  formSubmit: function (e) {
    // , this.data.photos2, this.data.photos3
    var files = [this.data.file1, this.data.file2, this.data.file3]
    send_photo(this.data.serverUri, files, function (res) {
      console.log("res:",res)
    })
  },
  touchphoto: function (e) {
    var that = this
    var no = e.currentTarget.id;
    if (no == "1") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            file1: tempFilePaths
          })
          console.log("file1:",that.data.file1)
        }
      })
    } else if (no == "2") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            file2: tempFilePaths
          })
          console.log(that.data.file2)
        }
      })
    } else if (no == "3") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            file3: tempFilePaths
          })
          console.log(that.data.file3)
        }
      })
    }
  }
})