let counter = 0;
let bonus = 1;

document.getElementById('clicker').addEventListener('click', () => {

    const healthBar = document.getElementById("healthBar")
    if (parseFloat(healthBar.style.width) > 0){
        counter += bonus;
        document.getElementById('counter').innerText = counter;
        document.getElementById("healthBar").style.width = `${parseFloat(healthBar.style.width) - 10}px`
        if (parseFloat(healthBar.style.width) < 350 ){
            setTimeout(() => {
                document.getElementById("healthBar").style.width = `${parseFloat(healthBar.style.width) + 10}px`
            }, 5000)
        }
    }
})

document.getElementById("bonus").addEventListener("click", () =>{
    if (counter >= 10){
        document.getElementById("counter").innerText = counter - 10
        counter -= 10
        bonus += 1
    }
})