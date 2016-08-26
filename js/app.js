var i=0;
var formdata=new FormData();
function call(info){
    
    if(info.childNodes.length > 0){
    for(var i=0;i<info.childNodes.length;i++){
        if(info.childNodes[i].childNodes.length>0){
            call(info.childNodes[i]);
        }
        else{
            if(info.childNodes[i].tagName==="INPUT"){
            console.log(info.childNodes[i].value+"  "+info.childNodes[i].id+"  "+info.childNodes[i].type);
               formdata.append(info.childNodes[i].id,info.childNodes[i].value) 
            }
            
        }
    }
    }
    
    
    
}

document.getElementById("post-data").addEventListener("click",function(e){
    
    var data=document.getElementById("form-data");
    var data2=document.getElementsByTagName("textarea");
    for(var i=0;i<data.childNodes.length;i++){
        
            call(data.childNodes[i]);
        
    }
    
       for (var key of formdata.keys()) {
            console.log(formdata.getAll(key)); 
}
        
    
});