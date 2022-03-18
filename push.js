var push = require('web-push')

let vapidKeys = {
  publicKey: 'BB0qbereDjQyDGo5GNfNExawk8ZDNk8iwU99coqXaadXCDJ5UZLPIkDgZtsUWbFanTxWoqGWs8QAj-AgHZTq-Bo',
  privateKey: '2uIo4qsMkEKJLHU4UX-JnKsL_mf6gkSMtwVniAcRLHI'
}

push.setVapidDetails('mailto:test@code.co.kr', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}
push.sendNotification(sub, 'test message')