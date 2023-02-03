    var randomNumber1 = Math.random(); 

    randomNumber1 = randomNumber1 * 6 + 1;

    randomNumber1 = Math.floor(randomNumber1);

    var randomDiceImage = "dice" + randomNumber1 + ".png";  //to get image dice1 to dice6

    var randomImageSource = "images/" + randomDiceImage; // images/dice1 to images/dice6

    var image1 = document.querySelectorAll("img")[0]; // select first img tag 
    image1.setAttribute("src", randomImageSource); 

    //for dice 2

    var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 6 + 1;

    randomNumber2 = Math.floor(randomNumber2);

    var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 
    var randomImageSource2 = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageSource2);

    //Selecting Winner

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩Play 1 Wins";
    }
    else{
        if(randomNumber1 < randomNumber2){
            document.querySelector("h1").innerHTML = "Player 2 wins🚩";
        }
        else{
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }