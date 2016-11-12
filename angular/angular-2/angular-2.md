title: Angular 2
author:
  name: Koala
  url: https://github.com/KoalaCoders
output: ./angular/angular-2/index.html
theme: IgorMotorny/cleaver-koala
controls: true
style: style.css

--
# Angular 2
--
<img class="inline-image" src='images/webcomponent.svg'>
<img class="inline-image" src='images/typescript.png'>
<img class="inline-image" src='images/rxjs.png'>
--
## Web components
--
## Custom Elements
```javascript
class myCustomElement extends HTMLElement {
  createdCallback {
    console.log('Hi, I\'m custom element');
  }
}

/**
* createdCallback
* attachedCallback
* detachedCallback
* attributeChangedCallback(name, prevValue, newValue)
*/
document.registerElement('my-element', {
    prototype: myCustomElement,
    extends: 'div'
});

```
--
## Shadow dom

```html
<div id="hello">Jho</div>

<script>
  const el = hello.createShadowRoot();
  el.innerHTML = "Hello, <content></content>";
</script>

```
--
## Templates
```html
<p id="elem">
  Доброе утро, страна!</p>

<template id="tmpl">
  <h3><content></content></h3>
  <p>Привет из подполья!</p>
  <script>
    document.write('...document.write:Новость!');
  </script>
</template>

<script>
  var root = elem.createShadowRoot();
  root.appendChild(tmpl.content.cloneNode(true));
</script>

```
--
## Html imports
```html
<link rel="import" href="http://site.com/document.html">
```
--
## TypeScript
--
### `file-name.ts`
--
## Types
* Number
* String
* Boolean
* Object
* Array<elemType>
* Any
--

```typescript
function greeter(person: string): string {
  return "Hello, " + person;
}

var user = ["Jho", "Jhon"];

document.body.innerHTML = greeter(user);
```
--
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```
--
```typescript
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName): void {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
```
--
## Decorators
```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```
--
## Rx.js
--
```js
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
```
--
```js
var observable = Rx.Observable.create(function subscribe(observer) {
  var counter = 0;
  var id = setInterval(() => {
    observer.next(counter++)
  }, 1000);
});

observable.subscribe(console.log);
```
--
```js
var myObservable = new Rx.Subject();
myObservable.subscribe(console.log);

var counter = 0;
setInterval(() => {
  myObservable.next(counter++);
}, 1000);

```
--
## Angular
--
## Components
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello Angular!</h1>'
})
export class AppComponent { }
```
--
```ts
import { Component } from '@angular/core';
import { MyService } from '../MyService';
import { AnotherComponent } from '../another-component';

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
  directives: [AnotherComponent],
  providers: [AnotherComponent]
})
export class MyComponent {
  constructor(private googleMaps: GoogleMapsService) {}
}
```
--
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<div>{{text}}</div>`
})
export class MyComponent {
  text: string = 'MyComponent text'
}
```
--
## Diresctives
```ts
import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}
```
--
## Services
```ts
@Injectable()
class UsefulService { }
```
--
## DI
```ts
@Injectable()
class UsefulService { }

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) {}
}
```
--
```ts
@Injectable()
class UsefulService {
  constructor(private http: Http) { }

  retunData (name: string): Observable {
      return this.http.get(url);
  }
}

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) {}

  getData() {
    service.retunData().subscribe(console.log);
  }
}
```
--
## CLI
```
$ sudo npm install -g angular-cli
$ ng new PROJECT_NAME
$ ng g component my-new-component
$ ng g directive my-new-directive
$ ng g pipe my-new-pipe
$ ng g service my-new-service
$ ng g class my-new-class
$ ng g interface my-new-interface
$ ng g enum my-new-enum
$ ng g module my-module
```
