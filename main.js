Webcam.attach("#camara");
Webcam.set({width: 200, height: 200, image_format: "png", png_quality: 90});
function foto(){
    Webcam.snap(function(data){
        document.getElementById("foto").innerHTML = "<img id='fotoReconocer' src=" + data + ">";
    });
}
var reconocimiento = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BdZjAlu1m/model.json", Rm);
function Rm(){
    console.log("Activado");
}
function identificar(){
   imagen = document.getElementById("fotoReconocer");
   reconocimiento.classify(imagen, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        if (results[0].label == "Miedo"){
            EmocionE = "😨";
        }
        if (results[0].label == "Feliz"){
            EmocionE = "😊";
        }
        if (results[0].label == "Sorpresa"){
            EmocionE = "😮";
        }
        if (results[0].label == "Enojado"){
            EmocionE = "😡";
        }
        if (results[0].label == "Triste"){
            EmocionE = "😢";
        }
        document.getElementById("ObjetoDE").innerHTML = results[0].label + EmocionE;
        Co = Math.floor(results[0].confidence * 100);
        document.getElementById("PresicionE").innerHTML = Co + "%";
    }
}