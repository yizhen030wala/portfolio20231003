

$(window).mousemove(function(evt){
    var x = evt.pageX;
    var y = evt.pageY;
    console.log(x);

    if (x<$(window).width()/3 - 50){
      $("#me").attr("src","pic/IMG_4657.png");
    }else if (x>$(window).width()/1.5 + 50){
      $("#me").attr("src","pic/IMG_skills.png");
    }else{
      $("#me").attr("src","pic/IMG_4652.png");
    }
    if (x<$(window).width()/3 - 50 && y<$(window).height()/2){
      $("#me").attr("src","pic/IMG_edu.png");
    }
    if (x>$(window).width()/1.5 + 50 && y<$(window).height()/2){
      $("#me").attr("src","pic/IMG_4656.png");
    }
    
    
  });

var s = skrollr.init()
  