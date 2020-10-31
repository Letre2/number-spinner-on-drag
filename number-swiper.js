jQuery(document).ready(function ($) {

$('.number-spinner').mousedown(function(e) {
  let clickedElement = $(".number-spinner");
  let clickX = e.clientX;
  let clickY = e.clientY;
  let actValue = parseFloat($(clickedElement).text());

  let min = parseFloat($(clickedElement).attr("data-min"));
  let max = parseFloat($(clickedElement).attr("data-max"));
  let steps = parseFloat($(clickedElement).attr("data-stepper"));


  $(window).mousemove(function(e) {
    let actX = e.clientX;
    let actY = e.clientY;

    let distX = actX - clickX;

  //  let value = $(clickedElement).text();

    let newValue = actValue + distX * steps;
    $(clickedElement).removeClass('fast slow');

    if (actY < clickY - 20) {
      newValue = actValue + distX * steps / 50;
      $(clickedElement).addClass('fast');

    } else if (actY > clickY + 20) {
      newValue = actValue + steps * distX/50;
      $(clickedElement).addClass('slow');

    }

    actValue = newValue;
    clickX = actX;

    displayedValue = Math.round(actValue);
    actValue = Math.min(actValue, max);
    actValue = Math.max(actValue, min);

    $(clickedElement).text( displayedValue );
    
    let fistValueString = String(displayedValue).charAt(0);
    let fistValue = Number(fistValueString);

    let secondValueString = String(displayedValue).charAt(1);
    let secondValue = Number(secondValueString);


    var column1 = $(".number-swiper-column-1 li").get(secondValue);
    var column2 = $(".number-swiper-column-2 li").get(fistValue);

    //console.log(column2);
  

   column1.scrollIntoView({behavior: "auto", block: "center"});
   column2.scrollIntoView({behavior: "smooth", block: "center"});
   
   
  });


  $(window).mouseup(function(e) {
    $(window).off("mousemove");
    $(clickedElement).removeClass('fast slow');


  });
});

});


/* function() {
  $(".number-swiper-column-1 li").animate({
      scrollTop: column1.offset().top
  }, 2000);
});
 */