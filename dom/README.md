# JavaScript & JQuery DOM manipulation
## Create DOM node

<table>
<th>
  <td>JavaScript</td>
  <td>JQuery</td>
</th>

<tr>
<td>`<div class="className"></div>`</td>
<td>let div = document.createElement('div'); <br> div.class = 'className';</td>
<td>$('<div/>', { class: 'className'})</td>
</tr>
</table>

## Get DOM element
<table>
<th>
  <td>JavaScript</td>
  <td>JQuery</td>
</th>

<tr>
<td>```<div id="elementId"></div>```</td>
<td>document.getElementById('elementId')</td>
<td> $('#elementId')</td>
</tr>

<tr>
<td>`<span></span>`</td>
<td>document.getElementsByTagName('span')</td>
<td>$('span')</td>
</tr>

<tr>
<td>`<div class="className"></div>`</td>
<td>document.getElementsByClassName('className')</td>
<td>$('.className')</td>
</tr>

<tr>
<td>`<div id="elementId"></div>`</td>
<td>document.querySelectorAll('div')<br>   document.querySelectorAll('.className') <br> document.querySelectorAll('#elementId')</td>
<td>$('div') <br> $('.className') <br> $('#elementId')</td>
</tr>

<tr>
<td>`<div><span class="className"></span><div>`</td>
<td>el.querySelectorAll('.className')</td>
<td>$(el).find('.className')</td>
</tr>

</table>

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
