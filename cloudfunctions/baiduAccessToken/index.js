const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 */
exports.main = async(event, context) => {
  let apiKey = 'MZ2ay9E73fbejF0NsbgapZr6',
    grantType = 'client_credentials',
    secretKey = 'D3icTGCIBjhYzS0GkbzIkjcH3TTaXcQd',
    url = `https://aip.baidubce.com/oauth/2.0/token`

  return new Promise(async(resolve, reject) => {
    try {
      let data = await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": 'client_credentials',
          "client_secret": 'D3icTGCIBjhYzS0GkbzIkjcH3TTaXcQd',
          "client_id": 'MZ2ay9E73fbejF0NsbgapZr6'
        },
        json: true
      })
      resolve({
        code: 0,
        data,
        info: '操作成功！'
      })
    } catch (error) {
      console.log(error)
      if (!error.code) reject(error)
      resolve(error)
    }
  })
}