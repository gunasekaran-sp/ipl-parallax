// Setting scroll top position to zero initially on page load
$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});
// home page scroll down arrow animation
function arrow(){
	$(".scrollarrow").animate({"top":"45%"},1000).animate({"top":"48%"},1000,arrow);
};
arrow();
$(".scrollarrow").click(function(){
	$("body,html").animate({scrollTop : $("#teams").offset().top},1500);
});
// pagination starts
function navigation(page){
	switch(page){
		case "home":
			$("body,html").animate({scrollTop : 0},1500);
			break;
		case "teams":
			$("body,html").animate({scrollTop : $('#teams').offset().top},1500);
			break;
		case "gallery":
			$("body,html").animate({scrollTop : $('#gallery').offset().top},1500);
			break;
		case "facts":
			$("body,html").animate({scrollTop : $('#facts').offset().top},1500);
			break;
		case "winners":
			$("body,html").animate({scrollTop : $('#winners').offset().top},1500);
			break;
		case "about":
			$("body,html").animate({scrollTop : $('#about').offset().top},1500);
			break;
	}
}
// pagination ends
// On scroll function starts
$(document).on("scroll",function(){
	if($(window).scrollTop() >= 0 && $(window).scrollTop() <= $('#teams').offset().top){
		$(".pagination").removeClass("current_page");
		$(".pagination").eq(0).addClass("current_page");
	}
	teams();
	gallery();
	facts();
	winners();
	about();
	// teams transition starts
	function teams(){
	    var top_of_page = $("#teams").offset().top;
	    var bottom_of_element = $("#teams").offset().top + $("#teams").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();
	    if($(window).scrollTop() >= top_of_page){
			$(".pagination").removeClass("current_page");
			$(".pagination").eq(1).addClass("current_page");
		}
	    if((bottom_of_screen > top_of_page+100)){
	        // page is visible
			$(".topfour").slideDown(1000);
			$('.description').delay(1000).height($('.team img:first-child').height());
			$('.description').width($('.team').width());
			$(window).on('resize', function(){
				$('.description').height($('.team img:first-child').height());
				$('.description').width($('.team').width());
			});
	    }
	    else{
			$(".topfour").slideUp(1000);
	    }
	    if((bottom_of_screen > top_of_page+500)){
	        // page is visible, do something
			$(".bottomfour").slideDown(1000); // showing next set of four teams
	    }
	    else {
			// page is not visible
			$(".bottomfour").slideUp(1000);
	    }
	}
	// teams transition ends
	// Gallery transition starts
	function gallery(){
	    var top_of_element = $("#gallery").offset().top;
	    var bottom_of_element = $("#gallery").offset().top + $("#gallery").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();
	    if($(window).scrollTop() >= top_of_element){
			$(".pagination").removeClass("current_page");
			$(".pagination").eq(2).addClass("current_page");
		}
	    if((bottom_of_screen > top_of_element+200)){
	        // page is visible
			$(".imgrow img").stop().show(10);
			$(".imgrow img").addClass("galleryshow");
			$(".imgrow img").hover(function(){
				$(this).addClass("galleryhover");
			},function(){
				$(".imgrow img").removeClass("galleryhover");
			});
			// Image popUp functionality starts
			$(".galleryimgs img").click(function(){
				$("#enlarged").attr("src",$(this).attr("src"));
				$(".imgpopup").show();
			})
			$(".close").click(function(){
				$(".imgpopup").hide();
			})
	    }
	    else{
	    	$(".imgrow img").hide();
	    	$(".imgrow img").removeClass("galleryshow");
	    }
	}
	// facts transition starts
	function facts(){
	    var top_of_element = $("#facts").offset().top;
	    var bottom_of_element = $("#facts").offset().top + $("#facts").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();
	    if($(window).scrollTop() >= top_of_element){
			$(".pagination").removeClass("current_page");
			$(".pagination").eq(3).addClass("current_page");
		}
	    if((bottom_of_screen > top_of_element+200)){
			$(".left").eq(0).stop().animate({"margin-left":"0px","opacity":"1"},750);
	    }
	    else{
			$(".left").eq(0).stop().animate({"margin-left":"500px","opacity":"0"},750);
	    }
	    if((bottom_of_screen > top_of_element+400)){
			$(".right").eq(0).stop().animate({"margin-right":"0px","opacity":"1"},750);
		}
		else{
			$(".right").eq(0).stop().animate({"margin-right":"500px","opacity":"0"},750);
		}
		if((bottom_of_screen > top_of_element+550)){
			$(".left").eq(1).stop().animate({"margin-left":"0px","opacity":"1"},750);
		}
		else{
			$(".left").eq(1).stop().animate({"margin-left":"500px","opacity":"0"},750);
		}
		if((bottom_of_screen > top_of_element+650)){
			$(".right").eq(1).stop().animate({"margin-right":"0px","opacity":"1"},750);
		}
		else{
			$(".right").eq(1).stop().animate({"margin-right":"500px","opacity":"0"},750);
		}
	}
	function winners(){
		var top_of_element = $("#winners").offset().top;
	    var bottom_of_element = $("#winners").offset().top + $("#winners").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();
	    if($(window).scrollTop() >= top_of_element){
			$(".pagination").removeClass("current_page");
			$(".pagination").eq(4).addClass("current_page");
		}
	    if((bottom_of_screen > top_of_element+300)){
	    	$("#trophy").stop().animate({"bottom":"65%"},1000);
	    }
	    else{
	    	$("#trophy").stop().animate({"bottom":"0%"},1000);	
	    }
	}
	// facts transition ends
	// about page transitions starts
	function about(){
		$('#about').height($(window).height());
		var top_of_element = $("#about").offset().top;
	    var bottom_of_element = $("#about").offset().top + $("#about").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();
	    if($(window).scrollTop() >= top_of_element){
			$(".pagination").removeClass("current_page");
			$(".pagination").eq(5).addClass("current_page");
		}
	    if((bottom_of_screen > top_of_element+300)){
	    	$(".member").show(1000);
	    }
	    else{
	    	$(".member").hide(1000);	
	    }
	}
	// about page transitions ends
});
// On scroll function ends

// Winners trophy transition starts
winnersTransitions();
function winnersTransitions(){
	$(".year_btn button").click(function(){	
		$(".year_btn button").removeClass("yearbtnhover");
		$(this).addClass("yearbtnhover");
		$("#winner_logo").fadeOut(500);
		var year=$(this).text();
		if(year!="2009"){
		$(".deccan").css({"transform": "rotateY(0deg)"});
		$(".deccan").attr("src","images/srh.png");
		}
		var leftValue = $('#winners').width() - 260;
		switch(year){
			case "2008":
				// $("#trophy").fadeIn("slow");
				// $("#trophy").css({"display":"block", "top":"218px", "left":"80%"});
				$("#winner_logo img").attr("src","images/rr_win.png");
				$("#winners").css("background-image","url(images/2008_bck.jpg)");
				$("#winner_logo").fadeIn(1000);
				$("#trophy").stop().animate({"top":"160px", "left": leftValue +"px"},1000);
				break;
			case "2009":
				$("#winner_logo").fadeIn(1000);
				$("#winners").css("background-image","url(images/2009_bck.jpg)");
				$(".deccan").css({"transform": "rotateY(360deg)","transition":"1s"});
				$(".deccan").attr("src","images/deccan.png");
				$("#winner_logo img").attr("src","images/deccan_win.png");
				$("#trophy").stop().animate({"top":"405px","left":"180px"},1000);
				break;
			case "2010":
				$("#winner_logo img").attr("src","images/csk_win.png");
				$("#winners").css("background-image","url(images/2010_bck.jpg)");
				$("#winner_logo").fadeIn(1000);
				$("#trophy").stop().animate({"top":"70px","left":"180px"},1000);
				break;
			case "2011":
				$("#winner_logo img").attr("src","images/csk_win.png");
				$("#winners").css("background-image","url(images/2011_bck.jpg)");
				$("#winner_logo").fadeIn(1000);
				$("#trophy").stop().animate({"top":"70px","left":"180px"},1000);
				break;
			case "2012":
				$("#winner_logo img").attr("src","images/kkr_win.png");
				$("#winners").css("background-image","url(images/2012_bck.jpg)");
				$("#winner_logo").fadeIn(1000);
				$("#trophy").stop().animate({"top":"280px", "left": leftValue +"px"},1000);
				break;
			case "2013":
				$("#winner_logo img").attr("src","images/mi_win.png");
				$("#winners").css("background-image","url(images/2013_bck.jpg)");
				$("#winner_logo").fadeIn(1000);
				$("#trophy").stop().animate({"top":"386px","right":"120px", "left": leftValue +"px"},1000);
				break;
			case "2014":
				$("#winner_logo img").attr("src","images/kkr_win.png");
				$("#winners").css("background-image","url(images/2014_bck.jpg)");
				$("#winner_logo").fadeIn(1000);
				$("#trophy").stop().animate({"top":"280px", "left": leftValue +"px"},1000);
				break;
			case "2015":
				$("#winner_logo img").attr("src","images/mi_win.png");
				$("#winners").css("background-image","url(images/2015_bck.jpg)");
				$("#winner_logo").fadeIn(1000);
				$("#trophy").stop().animate({"top":"386px", "left": leftValue +"px"},1000);
				break;
		}
	});
}
//winners transition ends