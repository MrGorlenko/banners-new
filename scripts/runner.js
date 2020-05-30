$(document).ready(function(){

    stepVal = [10, 35, 50, 90, 100, 135, 155, 170, 190, 220, 230, 250, 270, 290, 310, 320, 350, 365, 400];
    stepVal1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    $('.box').each(function() {
    $(this).on('input', 'input[type="range"]', function() {
        $(this).prev($("#price")).val(stepVal[this.value]);
    });
    $(this).on('blur', $("#price"), function() {
    var textVal = $(this).val();
    var closestVal = stepVal.reduce(function(prev, curr) {
      return (Math.abs(curr - textVal) < Math.abs(prev - textVal) ? curr : prev);
    });
    
    $(this).val(closestVal);
    $(this).next('input[type=range]').val(stepVal.indexOf(closestVal));
  });
});

$('.box').each(function() {
    $(this).on('input', 'input[type="range"]', function() {
        $(this).prev($('#amount')).val(stepVal1[this.value]);
    });
    $(this).on('blur', $('#amount'), function() {
    var textVal = $(this).val();
    var closestVal = stepVal.reduce(function(prev, curr) {
      return (Math.abs(curr - textVal) < Math.abs(prev - textVal) ? curr : prev);
    });
    
    $(this).val(closestVal);
    $(this).next('input[type=range]').val(stepVal.indexOf(closestVal));
  });
});

})