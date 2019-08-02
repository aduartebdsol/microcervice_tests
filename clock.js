//OnInterval
var threeSecondInterval = function(){
  console.log("Another 3 seconds have gone by. What did you do in them?");
  const data = { branch: 'master' };
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Authorization": "token tig9ipRDb7GLbXGkQb0h5A",
        "Travis-api-version": "3",
        "Accept": "application/json",
    }
  };
  axios.post('https://api.travis-ci.org/repo/AlanGDC%2FOveractiveSeleniumExcercise/requests', {
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
setInterval(threeSecondInterval, 3000) //corre cada 10 min

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