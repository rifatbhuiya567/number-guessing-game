let playerOneInput = document.querySelector(".playerOneInput"),
    playerOneBtn = document.querySelector(".playerOneBtn"),
    playerTwoInput = document.querySelector(".playerTwoInput"),
    playerTwoBtn = document.querySelector(".playerTwoBtn"),
    playerErr = document.querySelector(".playerOneErr"),
    storeNumber = "",
    playerOne = document.querySelector('.playerOne'),
    playerTwo = document.querySelector('.playerTwo'),
    chance = document.querySelector('.chance'),
    playerTwoErr = document.querySelector('.playerTwoErr')

playerOneBtn.addEventListener('click', function(){
    if(Boolean(playerOneInput.value)) {
        if(Boolean(playerOneInput.value - 100)) {
            if(playerOneInput.value > 0 && playerOneInput.value <= 10) {
                playerOneInput.style.borderColor = "green"
                playerErr.innerHTML = ""

                storeNumber = playerOneInput.value

                playerOne.style.display = 'none'
                playerTwo.style.display = 'block'
            }else {
                playerOneInput.style.borderColor = "red"
                playerErr.innerHTML = "Number will be higher than 0 & smaller than 11"
                playerErr.style.color = "red"
            }
        }else {
            playerOneInput.style.borderColor = "red"
            playerErr.innerHTML = "Give a number"
            playerErr.style.color = "red"
        }
    }else {
        playerOneInput.style.borderColor = "red"
        playerErr.innerHTML = "Give a value to start this game"
        playerErr.style.color = "red"
    }
    
})

playerTwoBtn.addEventListener('click', function(){
    if(Boolean(playerTwoInput.value)) {
        if(Boolean(playerTwoInput.value - 100)) {
            if(playerTwoInput.value > 0 && playerTwoInput.value <= 10) {
                if(storeNumber == playerTwoInput.value) {
                    playerTwoErr.innerHTML = "Player 2 Winner!"
                    playerTwoErr.style.color = "green"

                    playerTwoInput.style.display = 'none'
                    playerTwoBtn.style.display = 'none'
                }else {
                    chance.innerHTML--

                    if(chance.innerHTML == 0) {
                        playerTwoErr.innerHTML = "Player 1 Winner!"
                        playerTwoErr.style.color = "green"

                        playerTwoInput.style.display = 'none'
                        playerTwoBtn.style.display = 'none'
                    }
                }
            }else {
                playerTwoInput.style.borderColor = "red"
                playerTwoErr.innerHTML = "Number will be higher than 0 & smaller than 11"
                playerTwoErr.style.color = "red"
            }
        }else {
            playerTwoInput.style.borderColor = "red"
            playerTwoErr.innerHTML = "Give a number"
            playerTwoErr.style.color = "red"
        }
    }else {
        playerTwoInput.style.borderColor = "red"
        playerTwoErr.innerHTML = "Give a value to win this game"
        playerTwoErr.style.color = "red"
    }
    
})
