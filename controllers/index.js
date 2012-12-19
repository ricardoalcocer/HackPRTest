function doClick(e) {  
    alert($.label.text);
}

function saveIt(e){
	// toImage() returns a Blob with a snapshot of whatever was inside it
	// this blob can be used to create an actual file
	// for demonstration purposes i'm assigning it to another view
	$.image5.image=e.source.toImage();
}

$.index.open();
