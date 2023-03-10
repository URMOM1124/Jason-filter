    noseX=0;
    noseY=0;

function preload () {
    clowny_head = loadImage('https://th.bing.com/th/id/R.076dc92e9492f94fb99fa2fe8a2501e6?rik=BFUgQeXFDGGSuQ&riu=http%3a%2f%2fofficialpsds.com%2fimageview%2f75%2f2p%2f752ppv_large.png%3f1524077061&ehk=scMuELY2K3uIEAmtttQl2kfpxctbbsRoZBFs4TCykeg%3d&risl=&pid=ImgRaw&r=0.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is activated');
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clowny_head, noseX, noseY, 70,100);
}

function take_snapshot(){
    save('JASON!!!.png');                   
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.rightEar.x - 15;
        noseY = results[0].pose.rightEar.y - 55;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}