  snippet will take an img src url and set it as a background image.
 
 ```
  var bannerImage = $('.custom_banner-image img').attr('src');
   $('.custom_banner').css('background-image', 'url(' + bannerImage + ')');
   $('.custom_banner-image').closest('.row-fluid-wrapper').remove();
   ```
   
Conditional that will set a blog background image diferently dependning on listing or post view
```
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
```

Create a custom module for a Banner Image 
```
<div class="custom-banner-wrapper" style="background-image:url({{ widget.banner_image.src }});">

</div>
```
Set the CSS so that we position the Banner Image to the very top of the viewport
```css
.custom-banner-wrapper {
    min-height: 546px !important;
    top: 0;
    left: 0;
    z-index: 1;
    position: absolute;
    width: 100% !important;
    background-size: cover;
    background-position: center;
    background-color: #dedede;
    background-repeat: no-repeat;
}
```
Due to absolutely positiing the .custom-banner-wrapper the body-container will overlay. Simply jQuery function to set the 
padding-top the same as the bannerHeight. This is just in case the Banner Height changes in the future. 
```javascript
var bannerHeight = $('.custom-banner-wrapper').height();
$('.body-container-wrapper').css('padding-top', bannerHeight);
```
Don't forget to add a Banner Image (image) field to the custom module also





