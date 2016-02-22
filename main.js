$('ul li:first a').click(function(){
  $('.tab-pane').hide();
  $('#about').show();
});

$('ul li:nth-child(2) a').click(function(){
  $('.tab-pane').hide();
  $('#rwdPra').show();
});

$('ul li:nth-child(3) a').click(function(){
  $('.tab-pane').hide();
  $('#WebEng').show();
});

$('ul li:nth-child(4) a').click(function(){
  $('.tab-pane').hide();
  $('#FR').show();
});

