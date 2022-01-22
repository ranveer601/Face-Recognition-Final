Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( "#WebcamView" );
console.log(ml5.version);
 function takePicture(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('CapturedImage').innerHTML = 
         '<img id="capturedimage" src="'+data_uri+'"/>';
    } );
 }
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/16A1fJqJg/model.json",modelloaded);
 function modelloaded(){
     console.log("modelloaded");
 }

 function identify(){
     img=document.getElementById("capturedimage");
     classifier.classify(img,gotResult);
 }

 function gotResult(error,results){
     if(error){
         console.log(error);
     }
     else{
        console.log(results);
        document.getElementById("objectname").innerHTML=results[0].label;
        document.getElementById("acuracy").innerHTML=results[0].confidence.toFixed(3);
     }
 }