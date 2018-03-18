var module = angular.module("myApp", []);
module.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl(){
    this.opration = function(op){
        this.opration = op;
    }
}