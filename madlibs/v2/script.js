
(function () {
    'use strict'; 
    console.log('reading JS'); 


    // the first two lines are an example of what  holding a reference  means 
const madlib = document.querySelector('#madlib'); 

const form = document.querySelector('#myForm');

const madlibOverlay = document.querySelector('#madlib-overlay');


const closeBtn = document.querySelector('#close');

const errorMessage = document.querySelector('#error');



form.addEventListener('submit', function(event){

    event.preventDefault();
    // alert('form submited'); 
    const questionOne = document.querySelector('#questionOne').value; 

   const questionTwo = document.querySelector('#questionTwo').value; 
   const questionThree = document.querySelector('#questionThree').value; 
   const questionFour = document.querySelector('#questionFour').value; 
     const questionFive = document.querySelector('#questionFive').value; 

let myText;


if (questionOne =='') {
    myText="please enter a name!";
    document.querySelector('#questionOne').focus();
    errorMessage.innerHTML= myText;
}

else if (questionTwo == '') {

      myText="please select an option";
    document.querySelector('#questionTwo').focus();
    errorMessage.innerHTML= myText;

}



else if (questionThree == '') {

      myText="please select an option";
    document.querySelector('#questionThree').focus();
    errorMessage.innerHTML= myText;


}

else if (questionFour == '') {

      myText="please enter your answer";
    document.querySelector('#questionFour').focus();
     errorMessage.innerHTML= myText;


}



else if (questionFive == '') {

      myText="please type in an adjective";
    document.querySelector('#questionFive').focus();
    errorMessage.innerHTML= myText;




     }
     
     
     
     else {


    myText=
    `<h2>Your Final Look</h2>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolore, <span>${questionOne}</span> minus odit nemo natus at delectus consequatur voluptatibus et quas accusantium, cumque magnam iure repudiandae ipsa aliquid <span>${questionTwo}</span>, molestias quia? <span>${questionThree}</span> molestiae nam delectus aspernatur, aliquam laboriosam obcaecati, enim ad impedit doloremque amet similique! <span>${questionFour}</span> nisi quisquam pariatur et nihil a vel? Consectetur in ducimus necessitatibus voluptatem repudiandae sequi quas voluptate dignissimos asperiores! <span>${questionFive}</span> Tempora ea qui quibusdam.</p>`


// clears form
document.querySelector('#questionOne').value= ''; 
document.querySelector('#questionTwo').value= ''; 
document.querySelector('#questionThree').value= ''; 
document.querySelector('#questionFour').value= ''; 
document.querySelector('#questionFive').value= ''; 



madlib.innerHTML = myText; 


 madlibOverlay.style.display = "block";

   
}

 });

 closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        madlibOverlay.style.display = "none";
    });

document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {
        madlibOverlay.style.display = "none";

    }




 });
 
})(); 