(function($){

  var Flickr = function(){
    this.flickrUrl = "http://www.flickr.com/";
  }


  Flickr.prototype.redirect = function(){
    window.location.replace(this.flickrUrl);
  }


  $(document).ready(function(){
    var fRedirect = new Flickr();
    fRedirect.redirect();
  });

})(jQuery);


