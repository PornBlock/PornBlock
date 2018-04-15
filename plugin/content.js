var crossImgData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADDCAMAAABeUu/HAAAAkFBMVEX////AICa8AADAHiS/GyG/Fh2+Exu9AA++Dhe+DBW9AAn89fX25OX57O3++/u4AADmtLbip6nCKC+9AAbHREn67/DourzajI/OY2fDLzXrwsT35+jYh4rdlZjHQkfw0tTLVFnUeXzQa2/FNz3enJ703d/KT1TbkJPOYGTtycvUdnrOYmbKUlbemp3WgIPDMjhgtKsCAAANPklEQVR4nO2deXuyOBDAYZJwKhW8sRWU4vW2+P2/3Sa21osjgXDY7W+fZ7v/LMEhmSuTiaL88ccff/zxxx9//FGIs2/7DcrhjHsLWc+abmU9qTH81w9PM62XWNLzbNiM2Z+xpOfVzkAFgyCK5sh65BbAZU/uyXpgrewjQOoJmEh7qK0jWFKNcJD3yNqIQ8BfAlD1g8TnfloqhpGvHFbSZlY9BP+AfAtAJUupj/bogzF4r0evkxNhvN5NXX/yvgTtLAAV6X05D7cHpz89g80upCE6GQI5T5bI3jKIoVuWidUL4Mt6fLA8GdcePj8ew6ZjQng7q79r9Fd5A/gvzBooPfQjYgI7WfZWAvZu+CgAlYwkPf70S99fdrZyPQ+YEMKuzAQfaykSkKYIFPs0AVaA2Q9emFfzjQqhC35zb5a2CKR6BIsZ+/fGZK6R41s3Uw1GLQvBcT8gbQpQRbCSOEzs0UXgeARmjrI0bwfCcJSmdUswGOokdQqoOJI60B6oQlhYyECBMiL3Y0H0PeOad5kO6UuAKQKQ7MkPXuinDoB6BEnfexgVw/wkhGAgd9QinFDPEABVBK7csXrUIrxRQYCqmvMNfhwQw5L9fHs7UeJm4iiq7MdLI1MC2k72gG6wBaoUX6nUUYoEvmYCE8J+Fg/eZY+eAlXCgXq/JK+WgSE/qH/fLM354lERXAth6DEhJKvDsvaJMBg7CaR/ixMS7eEFHzCGySJ78Z2EoNKh4yNAzSkmf9AjZs6LGOtaho0NjCB81IW3ExAin/nrENXpPQdhT8+ZAioicm2Ts2fPsydKnzrHOF8CbCbAR6zES4A3qW9xTQyBmicBifHhmQH7ouPN1J8XCoBB4GCzNNuoJo0QwHSTo5KoNZjJH/RLx++gYBX8YJiuEiDLqsVNmAxRmO4RfyMvOromCJmNWQGfBOhbDKlRWAPU8DneqT+YuwpU/VP+qJQx03J0dnNOA6YSpsrEsjzZWjEp/AzYkzzkGSdkcdc7vwxU3Qv6kSXZT12nZUZugfpC11eVflGXey2wiXCwE4CDPAPl7HLdkhOmzBD5nsHLO5sH/DJQDW3i61YkyzLYmzx36FvuqqTB0gmAKrnX4te4gGC2X+qSvFU7yo6KfoCac3nj40sy5rWMXxD9/WBCImNwlOsMfEugHmtwhTMDQPNcq3wP0sM1skaVA7eemW8KT2ihhB9ZxBbILhGSAV2eI5WQihM01jgkgHEj+94+mGFa0iQHhJh5qJRF2PPMAVSjPbyhN8+N0rJeT4MKAazP5Y8M64vM7nAy0vZ54HA1NKOyvrvLNaAhPVeWw6e4DMzDQNX0chN1yjUcVhtNYO9NDgN1943mrx4uZbP4ojMEDW9x9pfFrur9O2qIvqewQnD+WcXPpkDDCXwlbxMjD2IuxeyWPeLzRnUZ3pcofDrqBrxZWxoRmbB9j88H0WRto4sRE2GFoM1cIAKZvVjjGwKTlmoB7Y2wQjB3e5Vwe0k9i88DQXUHRzkkwovBGAUjA/gK4RYZG1cPyN4/FGKQt6WTClEHa0Pf2MXPtuecC01qaaE4AedqvYD0Q4g1rzCP4iw5o7GWVOGFsbiHwISGC5XijjM3gzHHjKqZVSkPARUoxRWfR9SqKrzgCiuEE5CX6Jzw5ihbVYUXAo8jq/eIHmYGNj3emdWKV5iGHXJO21uMKMOjWRRsGP2gbZr9oXnwBbT3EHVBFerDw1zepAwm7avCC74l7C6z38AS7Mn77YJY84qz8QC5gEUkssNw+RWzPtWn10Lg362ppZymEuXiZ83aKgHgn3A/4JaAJbHOXBblrCPStbetCbuvZW3zasJmNg2ECZDYFsNZCAY1qgZi/qKz4X0CRl1ShRfssHj3O1MQsHM/OVMk3VOFVwiUYTxAdJP7f5ZfUiWPEtnlEtRY0CaBErGjMHo9tZXyEE8mCdJ6iqCYSbnYkRfsddMY3NArFzvygUDaefw6cf7Vthi6kSThIfXspAxa2Dori1+Pdey2ObyjXOxYQMsZc2FmIlWKXBgfbf8mUWQrBHLseO+EFPwyhUmZYO1pWqlc0TvK8xA6HB3m4pTLLqdKoMPRYT6vkhRCR3ZNSlGiICVNAs/XXOqKwKjuJT2bQ3DPQqx2OwUjbPs3VIW3ciwLEj2fQ/AAx5GSbBqqMa8bjoNFWSD9OTqrFcJxvCxDAk1V2ddP8SHDDAl0bu+wPG+lZFDtNEfXKOMkGdO231ou3DVEVyLoSi2NLKbCgSOCDm6iV2AhvBLQUv1dMojEMyhkFsEvUgeHMi6ikYS/Zx58ljKKSHfXL79kHgxKJpQRDKYvtZ9GboJB6cwJlYH7G2RQXgIqS5pNnl8GIg0wfqcMtlU3lpgMnmk78YGSQeIvksFaxl4CvA+eVwZSJMDS6O6zyqBCyuyXyGAtrwhvmHw+owwkSoBtqLy9PF28cJC1q/qFOXt9ebIcSlK+LjsdbbPOPdvWOcolTHPB0aZKa5imKRsb5oJyz/d1jH1t9ZfG8Tl22Hp6feXY2lMUXjmeUKIQcTZs+OYpdttDoXw5IXuxDfj6u9pVJhFyCAzW+4r7kCaj+/VnYikS/eO0tIVKNSVfAiEdX0gC1tnQCx3m0DudVg6EzOFVf5dYpDKryycTxMzhzUaJfeRXirX1PK7OGIvYt/vtsn/8YUVNtwBUxz6KlBk+bhgKlKta3YwaudvxZEhAqBLDmnXRSxyJuETpm8Z7fk+xixFTKOLjZRUW91TumWQsuyYD3pZMjJzmRgLlqobcmzMrI5IpzG/vtOZ2rowO9bUR2zEoanDF3wegS1XqYhIoOmLBvxfdndMaQrtGHKdOA54m2Cdx6h1JIuXc6vb40lznbhe8x7/l35lWBqEjB7xHrfIuy7th2IENljHPDQ6iElD47+lpv1KZt13vCTwUiHJ5veW2T7TbnkBkhE2hON/nTKO0axYckdiQaIJJvzj1DuEHiq1sjTiRwCrQPOFLAq41radmros2ZSASGxpRmV4sF28ZzY/Z66I1nSgSG36nioW5eMt4mdMHraXNBZHIaFg603XxlnG01jIXQysF27ztequ+YPDTGwXPk2wDNGw+ZJrybxhUVFf9+VnlIG2bffLT+ifrp3EiUF9PxNyBFH5aISBrmgyzFoPZbPpAoIbCmFdvSnXpnqYf3MwwslEZ8F1o9PXOUtKcl96ixsbPjEoalIHAtpmsEqng5zY54u0PWXOwsZRqbPFKQKLfNh6dbTC2Jpn3MzQkgwVvTodGhjIbsfwoBATbnpdhGRqRwZi/XW/xhRBCXL69FdpZ/SW1+ps+2BFvcMh1LYgQ8Y+HoKmBn3Fzj1YqGBHAGfEGh5yXwwhh786KEMEqzuicpHn15lQ3nMFh0WZBWS4lOQbyMy4/JrXKgDc4LL4TpSx7OM9/BAc/PW1HcH0tQnkPWRhefe/Qv7RT1Ii7Tu0ijUldTVB4w2Or3o3vSyt+ZK1fUytbsF5PZR6nBOpvPHBJLnuml6Seiq+nFcyMTwK4gaz2+eYqrM6WEI7SZSC9GYzD2aNJw01UxI1PCsHbmNqB2ogo7UWkJ1X7nOUf+qihjtXsslu8mermaL9Lj5okL8iYr5EnknLHOB9v1F0mo8HchMEEp3srw5m84YIhlwSaUAMX9sigXpC/0+HQT9JDR9H7THMG48sPGPNma8RtuhiQPpiC6QXxPLXwlUjSTBM+CcC/xkvABpZG155rEnijCyMtbMJSlCJf3UvF29VL0v8AZC7dyBst7cUo7UWRhHCN89pv1NJBCRcINmdR9EYG9L/TzJa+rGik2PzCOhjEZN44wjhNIAjWrdVBsomAVWy4hx0LplNej2iVFELysjyA5/ZWo3dXNQGPNsbjIJrZapmDq2sIIZj6x0CZ4BQProqlckI8cIwp/cLsI7+tAvqnd7+xh2DXct3XYociCxubxSpRnEOKfSzvr/Qiqk4/fuKN77m+uR3C1DrQmdF1J0id4iDYLJR9WmrVCksphAGzJ9v7L+zcGGACSSeqofuu865PZm/KwWW55seJoCHxFILDZr3Se/iByZX5xRB25sTcfmGvPyc7Zb+2leD46ChhaaGjs1C8cz7fOnapYft4oQSv8SFQkj0rzXiYCEhea/H1V0yCdNyZCuALk4AuX5/+1jh63PMa7uQs2u/8oQHbTl7kNA7irWNPYyXNYzbmEnKKzlcRmAarjhRAp+HGik9n6CJ8cJQkZLadCE5mYN3ti6wCX7Hf6DeaGPcJ5soKwfFGQWjArjNmIAvbdxSfakVn9bAaoJpC2E2U1UvY4eOyF+Kx0p9QbRU8xI/GsYJCWNjKx/JZ+pSzb71n09U17rxFbFXwEHq7ZxHAN2P2vvZ92IDKt9bddyAaECVmliuI7urUrI9yFr2TfgAnrnmbZNaq5RCeErYa0FWcj56gJ4p0giVJrCsTWdE6Pifua+86s2bMhU9IPD9j15lQpUAQ0dma0Ob/w3mgxIq9BvrPZAaUzf9RBAzftRNbsYP4mU1cRca+0vkop3b+rwvgj1z+A0x/zQBk1oP0AAAAAElFTkSuQmCC";

var correctImgData = "data:image/jpeg;base64,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";
var img_height = 150;
var img_width = 150;
var imageData;
var parsedImgData = new Float32Array(img_height*img_width*3);
var prediction;

var modelReady = false;
const model = new KerasJS.Model({
  filepath: 'chrome-extension://dfkohpooaalkphljenkcjjcnlfiipdlc/web-accessible-resources/fourth_try.bin',
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
        server: "http://localhost:3000/"
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
      img.src = crossImgData;
    }
    else{
      img.src = correctImgData;
    }
  });
}

var images = document.getElementsByTagName('img');
model
.ready()
.then(() => {
  modelReady = true;
  for (var imgIndex = 0; imgIndex < images.length; imgIndex++) {
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
