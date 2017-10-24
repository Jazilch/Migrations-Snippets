```javascript
$('.post-listing').on( 'layoutComplete', function( event, laidOutItems ) {
    setTimeout(setPostItemHeightByRow, 500);
});
```
