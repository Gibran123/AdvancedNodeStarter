function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!!!'), time);
  });
}

sleep(1000)
  .then(() => {
    throw new Error('Hey there')
    console.log('Promise 1 done')
    console.log('adasda')
    return sleep(1000);
  })
  .then(() => {
    console.log('Promise 2 done')
    return sleep(1000);
  }, (err => console.error('===============>', err)))

console.log('==============>');