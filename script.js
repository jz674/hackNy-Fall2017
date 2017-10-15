function test(){
    var toAdd = "shader:gif;src:url(" + "test2.gif" + ")";
   document.getElementById("display").setAttribute("material", toAdd);
   
}

function test2(){
    
    var x = document.getElementById("frm1").elements[0].value;
    console.log(x);
    request = new XMLHttpRequest;
	  	request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=NPZBeexlECq2s9cxt5F27RIBJVIS8AJ4&q=' + x + '&limit=1&offset=0&rating=G&lang=en', true);
	
	  	request.onload = function() {
	  		if (request.status >= 200 && request.status < 400){
	  			data = JSON.parse(request.responseText).data[0].images.original.url;
                
                data = data.split("/");
                data = data[4];
                data = "https://i.giphy.com/" + data + ".gif";
	  			var toAdd = "shader:gif;src:url(" + data + ")";
   document.getElementById("display").setAttribute("material", toAdd);
//	  			document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
	  		} else {
	  			console.log('reached giphy, but API returned an error');
	  		 }
	  	};

	  	request.onerror = function() {
	  		console.log('connection error');
	  	};

	  	request.send();
}

function toBox(){
    var display = document.getElementById("display");
    var geo = display.getAttribute("geometry");
    geo = "primitive: box; buffer: false; skipCache: true; width: 1.5; height: 1.5; depth: 1.5";
    display.setAttribute("geometry", geo);
}

function to2dBox(){
    var display = document.getElementById("display");
    var geo = display.getAttribute("geometry");
    geo = "primitive: plane; height: 3; width: 3";
    display.setAttribute("geometry", geo);
}

function toSphere(){
    var display = document.getElementById("display");
    var geo = display.getAttribute("geometry");
    geo = "primitive: sphere; radius: 1.5";
    display.setAttribute("geometry", geo);
}
