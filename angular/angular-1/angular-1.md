title: Basic Example
theme: IgorMotorny/cleaver-koala
controls: true
--
# Angular 
## 1.x
--
# Lector
## Dmytro Rudnytskykh
* Working at GlobalLogic
* 3 years of experience Web Development
* 1 year experience with AngularJS
* Studied KPI. Now UCU, Data Science major

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
### Example
```html
<html ng-app="example">
  <head>
    <script src="http://code.angularjs.org/1.4.8/angular.js">
    </script>
  </head>
  <script>
    var app = angular.module('example', []);
    app.controller('MainCtrl', function($scope) {
      $scope.name = 'World';
    });
  </script>
  <body ng-controller="MainCtrl">
    <p>Hello {{name}}!</p>
    <input ng-model="name"></input>
  </body>
</html>
```

--
### Two-way data binding
```html
<body ng-controller="MainCtrl">
  <p>Hello {{name}}!</p>
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
angular.module('example')
  .service('UserResource', function($resource) {
    return $resource.get('api/users'});
  });
```
--
### Dependency injection
```javascript
  console.log($injector);

  {
    annotate: function annotate(fn){},
    get: function getService(serviceName){},
    has: function(name){},
    instantiate: function instantiate(Type, locals){},
    invoke: function invoke(fn, self, locals){}
  }
```
--




-- 
## Libraries
* ui-bootstrap
* rest-angular
* Angular Material
* ui-grid
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
#Questions