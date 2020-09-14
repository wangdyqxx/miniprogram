const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function send_photo(uri, data, successfun) {
  var that = this
  for (let i = 0; i < data.length; i++) {
    console.log("data:", data[i])
    wx.uploadFile({
      url: uri+"/tool/files/file",
      filePath: ""+data[i],
      name: "file",
      formData:{
        "key":"value",
      },
      success: function (res) {
        successfun(res)
      },
      fail: function (res) {
        console.log("fail:", res)
      },
      complete: function (res) {
        console.log("complete:", res)
      },
    })
  }
}

const _send_photo = send_photo
export { _send_photo as send_photo }
const _formatTime = formatTime
export { _formatTime as formatTime }


