const { appendFile } = require('fs');

const newContent = '\nThis is some new text';

appendFile('hi.txt', newContent, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Content written!');
});
