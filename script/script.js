$(document).ready(function (){
  let bomb=[];
  let contador=0;
  let hits=0;
  let timeValue;
   
  function generateBomb() {
      for (let i=0; i<6; i++) {
      bomb.push(Math.floor(Math.random()*53)+1)
    }
  
  }

  function removeDuplicates(arr) {
    let sorted_arr = arr.slice().sort();
    do {
    for (var j = 0; j < sorted_arr.length - 1; j++) {
      if (sorted_arr[j + 1] === sorted_arr[j]) {
        bomb =[]
        generateBomb()
      }
    }
  } while (sorted_arr[j + 1] === sorted_arr[j])
  }

  function time() {
    contador++;  
  }
  
  $(".go_game").click(function (){    
    $(".bg_game").fadeIn();
    $("header").fadeOut()
  });

  $(".button_start").click(function (){    
    hits=0;
    bomb=[];
    contador=0;
    $(".tittle").hide()
    $(`.button_game`).css({"background-color":"blue", "pointer-events": "auto"}).prop("disabled", false)
    $(".button_start").hide()  
    generateBomb();
    removeDuplicates(bomb)
    time();
    timeValue = setInterval(time,1000); 
    console.log(bomb)

   
    });

  $(".button_game").click(function (){   
    n = $(this).attr("value");  
    hits++
    $(`.button_game:nth-child(${n})`).css({"background-color":"green", "pointer-events": "none"}).prop("disabled", true);

    function iterate(item) {
      if (item == n) {
        $(".button_game").prop("disabled", true).css("pointer-events", "none");
        $(`.button_game:nth-child(${n})`).css("background-color", "red");
        $(".popup-overlay_fail, .popup-content_fail").show();
        clearInterval(timeValue);
      }

      else if ((item +1) == n || (item -1) == n) {      
        $(`.button_game:nth-child(${n})`).css({"background-color":"#ffa500", "pointer-events": "none"}).prop("disabled", true);
      }

      else if ((item +2) == n || (item -2) == n) {
        $(`.button_game:nth-child(${n})`).css({"background-color":"#FFFF00", "pointer-events": "none"}).prop("disabled", true);   
      }
  
      if(hits==48) {
        n=item
        bomb2=[];
        hits=0;
        clearInterval(timeValue)
        $(`.button_game:nth-child(${n})`).css("background-color", "red"); 
        $(".button_start").show()     
        $(".popup-overlay_success, .popup-content_success").show();
        $('#heading').text(`Wow you did it in...${contador}s!`);
      }
    }
     bomb.forEach(iterate)

  });

  $(".close, .popup").on("click", function(){
    $(".popup,.popup-overlay_fail, .popup-content_fail").hide();
    $(".popup,.popup-overlay_success, .popup-content_success").hide();
    $('#heading').text(`Wow you did it in...${contador}s!`).hide();
    $(".button_start").show();

  });


});









    






 