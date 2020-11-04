/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class

$(".hot").each(function() {
    $(this).removeClass("hot");
    $(this).addClass("cool");
  });

// traverse the elements
$("#one").next().next().text("milk");


// add by clicking the plus sign
$('#add').click(addElement);

//add a new element

function addElement() {
  // add a new element
  $("#todo").append("<li><input type='text'></li>");

  $('input').blur(function(){
    $(this).parent().addClass("cool");

    var userinput = $(this).val();
  $(this).parent().text(userinput);
  $("li").click(changeStyle);
  });
  
}


//  click the li element will change the changeStyle
function changeStyle() {
  if($(this).hasClass('complete')){
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }else{
    //if the class is cool, remove it and add complete
    //if the class is hot, remove it and add complete
    //else, add complete
    $(this).addClass('complete');
  }

}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
 
 
}
