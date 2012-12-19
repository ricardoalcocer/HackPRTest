function saveIt(e){
	// set the name of the folder to store photos
	var new_folder = Titanium.Filesystem.getFile('/photos'); 

	// create the folder if it doesn't already exists
	if( !new_folder.exists() ) { 
		new_folder.createDirectory(); 
	};

	// get the image from the view
	var theImage = e.source.toImage(); 

	// create unique file name using date
	var d=new Date(); 
	var filename = d.getTime() + ".png"; 

	// get a handle to this file-to-be-created
	var f = Titanium.Filesystem.getFile('/photos',filename); 

	// write the image to the disk
	f.write(theImage);

	// the image path is:
	alert(f.nativePath);

	// send the file to a web service
	var XHR = require("xhr");
	var http = new XHR();

	var onSuccessCallback=function(){
		// what to do if the http call succeded

		// perhaps some cleanup?  delete the file as we no longer need it
	}

	var onErrorCallback=function(){
		// what to do if the http call failed
	}

	http.get('http://web.service.endopoing',onSuccessCallback,onErrorCallback);
}

$.index.open();
