const {createWorker} =require('tesseract.js');   

const worker = createWorker({    
  logger: m => console.log(m)
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://d2jaiao3zdxbzm.cloudfront.net/wp-content/uploads/figure-65.png');
  console.log("El texto es: "+text);
  await worker.terminate();
})();