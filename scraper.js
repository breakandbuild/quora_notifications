count = parseInt($(".count").first().html());

var animateFn = function () {
	if ( count > 0 ) {
		console.log("going down ");
		$("body").animate({ scrollTop: $(document).height() }, {
			complete: function () {
				count -= 15;
				animateFn();
		  }
		});
	} else {
		fn2();
	}
}

var fn2 = function () {
	notification = {}
	console.log("Outside the while loop");
	$("body").animate({ scrollTop: 0 }, "slow");
	$('div.pagedlist_item li.unseen .notification_text').each(function(){
		a_tags = $(this).find("a");
		if($(a_tags[0]).attr('arg') === undefined){}
		else{
		  topic = a_tags[1].href.split("http://www.quora.com/")[1].split("?")[0];
		  if( notifications[topic] === undefined ){
		 	 notifications[topic] = [];
		  }
		  note = a_tags[0].href.split("http://www.quora.com/")[1].split("?")[0];
		  notifications[topic].push(note);
		}	
	});
	console.log(notifications);
}
// var port = chrome.runtime.connect({name: "notification_relay"});
// port.postMessage(notifications);
animateFn();
