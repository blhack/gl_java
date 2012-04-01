function init() {
	}


//fetch an external json
function load_json(url) {
	$.post("url", function(data) {
		some_data = data["some_data"];
		//do something with it
		//document.getElementById("body_text").value=latest_post;
	})
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
