var push = require('web-push')

let vapidKeys = {
  publicKey: 'BB0qbereDjQyDGo5GNfNExawk8ZDNk8iwU99coqXaadXCDJ5UZLPIkDgZtsUWbFanTxWoqGWs8QAj-AgHZTq-Bo',
  privateKey: '2uIo4qsMkEKJLHU4UX-JnKsL_mf6gkSMtwVniAcRLHI'
}

push.setVapidDetails('mailto:test@code.co.kr', vapidKeys.publicKey, vapidKeys.privateKey)

let sub =
  { "endpoint": "https://fcm.googleapis.com/fcm/send/cmW0dTtNDlc:APA91bHdhgDa_sKr0eiZhaXPTZxaVul6zDww8MV7DOqf6f8leRvlMKq5ZFu4FoZ8bJkr8bSa_9F3LIj77jm-fQfNkzBqCz2XO2_pyLB9c8YHMOUtXKdEr6im81YQs3V2T4PJ65t2HOuJ", "expirationTime": null, "keys": { "p256dh": "BMyA0Syv2awUMeWHealMiBRvx8Yu-H65SXw1MfJR_amOYNY_yxxkCxLL4havQSr1U06kZEQfen6iH8napFApXJ4", "auth": "o20wRrJOjWchdiK4bPQ-0g" } }
push.sendNotification(sub, JSON.stringify({ body: 'test message', title: 'test', link: 'https://www.naver.com' }))