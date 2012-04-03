//fetch an external json
var json_data;
function load_json(url) {
	console.log(url);
	$.post(url, function(data) {
		set(data);
		//console.log(data["thing"]);
		//var my_data = data;
		//do something with it
		//document.getElementById("body_text").value=latest_post;
	});
}

function modal(url,height,width)
        {

	height = typeof height !== 'undefined' ? height : 700;
	width = typeof width !== 'undefined' ? width : 1000;

        document.getElementById("modal_container").innerHTML= vsprintf("<a href='%s' id='modal' rel='superbox[iframe][%sx%s]'></a>", [url,width,height])
        $(function(){
                $.superbox();
                $('#modal').trigger('click');
        });
        }

function chomp(raw_text) {
	return raw_text.replace(/(\n|\r)+$/, '');
	}

function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
