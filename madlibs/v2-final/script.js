(function(){
    'use strict';
    console.log('reading js');

    // madlib
    const madlib = document.querySelector('#madlib');
    // form submission
    const form = document.querySelector('form');
    // overlay 
    const madlibOverlay = document.querySelector('#madlib-overlay');
// close button 
   const closeBtn = document.querySelector('#close');

// error handling
    const errorMessage = document.querySelector('#error');


    form.addEventListener('submit', function(event){
        event.preventDefault();

        const questionOne = document.querySelector('#questionOne').value;

        const questionTwo = document.querySelector('#questionTwo').value;

        const questionThree = document.querySelector('#questionThree').value;
        const questionFour = document.querySelector('#questionFour').value;
        const questionFive  = document.querySelector('#questionFive').value;


        let myText;

        if (questionOne == '') {
            myText = "Please enter an answer!";
            document.querySelector('#questionOne').focus(); 
            errorMessage.innerHTML = myText;

        } else if (questionTwo == '') {
            myText = "Please enter an answer!";
            document.querySelector('#questionTwo').focus();
            errorMessage.innerHTML = myText; 

            
        } else if (questionThree == '') {
            myText = "Please enter an answer!";
            document.querySelector('#questionThree').focus();
            errorMessage.innerHTML = myText;  


        } else if (questionFour == '') {
            myText = "Please enter an answer!";
            document.querySelector('#questionFour').focus();
            errorMessage.innerHTML = myText;


          } else if (questionFive == '') {
            myText = "Please type in an answeer!";
            document.querySelector('#questionFive').focus();
            errorMessage.innerHTML = myText; 


        } else {
    

            //MADLIB
            myText = `<h3>MadLib Result</h3>
                <p> Strutting down runway at New York Fashion Week, the sound of your <span>${questionTwo}</span> hitting the ground instantly captivates the audience. You're serving <span>${questionOne} </span>, a look that the audience didn't know they needed until you walked down the runway. Your choice of wearing <span> ${questionThree} </span> from head to toe was certaintly unexpected and a bit suspicious, but its clear that you can rock anything! Despite your nervousness from having all these eyes on you, you're grateful that you wore your <span>${questionFour}</span> as your lucky charm. No one can be as <span>${questionFive} </span> in the spotlight as you are!</p>`;

           


            document.querySelector('#questionOne').value = '';
            document.querySelector('#questionTwo').value = '';
            document.querySelector('#questionThree').value = '';
            document.querySelector('#questionFour').value = '';
            document.querySelector('#questionFive').value = '';


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
}());