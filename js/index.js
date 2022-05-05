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
    let inputAge = document.getElementById("ageOfDog").value;
    if (!inputAge) {
        let message = "You forgot to enter the age.";
        converted.innerHTML = message;
    } else {
        if (inputAge < 1) {
            let message = "Please enter a valid number.";
            converted.innerHTML = message;
        } else {
            let convertedAge = convert(inputAge);
            let message = `Your dog's human age is ${convertedAge}`;
            converted.innerHTML = message;
            //alert(convertedAge);
        }
    }
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
