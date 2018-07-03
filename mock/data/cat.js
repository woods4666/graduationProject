const fs = require('fs');

const randomAry = [3544,3549,3552]
for (let i = 0; i < randomAry.length; i++) {
    let curData = fs.readFileSync(`./${randomAry[i]}.json`);
    curData = JSON.parse(curData);
    curData.forEach(item => {
        item.categoryId = randomAry[i]
    });
    fs.writeFileSync(`./${randomAry[i]}.json`,JSON.stringify(curData));
}   