/*==========
  Split words and wrap them into span
 =========*/
function wordSplit(){
  $('.word').each(function(){
    var characters = $(this).text().split('');

    $(this).empty();

    $.each(characters, function(index, char){
      $('.word').append('<span>'+ char + '</span>');
    });
  });
}

/*==========
  Count the number of span and apply them in a loop
  =========*/
function countChars(){
  var countChar = $('.word span').length;
  for(var count=1; count <= countChar; count++){
    $('.word span:nth-child('+ count +')').css({'animation-delay': count/10 +'s'});
  }
}

$(document).ready(function(){
  wordSplit();
  countChars();
});

$('#onDemandText').on('blur', function(){
  var text = $(this).val();
  $('.word').text(text);
    wordSplit();
    countChars();
});