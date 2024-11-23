let date = prompt("Entrez une date au format dd/mm/aaaa");

const isValidDate = (date) => {   
    let partsOfDate = date.split("/");

    if(partsOfDate.length !== 3){      
        console.log("Mauvais format");
        return;
    }

    let day = Number(partsOfDate[0]);
    let month = Number(partsOfDate[1]);
    let year = Number(partsOfDate[2]);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        console.log("La date contient des caractères invalides");
        return;
    }
  
    if (year < 1000 || year > 9999 || month < 1 || month > 12 || day < 1) {
        console.log("La date est invalide");
        return;
    }

    const maxDaysInMonth = (month,year) =>{

        const month31days = [1, 3, 5, 7, 8, 10, 12];
        const month30days = [4, 6, 9, 11];

            if (month31days.includes(month)) {
                return 31;
            };
            if (month30days.includes(month)) {
                return 30;
            };
            if (month === 2) {
                return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 29 : 28;    
            }           
  };

        const maxDays = maxDaysInMonth(month,year);
            if(day > maxDays){
                console.log('Le nombre de jours ne correspond pas à ce mois ci');
                return;
  }
};
isValidDate(date);

const isPalindrome = (date) =>{ 

        const len = date.length;  
        for (let i = 0; i < len / 2; i++) {   
            if (date[i] !== date[len - 1 - i]) {  
                console.log('Non palindrome');  
                return false;
            }  
        }  
        console.log('Palindrome'); 
        return true; 
};
 isPalindrome(date);


