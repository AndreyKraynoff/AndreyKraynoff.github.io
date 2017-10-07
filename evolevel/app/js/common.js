$(function() {

$('#my-menu').mmenu({
	extensions: ['fx-listitems-drop', 'theme-black', 'pagedim-black'],
	navbar: {
		title: '<a href="#main" class="logo"><span>TPE</span>SHKI</a>'
	},
	offCanvas:{
		position: 'right'
	}
});

      var api = $("#my-menu").data( "mmenu" );

      //   Hook into methods
      api.bind( "open:finish", function( $panel ) {
        $('.hamburger').addClass('is-active');
      });
     api.bind( "close:finish", function( $panel ) {
        $('.hamburger').removeClass('is-active');
      });

$('body').mCustomScrollbar({
	theme:"dark",
	mouseWheelPixels: 150,
	scrollInertia: 300
});


$("#bgndVideo").vimeo_player();

});
