var app = angular.module("myApp", []);
app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl(){
    this.resultValue = 0;
    this.buttonClick = function(button){
        this.selectedOperation = button;
    }
    this.calculate = function(){
        var number1 = parseFloat(this.input1);
        var number2 = parseFloat(this.input2);
    }
}