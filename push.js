var push = require('web-push')

let vapidKeys = {
  publicKey: 'BB0qbereDjQyDGo5GNfNExawk8ZDNk8iwU99coqXaadXCDJ5UZLPIkDgZtsUWbFanTxWoqGWs8QAj-AgHZTq-Bo',
  privateKey: '2uIo4qsMkEKJLHU4UX-JnKsL_mf6gkSMtwVniAcRLHI'
}

push.setVapidDetails('mailto:test@code.co.kr', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dYEXVfrrdh8:APA91bHFNyugKHYh9iDv6uOebcjB44NC9kz1fmYMoRmUvVb5Ih-fFjUJQ1tA9gZnkHBcgqElLxXai_rOIY-k0iXTvJmbDcCCY4XJt5rJk-iujPyvYQDPuuqcN9n4eyNW-Ii2zjJwG--2", "expirationTime": null, "keys": { "p256dh": "BMN2mc0wbNEEbS8e5wS1pslOW1DV0YFJYUQazbCRe2S0MD-cesWuCdNxfd5FJ6o1f03MxASG2vv-RJUiF38QyGY", "auth": "cOj_weAsxjxD-mRv3pDnjw" } }
push.sendNotification(sub, 'test message')