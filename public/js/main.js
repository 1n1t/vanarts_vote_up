//  Function for passing json-file

function parseJSON(file) {
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null);
    return JSON.parse(request.responseText);
}

//      same with jQuery

//        $.getJSON('../../data/file.json', function(data) {
//            alert(data);
//        });