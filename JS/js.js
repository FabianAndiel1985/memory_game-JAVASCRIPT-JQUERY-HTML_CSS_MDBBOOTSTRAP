		
//DECLARATIONS

		// BUILDING ARRAY

		var arrayImages = ['url("img/pic1.jpg")',
						   'url("img/pic2.jpg")',
						   'url("img/pic3.jpg")',
						   'url("img/pic4.jpg")',
						   'url("img/pic5.jpg")',
						   'url("img/pic6.jpg")',
						   'url("img/pic7.jpg")',
						   'url("img/pic8.jpg")'
						   ];

		// EXTEND ARRAY WITH ITSELF 

		var arrayImages= arrayImages.concat(arrayImages);

		// SHUFFLE ARRAY

		function shuffleArray(array) {
		    for (var i = array.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = array[i];
		        array[i] = array[j];
		        array[j] = temp;
		    }

		    return arrayImages;
		}

		function setNumberOfTries() {
			document.getElementById("numberTries").innerHTML = tries;

		}

// ______________________________________________________________


		// ATTACH ARRAYS ELEMENTS TO IMAGE CONTAINER BOXES 


		function attachArray(param) {
			var divs = document.getElementsByClassName("img-container");
	
			for (i=0;i<param.length;i++) {
				$(divs[i]).each(function( index ) {
		 			$(this).css("background-image",param[i]);  
				});
			}		
		}


// _______________________________ actual program _________________________________________________

		// SHUFFLE ARRAY AND ATTACH IMAGES TO CONTAINER

		attachArray(shuffleArray(arrayImages));


		var counter = 0;

		var tries = 0; 

		setNumberOfTries();

		
		$(".card-boarder").click(function(){
	  		$(this).children().css("visibility","visible").attr("value","clicked");
	  		counter += 1;
	  		tries += 1;
	  		setNumberOfTries();


		  		if (counter==2) {

		  			setTimeout( function() {

		  			var	x = $("div[value='clicked']");
				    
				    var bg_url0 = $(x[0]).css('background-image');
				    bg_url0 = /^url\((['"]?)(.*)\1\)$/.exec(bg_url0);  
				    bg_url0 = String(bg_url0);

				    var bg_url1 = $(x[1]).css('background-image');
				    bg_url1 = /^url\((['"]?)(.*)\1\)$/.exec(bg_url1);
				    bg_url1 = String(bg_url1);
					
				    if( bg_url0 == bg_url1 ) {
				    	
				    	$(x[0]).parent().css({"display": "none"});
				    	$(x[1]).parent().css({"display": "none"});
				    	
				    	counter = 0;
				    	x.remove();

				    }
				    

				    else if (  bg_url0 != bg_url1 ) {
				    	
				    	$(x[0]).css({"visibility": "hidden"}).attr("value","");
				    	$(x[1]).css({"visibility": "hidden"}).attr("value","");
				    	counter = 0;
										 
					}

					}, 300)

				}  /* end of function if counter is set to 2 */
	  		});


			// MAKE NEW START ON BUTTON CLICK

			document.getElementById("resetBtn").onclick = function() { 

				// SHUFFLE ARRAY AND ATTACH IMAGES TO CONTAINER
				attachArray(shuffleArray(arrayImages));

				// SHOW THE CARDS AGAIN

				var card_boarders = document.getElementsByClassName("card-boarder");
				
				for (i = 0; i < card_boarders.length; i++) {
 				 	card_boarders[i].style.display = "block";
 				 }

 				 tries = 0; 
 				 setNumberOfTries();

			}





