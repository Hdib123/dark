// [MASTER JAVASCRIPT]
//	Project     :	FEATHER SITE TEMPLATES
//	Version     :	1.0
//	Last Change : 	10/01/2017
//	Primary Use :   FEATHER SITE TEMPLATES

	$(document).on('ready', function() {
		"use strict"; //Start of Use Strict
		var menu_bar = $('.navbar-default');
		var menu_li = $('.navbar-default li a');
		var collapse = $('.navbar-collapse');
		var top_menu= $('#top-nav');	
		
		//RESPONSIVE MENU SHOW AND HIDE FUNCTION
		menu_li.on("click", function(event) {
			collapse.slideToggle();
		});
		$('.navbar-default .navbar-toggle').click(function(e) {
			collapse.slideToggle();
		});

		//RESPONSIVE MENU BGCOLOR
		$('.navbar-header button').on('click', function(e) {
			$('#bs-example-navbar-collapse-1').css({
				"background-color": "#333333"
			});
			$('#bs-example-navbar-collapse-1 li a').css({
				"color": "#ffffff"
			});
		});
		
		//PRINT RESUME FUNCTION
		$('#printerButton').on("click", function(event){			  
			var myWindow = window.open('download-resume.html','My Resume', 'width=1000');			
			myWindow.focus();
			myWindow.print();
		});

		//HEADER SLIDER FUNCTION
		$('.carousel').carousel({
			interval: 2000
		})

		// YOUTUBE BACKGROUND VIDEO FUNCTION	
		var player=$('.player');
		if(player.length) {
			player.mb_YTPlayer();					
		}
		
		//CONTACT FORM VALIDATION	
		if ($('#contact-form').length) {
			$('#contact-form').each(function(){
				$(this).validate({			
					errorClass: 'error',
					submitHandler: function(form){
						$.ajax({
							type: "POST",
							url:"mail/mail.php",
							data: $(form).serialize(),
							success: function(data) {							
							   if(data){
								   $('#sucessMessage').html('Mail Sent Successfully !');
								   $('#sucessMessage').show();
								   $('#sucessMessage').delay(3000).fadeOut();
							   }
							   else {
									$('#failMessage').html(data);
									$('#failMessage').show();
									$('#failMessage').delay(3000).fadeOut();
									}
							},
							error: function(XMLHttpRequest, textStatus, errorThrown) {
							   $('#failMessage').html(textStatus);
							   $('#failMessage').show();
							   $('#failMessage').delay(3000).fadeOut();
							 }
						});
					}				
				});
			});
		};				
	return false;
		// End of use strict
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzjRipHlL77SUWr5uGxNETd4mq58FUq7M",
  authDomain: "safecore-7f55d.firebaseapp.com",
  projectId: "safecore-7f55d",
  storageBucket: "safecore-7f55d.appspot.com",
  messagingSenderId: "527619466962",
  appId: "1:527619466962:web:eb70302e726845f1586f0b",
  measurementId: "G-SWJZ770MF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);