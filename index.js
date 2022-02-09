const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const File_Path = './data.json';

const makeCommit = n => {
    if(n===0) return simpleGit().push();
    const x = random.int(0,51);
    const y = random.int(0,6);
    const Date = moment().subtract(1, 'y').add(1,'d').add(x, 'w').add(y, 'd').format();
    const data = {
      date: Date
    }
    console.log(Date);
    jsonfile.writeFile(File_Path, data, () => {
        simpleGit().add([File_Path]).commit(Date, {'--date': Date },  makeCommit.bind(this, --n));
    });
}

makeCommit(500);