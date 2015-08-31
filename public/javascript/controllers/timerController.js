angular.module('app').controller("TimerController", [ "$interval", function($interval){
  var vm = this;
  var breakInterval;
  var workInterval;
  vm.page = "Timer";

//------Break time--------------------------------------

/*
Fix logic
Add more CSS

*/


vm.setBreakMinutes = function(){
  if(vm.breakSeconds === 0){
    vm.breakSeconds = 59;
    vm.breakMinutes -= 1;

    if(vm.breakMinutes === 0 && vm.breakHours === 0){
      vm.breakSeconds = 0;
    }


    if(vm.breakMinutes ===0){
      vm.breakMinutes =0;
    }
    /*else
    {vm.breakMinutes -= 1;}*/
    
  }
  else {vm.breakSeconds -=1;}
};

vm.setBreakHours = function(){

  if(vm.breakSeconds === 0 && vm.breakMinutes === 0 && vm.breakHours === 0){
    vm.startWork();
    return;
  };


  if(vm.breakMinutes === 1 && vm.breakSeconds === 1){

    if(vm.breakMinutes === 0 && vm.breakHours === 0){
      vm.breakMinutes = 0;
    };

    vm.breakMinutes = 59;
    if(vm.breakHours === 0){
      vm.breakHours = 0;
    }
    else{vm.breakHours -= 1};
  };
};



vm.startBreak = function(){
  breakInterval = $interval(vm.setBreakMinutes, 1000);
  breakInterval = $interval(vm.setBreakHours, 1000);
  vm.breakHours = vm.breakHoursInput;
  vm.breakSeconds = vm.breakSecondsInput;
  vm.breakMinutes = vm.breakMinutesInput;
};

//-------Work time------------------------------------------

vm.workNumRestrict = function() {

}

vm.setWorkMinutes = function(){
  if(vm.workSeconds === 0){
    vm.workSeconds = 59;
    vm.workMinutes -= 1;

    if(vm.workMinutes === 0 && vm.workHours === 0){
      vm.workSeconds = 0;
    }

    if(vm.workMinutes ===0){
      vm.workMinutes =0;
    }
    else
      {vm.workMinutes -= 1;}
    
  }
  else {vm.workSeconds -=1;}
};

vm.setWorkHours = function(){

  if(vm.workSeconds === 0 && vm.workMinutes === 0 && vm.workHours === 0){
    vm.startBreak();

  };


  if(vm.workMinutes === 1 && vm.workSeconds === 1){

    if(vm.workMinutes === 0 && vm.workHours === 0){
      vm.workMinutes = 0;
    };

    vm.workMinutes = 59;
    if(vm.workHours === 0){
      vm.workHours = 0;
    }
    else{vm.workHours -= 1};
  };
};


vm.startWork = function(){
  workInterval = $interval(vm.setWorkMinutes, 1000);
  workInterval = $interval(vm.setWorkHours, 1000);
  vm.workHours = vm.workHoursInput;
  vm.workSeconds = vm.workSecondsInput;
  vm.workMinutes = vm.workMinutesInput;

};


}]); 



