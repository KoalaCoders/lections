# JavaScript & JQuery DOM manipulation
## Create DOM node

|  html | JavaScript | JQuery  |
|     :---   |     :---    |     :---    |
| `<div class="className"></div>`   | `let div = document.createElement('div');` <br> `div.class = 'className';`   | `$('<div/>', { class: 'className'})`  |
| git diff     | git diff       | git diff      |


## Get DOM element


|  html | JavaScript | JQuery  |
|     :------------------    |     :-------------------------     |     :--------------    |
|`<div id="elementId"></div>`| `document.getElementById('elementId')`   | `$('#elementId')`  |
| `<span></span>`|`document.getElementsByTagName('span')`| `$('span')` |
| `<div class="className"></div>`|`document.getElementsByClassName('className')`| `$('.className')` |
| `<div id="elementId"></div>`|`document.querySelectorAll('div')` <br> `document.querySelectorAll('.className')` <br> `document.querySelectorAll('#elementId')`| `$('div')` <br> `$('.className')` <br> `$('#elementId')` |
| `<div><span class="className"></span><div>`|`el.querySelectorAll('.className')`| `$(el).find('.className')` |

## Add/remove DOM node

| JavaScript     | JQuery    |
| :------------- | :------------- |
|parrentEl.appendChild(elem)|$(parrentEl).append(el)|
|target.removeEventListener('event')|$(targer).off('event')|



## Events listening

| JavaScript     | JQuery    |
| :------------- | :------------- |
|target.addEventListener('event')|$(targer).on('event')|
|target.removeEventListener('event')|$(targer).off('event')|

### Events types

+ Mouse events
  - click
  - contextmenu
  - mouseover
  - mousedown
  - mousemove
+ Form events
  - submit
  - focus
+ Keyboard events
  - keydown
  - keyup
+ Css events
  - transitionend

## Styling
| JavaScript     | JQuery    |
| :------------- | :------------- |
|el.style.prop = state|$(el).css({prop: state})|
