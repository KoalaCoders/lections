title: JQuery
author:
  name: Koala
  url: https://github.com/KoalaCoders
output: ./jquery/index.html
theme: IgorMotorny/cleaver-koala
controls: true
--
# jQuery
--
## How to start
```js
$(document).ready(function() { });
```

```js
$(function() { })();
```
--
## How to get element
```html
<div class="parrent">
  <span class="child"></span>
  <div id="child"></span>
</div>
```

```js
$('.parrent');
$('#child');
$('span');
$('.parrent').find('.child');
$('.parrent .child');
```
--
## JQuery collections
```js
$('selector').each(funtion() { });
$('selector').filter(funtion() { });
$('selector').eq(index);
```
--
## Element inner
```js
$('selector').html();
$('selector').text();
```
--
## Attributes
```js
// value - optional parameter
$('selector').attr('attrName', value);
$('selector').prop('propName', value);
```
--
## Classes
```js
$('selector').addClass('newClass');
$('selector').removeClass('oldClass');
$('selector').toggleClass('toggledClass');
$('selector').hasClass('oldClass');
```
--
## Events
```js
$('selector').on('event', function() { });

/*
click dblclick contextmenu

change blur

touchstart touchend touchmove
*/

$('selector').click(function() { });
```
--
## Position & size
```js
$('selector').height();
$('selector').width();
$('selector').offset(); // => {top: ..., left: ...}
$('selector').position(); // => {top: ..., left: ...}
```
--
## Ajax
```js
$.ajax({
    type: ''
    url: ''
}).done(function () { })
.fail(function () { });

$.get('path', params, callback);
$.post('path', params, callback);
$.getJSON('path', params, callback);
```
