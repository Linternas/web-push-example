self.addEventListener('push', function (event) {

  console.log(event)
  console.log(event.data.text())

  const payload = JSON.parse(event.data.text());
  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      data: { link: payload.link },
      actions: [
        {
          actions: 'explore',
          title: 'Explore this new world',
          icon: 'iamges/checkmark.png'
        },
        {
          actions: 'close',
          title: 'Close',
          icon: 'images/xmark.png'
        }
      ]
    })
  );

  // self.registration.sendNotification('test message', {})

  // var option = {
  //   body: 'This notification was generated from a push!',
  //   icon: 'images/example.png',
  //   vibrate: [100, 50, 100],
  //   data: {
  //     dateOfArrival: Date.now(),
  //     primaryKey: '2'
  //   },
  //   actions: [
  //     {
  //       actions: 'explore',
  //       title: 'Explore this new world',
  //       icon: 'iamges/checkmark.png'
  //     },
  //     {
  //       actions: 'close',
  //       title: 'Close',
  //       icon: 'images/xmark.png'
  //     }
  //   ]
  // }

  // console.log(e)

  // console.log(self)
  // console.log(self.registration)

  // e.waituntil(self.registration.showNotification('Hello world', option))
})