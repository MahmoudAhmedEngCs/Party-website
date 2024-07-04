$(".openNav").click(function(){
  if ($("#leftMenu").width() <= 0) {
  $("#leftMenu").animate({ width:'250px'},50)
 $("#home-content").animate({marginLeft :'250px'},50)
}
  if ($("#leftMenu").width() > 0) {
    $("#leftMenu").animate({ width:'0px'},50)
    $("#home-content").animate({marginLeft :'0px'},50)
}})


$(".closebtn").click(function(){
  $("#leftMenu").animate({ width:'0px'},50)
 $("#home-content").animate({marginLeft :'0px'},50)
})


$("#leftMenu a").click(function(){
    
  var sectionId= $(this).attr("href");
  
  var positionOfSection = $(sectionId).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},100);
  
})
$('#sliderDown .toggle').click(function(){
  $('.inner').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});













window.onload = function() {
   
  countDownToTime("10 october 2025 9:56:00");
}

function countDownToTime(countTo) {

      let futureDate = new Date(countTo);
  futureDate = (futureDate.getTime()/1000);

  let now = new Date();
  now = (now.getTime()/1000);

  timeDifference = (futureDate- now);
      
 let days = Math.floor( timeDifference / (24*60*60));
 let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
 let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
 let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${ mins } m`);
  $('.seconds').html(`${ secs} s`)


  setInterval(function() {  countDownToTime(countTo); }, 1000);
}
