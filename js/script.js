$(document).ready(function() {
	$('#fullpage').fullpage({
	
		sectionSelector: 'section',

		anchors: ["home", "to-skills", "to-tools", "to-works", "to-contacts", "last-page"],
		menu: "#menu",

		lockAnchors: false,

		controlArrows: true,
		verticalCentered: false,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: 0,
		paddingBottom: 0,
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		animateAnchor: true,

		loopBottom: false,
	});

});