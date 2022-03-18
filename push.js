var push = require('web-push')

let vapidKeys = {
  publicKey: 'BB0qbereDjQyDGo5GNfNExawk8ZDNk8iwU99coqXaadXCDJ5UZLPIkDgZtsUWbFanTxWoqGWs8QAj-AgHZTq-Bo',
  privateKey: '2uIo4qsMkEKJLHU4UX-JnKsL_mf6gkSMtwVniAcRLHI'
}

push.setVapidDetails('mailto:test@code.co.kr', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/eKCdMEFydcQ:APA91bEI_ekSuDi0TAAjDJY5eiObu-ZlmvD-_zADjH_-r_LmmMmLiOAsimlwzRPKU9Bs5wMEuahlfvt4dX-zmEnOrOZIRiiqOa5Xype3RzJT58UciS68AxmdzAQDu0eqwNUrJZpvv7rc",
  "expirationTime": null,
  "keys": {
    "p256dh": "BLYkqJl4AeumWqoyeDbsH_OsAw3RXWRfeoCzBIvPJvEu_CoAdpfbT7Zm2R3ttEj7E4X-aLZpwSJ1SnBdD-yqZx0",
    "auth": "bxG_QL3BkZAo-i8VE6JFMw"
  }
}
push.sendNotification(sub, 'test message')