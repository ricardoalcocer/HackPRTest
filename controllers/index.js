function doClick(e) {  
    alert($.label.text);
}

function saveIt(e){
	// toImage() returns a Blob with a snapshot of whatever was inside it
	// this blob can be used to create an actual file
	// for demonstration purposes i'm assigning it to another view
	//$.image5.image=e.source.toImage();

	// haven't tested this code, but it should write the image to disk
	// so it can later be used to send to Parse via api call
	var new_folder = Titanium.Filesystem.getFile(parent, 'test'); 

	if( !new_folder.exists() ) { 
		new_folder.createDirectory(); }
	});

	var theImage = e.source.toImage(); 
	var d=new Date(); 
	var filename = d.getTime() + ".png"; 
	var f = Titanium.Filesystem.getFile(parent + '/test',filename); 
	f.write(theImage);

}

$.index.open();
