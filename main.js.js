let bplus=document.getElementsByClassName("btn-plus")

// console.log(plus)

for(let add of bplus){
    add.addEventListener('click',function(){
        add.previousElementSibling.innerText++;
        somme()
    })
}

let moins=document.getElementsByClassName("btn-moins")
console.log(moins) 

for(let ibtn of moins){
    ibtn.addEventListener("click",function(){
        if(ibtn.nextElementSibling.innerText>0){
            ibtn.nextElementSibling.innerText--
        }
        somme()
    })
}

var deletB=Array.from(document.getElementsByClassName("btn-delete"))
console.log(deletB)
for(let bt of deletB){
    bt.addEventListener('click',function(){
        bt.parentNode.parentNode.remove()
        somme()
    })
    }
    function somme() {
        let quantityy =Array.from(document.getElementsByClassName("quantity"));
        console.log(quantityy,"ak")
        let prices = Array.from(document.getElementsByClassName("prx"));
        console.log(prices,"ab")
        let sum = 0;
      
        for (let i = 0; i < prices.length; i++) {
          sum += quantityy[i].innerHTML * prices[i].innerHTML;
          console.log(sum,"aa")
        }
        return (document.getElementById("prix-total").innerHTML =
      sum);
      }

      let hearts = Array.from(document.getElementsByClassName("fas fa-heart"));
      for (let i=0;i<hearts.length;i++) {
        hearts[i].addEventListener("click", function () {
           if (hearts[i].style.color == "red") {
         hearts[i].style.color = "gray";
           } else {
            hearts[i].style.color = "red";
           }
        });
      }