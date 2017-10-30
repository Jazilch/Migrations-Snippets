1. ) This simple snippet is the standard and is how you initzalize Match Height and Images Loaded

Run Images Loaded before Match Height & Masonry

```javascript
$('.post-listing').imagesLoaded(function() {
    $('.post-item').matchHeight({
        byRow: true,
        property: 'height'
    });
    
    // masonry
});
```

2. ) Need to run match height multiple times. This is a good snippet if you need to run this on the main post item 
and another item within the post item

Run Match Height Multiple Times
```javascript
    $('.post-listing').imagesLoaded(function() {
        
    $('.post-item .post-header').matchHeight({
        byRow: true,
        property: 'height'
    });
    $('.post-item .hs-featured-image-link img').matchHeight({
        byRow: true,
        property: 'height'
    });
 ```


3. ) Use this snippet if you are looking to use Isotope and then use Match Height on the callback to make
sure that all items getting loaded have the match height triggered

```javascript
Trigger Isotope as a callback
    function( newElements ) {
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
        // ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function(){
                    $('.post-item .post-header').matchHeight({
                         byRow: true,
                        property: 'height'
                     });
                    $('.post-item .hs-featured-image-link img').matchHeight({
                         byRow: true,
                         property: 'height'
                    });
                // show elems now that they're ready
                $newElems.animate({ opacity: 1 });
                $container.isotope('appended', $newElems, function() {
                 $container.imagesLoaded(function(){   
                    $container.isotope({
                        // selector for entry content
                        itemSelector: '.post-item',
                        layoutMode: 'masonry'
                    });
                });
            });
        });

    });
});

// Match Height on page load as a callback 
   //Isotope 
    $('.post-listing').imagesLoaded(function() {
    $('.post-listing').isotope({
        itemSelector: '.post-item',
        layoutMode: 'masonry'
    });
    $.fn.matchHeight._afterUpdate = function(load) {
        $('.post-item-inner .post-item-box').matchHeight({
            byRow: true,
            property: 'height'
    });
    }
});
```

4. ) If the main way doesn't work you could also do something like the below. You're caling the match height plugin manually
then you are setting isotope and then running match height manually as a callback when Isotope is called. 

Second Option when running MatchHeight On Callback
```javascript
<script>
/**
 * Infinite Scroll + Masonry + ImagesLoaded
 */
$('.post-item .news-item-copy-container').matchHeight({
    byRow: true,
    property: 'height'
});

        
// Infinite Scroll + Isotope + ImagesLoaded
(function() {

    // Main content container
    var $container = $('.blog-listing-wrapper:not(.simple-listing) > .post-listing');

    // Isotope + ImagesLoaded
    $container.imagesLoaded(function(){
        $container.isotope({
            // selector for entry content
            itemSelector: '.post-item',
            layoutMode: 'fitRows'
        });
    });

    // Infinite Scroll
    $container.infinitescroll({

        // selector for the paged navigation (it will be hidden)
        navSelector  : ".blog-pagination",
        // selector for the NEXT link (to page 2)
        nextSelector : "a.next-posts-link:last",
        // selector for all items you'll retrieve
        itemSelector : ".blog-listing-wrapper > .post-listing > .post-item",

        // finished message
        loading: {
            // finishedMsg: 'No more pages to load.'
            finished: function() {
                console.log('No more pages to load.');
            }
        }

    },

    // Trigger Isotope as a callback
    function( newElements ) {
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
        // ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function(){
            // show elems now that they're ready
            $newElems.animate({ opacity: 1 });
            $container.isotope('appended', $newElems, function() {
                $container.imagesLoaded(function(){
                    $container.isotope({
                        // selector for entry content
                        itemSelector: '.post-item',
                        layoutMode: 'fitRows'
                    });
                });
            });
        });
        $('.post-item').imagesLoaded(function() {
        $('.post-item .news-item-copy-container').matchHeight({
            byRow: true,
            property: 'height'
        });
        });
    });

})();
</script>
```
