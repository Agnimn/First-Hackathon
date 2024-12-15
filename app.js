const createMusicSymbol = () => {
    const symbol = document.createElement('div');
    symbol.className = 'music-symbol';
    symbol.textContent = ['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)];
    symbol.style.left = Math.random() * 100 + 'vw';
    symbol.style.animationDuration = Math.random() * 5 + 3 + 's';
    document.body.appendChild(symbol);

    symbol.addEventListener('animationend', () =>{
      symbol.remove();
    });
};
  setInterval(createMusicSymbol,300);

document.querySelector("#next-link").addEventListener("click",function(event){
  var emailInput = document.querySelector("#email");{
    if (emailInput.value === ""){
      event.preventDefault();
      alert("Enter email");
    }
  }
});