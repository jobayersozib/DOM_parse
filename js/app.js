var i=0;
function call(info){
    
    if(info.childNodes.length > 0){
    for(var i=0;i<info.childNodes.length;i++){
        if(info.childNodes[i].childNodes.length>0){
            call(info.childNodes[i]);
        }
        else{
            if(info.childNodes[i].nodeName==="INPUT"){
            console.log(info.childNodes[i].value+"  "+info.childNodes[i].id+"  "+info.childNodes[i].type);
            }
            else{
                
            }
        }
    }
    }
    
    
    
}

document.getElementById("post-data").addEventListener("click",function(e){
    
    var data=document.getElementById("form-data");
    for(var i=0;i<data.childNodes.length;i++){
        if(data.childNodes[i].childNodes.length >0){
            call(data.childNodes[i]);
        }
        else{
            call(data.childNodes[i]);
        }
    }
    
});