const { unlink } = require('fs');

unlink('hello.txt', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File deleted!');
});
