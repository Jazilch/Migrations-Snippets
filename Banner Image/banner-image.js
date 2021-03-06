  /* snippet will take an img src url and set it as a background image. */
 
  var bannerImage = $('.custom_banner-image img').attr('src');
   $('.custom_banner').css('background-image', 'url(' + bannerImage + ')');
   $('.custom_banner-image').closest('.row-fluid-wrapper').remove();
   
/* Loop through each of the featured images and then set the src on the parent */


$(function() {
    jQuery('img.hs-rss-featured-image').each(function () {
        jQuery(this).attr('src', jQuery(this).parent().css('background-image', 'url('  + this.src + ')'));
    });
    jQuery('img.hs-rss-featured-image').remove();
});
   
/* Conditional that will set a blog background image diferently dependning on listing or post view */
{% if is_listing_view %}
<div class="custom-banner">
    <div class="page-center">
        <div class="banner-img">
    	    <img src="https://cdn2.hubspot.net/hubfs/2624693/United_September2017/images/about-us-header.jpg" alt="Banner Image">
            <h1>{{ group.public_title }}</h1>
    	</div>
    </div>
</div>
{% else %}
<div class=" post-custom-banner" style="background:url('{{ widget_data.background_image.src }}'); background-size: cover; position: relative; height: 400px; margin: 0 24px;">
    <div class="page-center">
        <div class="post-banner-img">
            <h1>{{ group.public_title }}</h1>
    	</div>
    </div>
</div>
{% endif %}
