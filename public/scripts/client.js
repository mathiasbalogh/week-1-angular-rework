var app = angular.module('salaryTrack', []);

app.controller('salController', function(){
  console.log('salController loaded');

var sal = this;

sal.employees = [];


sal.addEmp = function(){
    sal.employees.push(angular.copy(sal.employee));
    sal.employee = null;
  };

sal.findMonthly = function(){
  sal.yearly = 0;

  sal.employees.forEach(function(employee){
    sal.yearly += Number(employee.annualSalary);
  });
  return (sal.yearly/12).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

sal.deleteEmp = function(id){
  sal.employees.splice(id,1);
  sal.findMonthly();
}

});
