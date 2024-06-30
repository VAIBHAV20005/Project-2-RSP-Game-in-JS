let userscore = 0;
let compscore = 0;
let userchoice;
let winnershow = document.getElementById('winnershow');
let usb = document.getElementById('us');
let csb = document.getElementById('cs');
const choices = document.querySelectorAll('.choice');

const gencompchoice = () =>{
    const options = ['Rock','Paper','Scissors']
    let randID = Math.floor(Math.random() * 3);
    return options[randID];
}
let showwinner = (userwin,userchoice ,compchoice) =>{
  if(userwin == true)
    {
      userscore++;
      winnershow.innerText = `You Won! ${userchoice} Beats ${compchoice}`;
      winnershow.style.backgroundColor = 'green';
      usb.innerText = userscore;
      
    }
    else{
      compscore++;
      console.log("You Lose");
      winnershow.innerText  = `You Lose ${compchoice} Beats ${userchoice}`;
      winnershow.style.backgroundColor = 'red';
      csb.innerText = compscore;
      
    }
}


const playgame = (userchoice) => {
 console.log("User choice =", userchoice);
 // generate the Computer-choices..
 let compchoice = gencompchoice();
 console.log('Computer choice:',compchoice);

 if(userchoice === compchoice)
  {
    // Game was Draw..
    winnershow.innerText = 'Game Was Draw! Play Again.';
    winnershow.style.backgroundColor = 'yellow';
    winnershow.style.color = 'black';
  }
  else{
    let userwin = true;
    if(userchoice === "Rock")
    {
        // Comp will Chose Paper,Scissors
        userwin = compchoice ==='Papper' ? false : true ;
    }
    else if (userchoice === 'Paper')
      {
        userwin = compchoice === 'Scissors' ? false : true;
      }
      else
        {
          userwin = compchoice === 'Rock' ? false : true;
        }
        showwinner(userwin ,userchoice , compchoice);
  }
};

choices.forEach((choice) => {
 choice.addEventListener('click',()=> {
   userchoice = choice.getAttribute('id'); // Defines the Choice of User.
  playgame(userchoice);
 });
});

console.log("RSP GAMEE....")