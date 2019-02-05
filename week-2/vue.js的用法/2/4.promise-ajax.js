function ajax(url='',type='get',dataType='json') {
    let xhr = new XMLHttpRequest();
    xhr.open(type,url,true);
    xhr.responseType = dataType;
    xhr.onload = function(){ //xhr.readState=4  xhr.status=200

    };
    xhr.send();
    console.log(url);
}

ajax({
    url:'./carts.json'
}).then()


/*ajax({}).then(()=>{

},()=>{

});*/

/*
$.ajax({
    url:'',
    data:{},
    type:'get',
    dataType:'json',
})*/
