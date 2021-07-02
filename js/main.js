


if ($("#title").html() !="Blood Bank"){

  $(".navbar").css({
    backgroundColor: "rgba(0,0,0,0.5)",
    transition: "all 1s",
  });
  $(".Navpages").attr("href","index.html");
 $(".listdisplay").css({
    display: "none",
  });
 
  }



$(window).scroll(function () {
  if ($("#title").html()=="Blood Bank"){
  
  let scrollValue = $(window).scrollTop();
  let BenefitsSectionOffset = $("#Benefits").offset().top;

  if (scrollValue >= BenefitsSectionOffset - 70) {
    $(".navbar").css({
      backgroundColor: "rgba(0,0,0,0.5)",
      transition: "all 1s",
    
    });

   
  } else {
    $(".navbar").css({
      backgroundColor: "transparent",
      transition: "all 1s",
    });


  }

  }


  
});





$(".dropdown-item,.Navhome,.Navcontact").click(function () {
  let selectorSection = $(this).attr("href"); 
 
  let offsetSection = $(selectorSection).offset().top;

  $("body,html").animate(
    {
      scrollTop: offsetSection,
    },
    1000
  );


 
  
});



