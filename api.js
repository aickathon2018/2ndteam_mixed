// sample html
// <form name="fileinfo">
//    <label>Photo:</label> <input type="file" name="filename" required />
//    <button type="button" onclick="uploadPhoto()">Upload!</button>
// </form>

var API_URL = 'https://face.recoqnitics.com/analyze'
var ACCESS_KEY = 'def96eafc9feb324a599'
var SECRET_KEY = '848e8df56a1cb1806e2c346521580dcb16e08bd5'
//Please edit the parameters above to suit your needs
  // var canvas = document.getElementById("canvas");
  // var dataURL = canvas.toDataURL();
  //  var x = document.getElementById("img");
function uploadPhoto() {

//  x.setAttribute("src",dataURL);
  var formData = new FormData(document.forms.namedItem('fileinfo'))
  formData.append('access_key', ACCESS_KEY)
  formData.append('secret_key', SECRET_KEY)

  // Method 1: pure javascript
  var xhr = new XMLHttpRequest()
  xhr.open('POST', API_URL)
  xhr.onload = () =>
    xhr.status === 200
      ? doSomethingWith(JSON.parse(xhr.response))
      : console.log(xhr.status)
  xhr.send(formData)


  }



function doSomethingWith(data) {
  // do something with your data here
  console.log(data.faces.length)
  var malecount =0;
  var femalecount=0;
  var male = "Male";
  var female ="Female";
  var angrycount=0;
  var happycount=0;
  var surprisecount=0;
  var neutralcount=0;
  var fearcount=0;
  var disgustcount=0;
  var sadcount=0;
  for(var i =0 ; i < data.faces.length;i++)
 {
  
  var angry=data.faces[i].emotions.angry;
  var happy=data.faces[i].emotions.happy;
  var disgust=data.faces[i].emotions.disgust;
  var fear=data.faces[i].emotions.fear;
  var sad=data.faces[i].emotions.sad;
  var surprise=data.faces[i].emotions.surprise;
  var neutral=data.faces[i].emotions.neutral;
  var max= Math.max(angry,happy,disgust,fear,sad,surprise,neutral);
 
if(data.faces[i].emotions.angry==max)
  angrycount++;
 // document.getElementById("demo").innerHTML=gender + "<br/>"+ "angry";
else if (data.faces[i].emotions.disgust==max)
 disgustcount++;
  //document.getElementById("demo").innerHTML=gender + "<br/>"+ "disgust";
  else if (data.faces[i].emotions.fear==max)
    fearcount++;
    //document.getElementById("demo").innerHTML=gender + "<br/>"+ "fear";
    else if (data.faces[i].emotions.happy==max)
      happycount++;
      //document.getElementById("demo").innerHTML=gender + "<br/>"+ "happy";
      else if (data.faces[i].emotions.sad==max)
        sadcount++;
        //document.getElementById("demo").innerHTML=gender + "<br/>"+ "sad";
        else if (data.faces[i].emotions.surprise==max)
          surprisecount++;
          //document.getElementById("demo").innerHTML=gender + "<br/>"+ "surpise";
          else if (data.faces[i].emotions.neutral==max)
            neutralcount++;
            //document.getElementById("demo").innerHTML=gender + "<br/>"+ "neutral";

  //console.log(data.faces[i].gender.value);
  //console.log(max);
  if(male.localeCompare(data.faces[i].gender.value)==0)
    malecount++;
  else 
    femalecount++;
  
  }
  var total=0;
  total =data.faces.length;
  document.getElementById("total").innerHTML ="Total Face Detected : "+ total;
  var most=Math.max(angrycount,happycount,surprisecount,neutralcount,sadcount,disgustcount,fearcount)
  if(most==angrycount)
  document.getElementById("highest").innerHTML ="Highest Emotion Detected :Angry" ;
 // document.getElementById("demo").innerHTML=gender + "<br/>"+ "angry";
else if (most==happycount)
 document.getElementById("highest").innerHTML ="Highest Emotion Detected :Happy" ;
  //document.getElementById("demo").innerHTML=gender + "<br/>"+ "disgust";
  else if (most==surprisecount)
document.getElementById("highest").innerHTML ="Highest Emotion Detected :Surprise" ;
    //document.getElementById("demo").innerHTML=gender + "<br/>"+ "fear";
    else if (most==neutralcount)
   document.getElementById("highest").innerHTML ="Highest Emotion Detected :Neutral" ;
      //document.getElementById("demo").innerHTML=gender + "<br/>"+ "happy";
      else if (most==sadcount)
   document.getElementById("highest").innerHTML ="Highest Emotion Detected :Sad" ;
        //document.getElementById("demo").innerHTML=gender + "<br/>"+ "sad";
        else if (most==disgustcount)
          document.getElementById("highest").innerHTML ="Highest Emotion Detected :Disgust" ;
          //document.getElementById("demo").innerHTML=gender + "<br/>"+ "surpise";
          else if (most==fearcount)
                document.getElementById("highest").innerHTML ="Highest Emotion Detected :Fear" ;           
    


   var maxcount=Math.max()
  console.log("Angry Count: "+angrycount)
  console.log("Disgust Count: "+disgustcount)
  console.log("Fear Count: "+fearcount)
  console.log("Happy Count: "+happycount)
  console.log("Sad Count: "+sadcount)
  console.log("Surprise Count: "+surprisecount)
  console.log("Neutral Count: "+neutralcount)
  console.log("Male Count: "+ malecount);
  console.log("Female Count: "+femalecount);
  

  var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "angry",
        "disgust",
        "fear",
        "happy",
        "sad",
        "surprise",
        "neutral"

    ],
    datasets: [
        {
            data: [angrycount,disgustcount,fearcount,happycount,sadcount,surprisecount,neutralcount],
           //data: [5,2,1,5,6,7,8],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF",
                "#631234",
                "#4584AF"
            ]
        }]
};
delete oilCanvas;

var pieChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: oilData
});
delete pieChart;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#input").change(function(){
    readURL(this);

});

$("#uploadButton").click(function() {
  $('html,body').animate({
      scrollTop: $("#projects").offset().top},
      'slow');
});
/*
"use strict";
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var videoStream = null;
var preLog = document.getElementById('preLog');

function log(text)
{
  if (preLog) preLog.textContent += ('\n' + text);
  else alert(text);
}

function snapshot()
{
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  
}

function noStream()
{
  log('Access to camera was denied!');
}

function stop()
{
  var myButton = document.getElementById('buttonStop');
  if (myButton) myButton.disabled = true;
  myButton = document.getElementById('buttonSnap');
  if (myButton) myButton.disabled = true;
  if (videoStream)
  {
    if (videoStream.stop) videoStream.stop();
    else if (videoStream.msStop) videoStream.msStop();
    videoStream.onended = null;
    videoStream = null;
  }
  if (video)
  {
    video.onerror = null;
    video.pause();
    if (video.mozSrcObject)
      video.mozSrcObject = null;
    video.src = "";
  }
  myButton = document.getElementById('buttonStart');
  if (myButton) myButton.disabled = false;
}

function gotStream(stream)
{
  var myButton = document.getElementById('buttonStart');
  if (myButton) myButton.disabled = true;
  videoStream = stream;
  log('Got stream.');
  video.onerror = function ()
  {
    log('video.onerror');
    if (video) stop();
  };
  stream.onended = noStream;
  if (window.webkitURL) video.src = window.webkitURL.createObjectURL(stream);
  else if (video.mozSrcObject !== undefined)
  {//FF18a
    video.mozSrcObject = stream;
    video.play();
  }
  else if (navigator.mozGetUserMedia)
  {//FF16a, 17a
    video.src = stream;
    video.play();
  }
  else if (window.URL) video.src = window.URL.createObjectURL(stream);
  else video.src = stream;
  myButton = document.getElementById('buttonSnap');
  if (myButton) myButton.disabled = false;
  myButton = document.getElementById('buttonStop');
  if (myButton) myButton.disabled = false;
}

function start()
{
  if ((typeof window === 'undefined') || (typeof navigator === 'undefined')) log('This page needs a Web browser with the objects window.* and navigator.*!');
  else if (!(video && canvas)) log('HTML context error!');
  else
  {
    log('Get user media…');
    if (navigator.getUserMedia) navigator.getUserMedia({video:true}, gotStream, noStream);
    else if (navigator.oGetUserMedia) navigator.oGetUserMedia({video:true}, gotStream, noStream);
    else if (navigator.mozGetUserMedia) navigator.mozGetUserMedia({video:true}, gotStream, noStream);
    else if (navigator.webkitGetUserMedia) navigator.webkitGetUserMedia({video:true}, gotStream, noStream);
    else if (navigator.msGetUserMedia) navigator.msGetUserMedia({video:true, audio:false}, gotStream, noStream);
    else log('getUserMedia() not available from your Web browser!');
  }
}
start();*/