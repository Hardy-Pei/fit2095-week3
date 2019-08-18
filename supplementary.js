let fs = require('fs');

// let fileName = './index.html';
// fs.readFile(fileName, 'utf8', function(error, content) {
//     if (error) {
//         console.log("We got an error!!!" + error);
//     } else {
//         console.log("The content is:");
//         console.log(content);

//     }
// })

// let content = fs.readFileSync("index.html").toString();
// console.log(content);

// fs.mkdir('testDirName', function(error) {
//     if (error) {
//         console.log("An error has just occurred" + error);
//     } else {
//         console.log("Directory created ssuccessfully!");
//     }
// });

// fs.rmdir('testDirName', function(error) {
//     if (error) {
//         console.log("An error has just occurred" + error);
//     } else {
//         console.log("Directory created ssuccessfully!");
//     }
// });

// fs.open('testFile.txt', 'w', function (error) {
//     if (error) {
//         console.log("error!");

//     };
// });

// fs.rename('testFile.txt', 'hello.txt', function (error) {
//     if (error) {
//         console.log("error!");
//     };
// });

// for (let i = 0; i <10; i++) {
//     fs.appendFile('hello.txt', i+'\n', function(error) {
//         if (error) {
//             console.log("error!");
            
//         };
//     });
// };

// for (let i = 0; i <10; i++) {
//     fs.appendFileSync('hello.txt', i+'\n', function(error) {
//         if (error) {
//             console.log("error!");       
//         };
//     });
// };