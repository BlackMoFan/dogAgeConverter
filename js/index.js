const convert = dogsAge => {
    let dogsHumanAge = 0; //initialize to 0
    //let dogsAge = 2; // user input for dog age
    let earlyYears = 2; //first 2 years of a dog's life in human years count as 10.5 dog years
    let laterYears = dogsAge - earlyYears;
    if (dogsAge < 2) {
        dogsHumanAge += dogsAge * 10.5;
    } else {
        dogsHumanAge += ((earlyYears * 10.5) + (laterYears * 4));
    }
    return dogsHumanAge;
}

let button = document.querySelector("button");

const convertToHumanYears = () => {
    let converted = document.getElementById("convertedAge");
    let adultImage = document.getElementById("adultDogImage");
    let puppyImage = document.getElementById("puppyImage");
    let seniorImage = document.getElementById("seniorDogImage");
    let inputField = document.getElementById("ageOfDog");
    let inputAge = inputField.value;
    if (!inputAge) {
        let message = "You forgot to enter the age.";
        adultImage.style.visibility = "hidden";
        puppyImage.style.visibility = "hidden";
        seniorImage.style.visibility = "hidden";
        converted.innerHTML = message;
    } else {
        if (inputAge < 0) {
            let message = "Please enter a valid number.";
            adultImage.style.visibility = "hidden";
            puppyImage.style.visibility = "hidden";
            seniorImage.style.visibility = "hidden";
            converted.innerHTML = message;
        } else {
            adultImage.style.visibility = "hidden";
            puppyImage.style.visibility = "hidden";
            seniorImage.style.visibility = "hidden";
            let convertedAge = convert(inputAge);
            let message = `Your dog's human age is ${convertedAge}`;
            if (convertedAge <= 18) {
                puppyImage.style.visibility = "visible";
            } else if (convertedAge > 18 && convertedAge < 60) {
                adultImage.style.visibility = "visible";
            } else {
                seniorImage.style.visibility = "visible";
            }
            converted.innerHTML = message;
            //alert(convertedAge);
        }
    }
    inputField.value = '';
};

button.onclick = convertToHumanYears;

const themeToggler = document.getElementById("theme-toggler");

//change theme 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    let sun_icon = document.getElementById("sun");
    let moon_icon = document.getElementById("moon");
    if (moon_icon.style.color === "orange") {
        sun_icon.style.color = "orange";
        moon_icon.style.color = "#000";
    } else {
        sun_icon.style.color = "#fff";
        moon_icon.style.color = "orange";
    }
});
