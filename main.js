// JavaScript Document
$(document).ready(function() {
		$(function() {
			$('body').hide()
			$(window).load(function(){
				$('body').fadeIn(1000, function(){
				
				//	BOUNCE DOWN MENU
		$('.nav:nth-child(1)').animate({top:'50%'},1000,'easeOutBounce');
		$('.nav:nth-child(2)').delay(100).animate({top:'60%'},1000,'easeOutBounce');
		$('.nav:nth-child(3)').delay(200).animate({top:'70%'},1000,'easeOutBounce');
		$('.nav:nth-child(4)').delay(300).animate({top:'80%'},1000,'easeOutBounce');
				});
			});
		});
		
		//	  FLUID	TEXT
  		$("#title, .contact").fitText();
  		$(".nav").fitText(0.5);
		$("#aboutMe, #aboutMe2").fitText(2.7);
		$("#info").fitText(5.0);
			
		


		//scrollto hash
			$('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-0
        }, 4000, 'easeInOutQuad', function () {
            window.location.hash = target;
        });
    	
		});
		$('#home').click(function() {
		$('body,html').animate({scrollTop:0},800);
		});




				
		// initialize the plugin, pass in the class selector for the sections of content (blocks)
		var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
		
		// assign function to add behavior for onBlockChange event
		scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		$('#console')
			.css('display','block')
			.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
		});
			
		// lettering.js for coolness
		$('#title, #aboutMe, #aboutMe2').lettering();
		$('#title span, #aboutMe span, #aboutMe2 span')
			.css('display','block')
			.css('float','left')
			.css('margin','0px auto');
		
		// animate the title letters to explode
		scrollorama
			.animate('#title, #aboutMe, #aboutMe2',{ duration: 300, property:'zoom', end: 4})
			
		
		$('#title span, #aboutMe span, #aboutMe2 span').each(function() {
			scrollorama
				.animate($(this),{duration: 100, property:'top', end: Math.random()*20-80})
				.animate($(this),{duration: 100, property:'right', end: Math.random()*220-280})
				.animate($(this),{duration: 100, property:'rotate', start:0, end:Math.random()*720-360});
		});
			
		// animate some examples
		scrollorama
			//.animate('#unpin',{ duration:500, property:'padding-top', start:400, pin:true })
			.animate('#websites',{delay: 200, duration: 300, property:'opacity', start:0})
				.animate('#fineArt',{delay: 160, duration: 300, property:'left', start:1400, end:0})
				.animate('#cad',{delay: 200, duration: 300, property:'left', start:1400, end:0})
				.animate('#ux',{delay: 240, duration: 300, property:'left', start:1400, end:0})
				//.animate('#zoom-in',{ delay: 0, duration: 600, property:'zoom', start:8 })
				//.animate('#any',{ delay: 200, duration: 200, property:'opacity', start:0 })
				//.animate('#any',{ delay: 200, duration: 200, property:'letter-spacing', start:18 });
			
		// animate the parallaxing
		scrollorama
			.animate('#borderCurtain',{delay: 400, duration: 600, property:'left', start:0, end:0})
			.animate('#leftCurtain',{delay: 200, duration: 800, property:'left', start:0, end:-800})
			.animate('#rightCurtain',{delay: 200, duration: 800, property:'right', start:0, end:-800});
		
		scrollorama
			.animate('#adam',{delay: 100, duration: 500, property:'left', start:-800, end:0})
			.animate('#god',{delay: 100, duration: 500, property:'right', start:-800, end:0})
			.animate('#getInTouch',{delay: 100, duration: 300, property:'opacity', start:0})
			.animate('#getInTouch',{delay: 0, duration: 400, property:'zoom', start:.01})
	 animateDiv();    


				//	RANDOM	CLOUDS	ANIMATION
function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    
    var w = $('#curtains').width() - 250;
    
    var nh = 200;
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#cloud1').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#cloud1').animate({ top: '20%', left: newq[1] }, speed, 'easeInOutQuad', function(){
      animateDiv();        
    });
	
	
    var newq = makeNewPosition();
    var oldq = $('#cloud2').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#cloud2').animate({ top: '20%', left: newq[1] }, speed, 'easeInOutQuad', function(){
      animateDiv();        
    });
	
	
    var newq = makeNewPosition();
    var oldq = $('#cloud3').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#cloud3').animate({ top: '20%', left: newq[1] }, speed, 'easeInOutQuad', function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.07;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}		
				


				//	PLANE, ETC	ANIMATION
function loop() {
        $('#plane').css({left:0});
        $('#plane').animate ({
            left: '110%',
        }, 10000, 'linear', function() {
            loop();
        });
    }
        
    loop();

	//		FANCYBOX

$('.fancygallery').fancybox();

	
});

//	REFRESH	PAGE ON WINDOW CHANGE
var windowWidth = $(window).width();

$(window).resize(function() {
    if(windowWidth != $(window).width()){
    location.reload();
    return;
    }
});
		
//   


		
// <![CDATA[
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35764279-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
// ]]>