//OnInterval
var threeSecondInterval = function(){
  console.log("Another 3 seconds have gone by. What did you do in them? eh?");
  const data = { branch: 'master' };
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Authorization": "token 3fchQEwR410rbhTo9Lkn2w",
        "Travis-api-version": "3",
        "Accept": "application/json",
    }
  };
  axios.post('https://api.travis-ci.org/repo/aduartebdsol%2Fmicrocervice_tests/requests', {   
    request: data
  },axiosConfig)
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch((error) => {
    console.error(error)
  })
}
setInterval(threeSecondInterval, 900000) //corre cada 15 min

//For specific times, use a chron job
var fifteenSeconsAfterMinute = function() {
console.log("Another minute is gone forever. Hopefully, you made the most of it...");
}
const axios = require('axios')

var CronJob = require('cron').CronJob;
new CronJob({
cronTime: "15 * * * * *",//15 seconds after every minute
onTick: fifteenSeconsAfterMinute,
start: true,
timeZone: "America/Los_Angeles"
});