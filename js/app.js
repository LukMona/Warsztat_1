
document.addEventListener("DOMContentLoaded", function(){

  /* Wysuwane menu */
  var list = document.querySelectorAll(".nav>ul>li");
  var pointer = document.querySelectorAll(".nav_pointer_before");

  console.log(list);
  console.log(pointer);

  for(var i = 0; i < list.length; i++){
    list[i].addEventListener("mouseover", function(event){
      if(this.children.length > 0){
        this.children[0].style.display = "block";
        pointer[0].style.display = "block";
      };
    });

    list[i].addEventListener("mouseout", function(event){
      if(this.children.length > 0){
        this.children[0].style.display = "none";
        pointer[0].style.display = "none";
      };
    });
  };

  /* SLIDER z krzesłami */

  console.log("*** slider z krzesłami ***");

 var prevButton = document.querySelector(".section1__turn_left");
 var nextButton = document.querySelector(".section1__turn_right");
 var sliderDiv = document.querySelector(".slider");
 var listItems = document.querySelectorAll(".slider li")
 var visiblePictureIndex = 0;

 console.log(prevButton);
 console.log(nextButton);
 console.log(sliderDiv);
 console.log(listItems);
 console.log(visiblePictureIndex);

listItems[ visiblePictureIndex ].classList.add("visible");

prevButton.addEventListener("click", function(event){
  console.log("click click");
  listItems [ visiblePictureIndex ].classList.remove("visible");
  visiblePictureIndex--;

  if(visiblePictureIndex < 0){
    visiblePictureIndex = listItems.length -1;
  };
  listItems[ visiblePictureIndex ].classList.add("visible");
});

nextButton.addEventListener("click", function(event){
  console.log("click click");
  listItems[ visiblePictureIndex ].classList.remove("visible");
  visiblePictureIndex++;
  if(visiblePictureIndex >= listItems.length){
    visiblePictureIndex = 0;
  }
  listItems[ visiblePictureIndex ].classList.add("visible");
});


  /* Znikające napisy na obrazkach */

console.log("*** znikające napisy ***");

  var invisibleText = document.querySelectorAll(".section2_invisible");
  console.log(invisibleText);

  for(var i = 0; i < invisibleText.length; i++){
    invisibleText[i].addEventListener("mouseover", function(event){
      this.children[0].style.display = "none";
    });

    invisibleText[i].addEventListener("mouseout", function(event){
      this.children[0].style.display = "block";
    });
  };



});
