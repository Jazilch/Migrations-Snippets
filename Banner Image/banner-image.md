  snippet will take an img src url and set it as a background image.
 
 ```javascript
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

Maybe you're also looking for a way to set the Banner Height and then resize the padding to be responsive. 
```javascript
var bannerHeight = $('.banner-area').outerHeight();
$('.body-container-wrapper').css('padding-top', bannerHeight);

function setBannerHeight(e) {
	var bannerHeight = $('.banner-area').outerHeight();
	$('.body-container-wrapper').css('padding-top', bannerHeight);
}

$(window).on('resize', setBannerHeight);
```

Another item you may be having a hard time with is when exporting an image to the template context in a Custom Module. 
You might be trying to use the following
```
{% image "background_image" label='Select a background image',
src='http://cdn2.hubspot.net/hub/428357/file-2117441560-jpg/img/dev-bg-compressed.jpg', 
export_to_template_context=True %}
/* Since we are exporting it to the template with export_to_template_context=True
the image will not print on the page*/

/* Use the image src from this module to print as a background image with */
background:url('{{ widget_data.background_image.src }}');
```
If you put this in a custom module due to the custom module it changes the path of the src image so you will need to change it 
to the following code.
```
{% image "background_image" label='Select a background image',
src='https://cdn2.hubspot.net/hubfs/3228802/November2017/Images/sample_blog.jpg', 
export_to_template_context=True %}

<div class="custom-banner-image" style="background:url('{{ widget_data.module_1509630756275202_background_image.src }}'); background-size: cover; background-repeat: no-repeat;">
    <div class="banner-text">
        <div class="page-center">
            {% if widget.banner_image.src %}
            	<img src="{{ widget.banner_image.src }}" width="{{ widget.banner_image.width }}" height="{{ widget.banner_image.height }}" alt="{{ widget.banner_image.alt }}">
            {% endif %}
            {{ widget.banner_text }}
        </div>
    </div>
</div>
```
This module will still live under Widget Data but you will need to make sure you append the Module ID after widget_data




