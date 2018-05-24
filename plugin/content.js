var img_height = 32;
var img_width = 32;
var imageData;
var parsedImgData = new Float32Array(img_height*img_width*3);
var prediction;

var modelReady = false;
const model = new KerasJS.Model({
  // XXX Read this file path via chrome extension api
  filepath: 'chrome-extension://' + chrome.runtime.id + '/web-accessible-resources/model.bin',
});

function convertURIToImageData(URI) {
  return new Promise(function(resolve, reject) {
    if (URI == null) return reject();
    var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    image = new Image();
    image.addEventListener('load', function() {
      canvas.width = img_width;
      canvas.height = img_height;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    }, false);
    image.src = URI;
  });
}

function getImageDataUriFromUrl(url){
  return new Promise(function(resolve,reject){
    if(url.startsWith("data:image")){ // data uri
      resolve(url);
    }
    else{
      $.getImageData({
        url: url, 
        success: function(image){
          resolve(image.src);
        },
        server: "https://obscure-citadel-79502.herokuapp.com/"
      });
    }
  });
}

function parseImageData(imageData){
  for( var i = 0; i<imageData.data.length; i+= 4){
    parsedImgData[i+0] = imageData.data[i+2] - 103.939;
    parsedImgData[i+1] = imageData.data[i+1] - 116.779;
    parsedImgData[i+2] = imageData.data[i+0] - 123.68;
  }
  return parsedImgData;
}

function getPredictionFromUrl(url, img){
  var predictionPromise = new Promise(function(predictionResolve, predictionReject){
    var imageDataUriProxy = getImageDataUriFromUrl(url);
    imageDataUriProxy.then((imageData)=>{
      console.log("got image data uri: ", imageData);
      var imageCanvasData = convertURIToImageData(imageData);
      imageCanvasData.then((imageDataURI)=>{
        console.log("got image data bitmap: ", imageDataURI);
        var parsedImgData = parseImageData(imageDataURI);
        const inputData = {
          input: parsedImgData 
        }
        model.predict(inputData).then(out=>{
            console.log(inputData);
            console.log("got prediction", out);
            predictionResolve([out.output, img]);
        });
      });
    });
  });
  return predictionPromise;
}

function classifyImage(image)
{
  url = image.src;
  var predictionPromise = getPredictionFromUrl(url, image);
  predictionPromise.then((out)=>{
    var predictedClass = out[0];
    var img = out[1];
    if(predictedClass[0] == 0){
      img.style.filter = "none";
    }
  });
}

// Iterate over all the images
var images = document.getElementsByTagName('img');
model
.ready()
.then(() => {
  modelReady = true;
  for (var imgIndex = 0; imgIndex < images.length; imgIndex++) {
    // Add blur class
    let image = images[imgIndex];
    image.style.filter = "blur(10px)";
    classifyImage(images[imgIndex])
  }
});

function mutHandler(summary){
  console.log(summary);
  model
  .ready()
  .then(() => {
    modelReady = true;
    summary[0].added.forEach(function(image){
      // Add blur class
      image.style.filter = "blur(10px)";
      classifyImage(image)
    })
  });
}

var observer = new MutationSummary({
  callback: mutHandler,
  queries: [{ 
    element: 'img' 
  }]
});