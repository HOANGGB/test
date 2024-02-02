var app = angula.module("appdemo",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider 
    .when("/1",{
        templateUrl: "demo.html"
    })
})
