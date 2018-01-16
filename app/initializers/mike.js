import { Promise } from 'rsvp';

export function initialize(app) {
  const { geolocation } = navigator;
  // app.deferReadiness(); // PAUSE
  
  let locPromise = typeof FastBoot !== 'undefined' ? Promise.resolve({ lat: 0, lng: 0}) : new Promise((res) => {
    // let timeout = setTimeout(rej, 5000);
    geolocation.getCurrentPosition((pos) => {
        let {
          coords: { latitude: lat, longitude: lng }
        } = pos; // let lat = pos.coords.latitude
        
        // do something with the container
        // clearTimeout(timeout);
        // debugger;
        // console.log('promise resolved');
        res({lat, lng});
        // app.advanceReadiness(); // UN-PAUSE
      });
    });
  app.register('data:location', locPromise, { instantiate: false });
}

export default {
  initialize
};
