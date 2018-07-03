const fs = require('fs');

const randomAry = [2868,2870,2871,2875,2876,2877,2879,2881,2884,2885,2895,2898,2902,2905,2906,2907,3333,3433,3439,3458,3517,3528,3529,3530,3531,3532,3576,3587,3595]
for (let i = 0; i < randomAry.length; i++) {
    let curData = fs.readFileSync(`./${randomAry[i]}.json`);
    curData = JSON.parse(curData);
    curData.forEach(item => {
        item.categoryId = randomAry[i]
    });
    fs.writeFileSync(`./${randomAry[i]}.json`,JSON.stringify(curData));
}