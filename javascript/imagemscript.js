let count =  1;
document.getElementById("radio1").checked = true;

setInterval ( function(){
    netxImage();
}, 4000)

function netxImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;



/*
let count2 =  4;
document.getElementById("radio5").checked = true;

setInterval ( function(){
    netxImage();
}, 4000)

function netxImage(){
    count++;
    if(count>8){
        count = 5;
    }

    document.getElementById("radio"+count2).checked = true;

}

*/
}
