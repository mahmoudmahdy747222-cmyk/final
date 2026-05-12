console.log("hello");
let button=document.querySelector('button');
let nav=document.querySelector('nav');
let footer=document.querySelector('footer');
let head=document.querySelector('h1');
let categories=document.querySelector('.Categories');
let head3=document.
button.onclick =function(){
  if(document.body.style.backgroundColor==='black'){//for the main mood
  document.body.style.backgroundColor='white';
  nav.style.backgroundColor='#402009';
  nav.style.boxShadow='0px 3px 4px 3px #7f4412';
  button.style.boxShadow='0px 3px 4px 3px #7f4412';
  footer.style.backgroundColor='#402009';
  head.style.color='#402009';
  head.style.textShadow='0px 3px 4px #7f4412';
  categories.style.backgroundColor='white';
  }
  else{//for dark mode. 
  document.body.style.backgroundColor='black';
  nav.style.backgroundColor='black';
  button.style.boxShadow='0px 0px 10px -1px white';
  nav.style.boxShadow='0px 0px 10px -1px white';
  nav.style.color='white';
  footer.style.backgroundColor=('#141414');
  head.style.color=('white');
  head.style.textShadow='2px 2px 5px white';
  categories.style.backgroundColor='black';
  
  }
};
