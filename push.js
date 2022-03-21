var push = require('web-push')

let vapidKeys = {
  publicKey: 'BB0qbereDjQyDGo5GNfNExawk8ZDNk8iwU99coqXaadXCDJ5UZLPIkDgZtsUWbFanTxWoqGWs8QAj-AgHZTq-Bo',
  privateKey: '2uIo4qsMkEKJLHU4UX-JnKsL_mf6gkSMtwVniAcRLHI'
}

push.setVapidDetails('mailto:test@code.co.kr', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/f0pCWx97ysw:APA91bG1kGejfVW5opynXoe3gEtanAdIrD25SHOvJ_pjlR8Ftw5cQMQuXuVC9gQmG-wSrMtzaSl9ZvX6zSUxU09A-aatF28xSTFujWq_m6A42siSS7QJnfSWSGRunxVZhsPN2STlwq3q", "expirationTime": null, "keys": { "p256dh": "BA1vFiGLBSXfLXxEOY4MnzEygdKfsyyn1WP_-Mli1HAJKcnlf5VNag9Lw0x3ywMnr5sBZHnkGL0QuutIU7ipmMM", "auth": "xlNSsUvEmBR85OXwyytSzw" } }
push.sendNotification(sub, 'test message')