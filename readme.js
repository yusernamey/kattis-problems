//Script to loop trough folders and create readme.md for each folder with link to image.

const path = require('path');
const fs = require('fs');
const rootPath = path.join(__dirname, '');
let folderList = [];


fs.readdir(rootPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        if (fs.lstatSync(file).isDirectory()) {
            folderList.push(file);
            // console.log(folderList);
        }
    });
});

setTimeout(() => {
    folderList.forEach(function (folder) {
        let folderName = folder;
        let folderPath = path.join(__dirname, folderName);
        console.log(folderPath);
        fs.readdir(folderPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            if (folderName !== '.git') {
                let imageName = (files.filter(file => file.includes(".jpg") || file.includes(".JPG")));
                let readme = (files.filter(file => file.includes(".md")));
                let text = `![problem-image](https://github.com/yusernamey/kattis-problems/blob/main/${folderName}/${imageName})`;
                if (readme.length !== 0) {
                    console.log("already exists")
                    return;
                } else {
                    fs.writeFile(`${folderPath}/readme.md`, text, function (err) {
                        if (err) throw err ;
                        console.log('File is created successfully.');
                      });
                }
            }
        });
    })
}, 1500);
