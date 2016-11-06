title: Basic Example
theme: IgorMotorny/cleaver-koala
controls: true
--
# Angular 
## 1.x

--
![Let`s start](http://developer.telerik.com/wp-content/uploads/2015/12/64911692.jpg)

--
## Dmytro Rudnytskykh
* Working at GlobalLogic
* 3 years of experience Web Development
* 1-year experience with AngularJS
* Graduated KPI, FICT. Now studying UCU, Data Science major

##[VK](https://vk.com/rudnytskykh) [CV](http://rudnitskih.pp.ua)

--
## Why Angular 
## in 2017
* ### Easy to start
* ### Don't requre preprocessing
* ### Long history, big community 
* ### A lot of jobs

--
## Angular overview
- two-way data binding
- separation of concerns
- abstraction
- dependency injection
- testability

--
### [Example](http://plnkr.co/edit/umTqZywBhjhBEQeGLpTg?p=preview)
```html
<!--ng-app - start of application: https://docs.angularjs.org/api/ng/directive/ngApp -->
<html ng-app="example">
  <head>
    <script src="http://code.angularjs.org/1.4.8/angular.js"></script>
    <script>
      // register module with no dependecies with the same name like in ng-app
      var app = angular.module('example', []);
      // register controller, inject $scope 
      app.controller('MainCtrl', function($scope) {
        // set default value on scope
        $scope.name = 'World';
      });
    </script>
  </head>
  <body ng-controller="MainCtrl">
    <p>Hello {{name | uppercase}}!</p>
    <input ng-model="name"/>
  </body>
</html>
```

--
### Two-way data binding
```html
<!-- usage controller on element: https://docs.angularjs.org/api/ng/directive/ngController-->
<body ng-controller="MainCtrl">
  <!-- show user input and apply 'upperccase' filter -->
  <p>Hello {{name | uppercase}}!</p>
  <!-- save user input on $scope.name property: https://docs.angularjs.org/api/ng/directive/ngModel -->
  <input ng-model="name"></input>
</body>
```

--
### Separation of concerns
- partials
- controllers
- directives
- services
- filters

```javascript
// example of usage ngResource: https://docs.angularjs.org/api/ngResource/service/$resource
angular.module('example')
  .service('UserResource', function($resource) {
    return $resource.get('api/users'});
  });
```
--
### Dependency injection
```javascript
  // https://docs.angularjs.org/api/auto/service/$injector
  console.log($injector);

  {
    annotate: function annotate(fn){},
    get: function getService(serviceName){},
    has: function(name){},
    instantiate: function instantiate(Type, locals){},
    invoke: function invoke(fn, self, locals){}321
  }
```
--
### Testability
```javascript
describe('TDD', function(){
  it('Using Jasmine fraimwork with Karma runner', function(){
    expect('easy').toBe(true)
  })
});
```
--
## Directives
### Main purpose: DOM manipulations
--
### [Example](http://plnkr.co/edit/umTqZywBhjhBEQeGLpTg?p=preview)
```javascript
// check plunker example(link above) with full comments
angular.module('example').directive('timeCounter', function () {
  return {
    template: '<h1>{{minutes}}:{{seconds}}</h1>',
    scope: {
      remainSeconds: '@'
    },
    replace: true,
    restrict: 'E',
    controller: 'timeCoubterCtrl',
    link: function ($scope, $element, $attrs) {}
  };
});
```
[Source](https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/)

--
## [Built-in Directives](https://docs.angularjs.org/api/ng/directive)
* ng-repeat
* ng-(click)
* ng-model
* ng-form
* ng-if
* ng-(disabled)

--
## [Built-in Services](https://docs.angularjs.org/api/ng/service)
* $http 
* $resource
* $window
* $timeout
* $parse
* $rootScope
* $filter

--
## Scope and Digest

-- 
## Libraries
* ui-router
* ui-bootstrap
* rest-angular
* Angular Material
* ui-grid
* ...
--
#Books
* [ng-book](https://github.com/IgorMotorny/library/blob/master/dist/cfadbfe79292e08a0a31929c9f8ecb11.pdf)
* Build-your-angular
* [Egghead](http://rutracker.org/forum/tracker.php?nm=Egghead%20angular)
* [angularjs-in-patterns](https://github.com/mgechev/angularjs-in-patterns)
* [[javascript.ru] Курс по Angular.JS](http://rutracker.org/forum/viewtopic.php?t=5245594)
* [Jonh Papa Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) 
* google.com :)

--
# Thank you
## Questions