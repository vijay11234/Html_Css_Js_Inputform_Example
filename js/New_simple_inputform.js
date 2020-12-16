//making range button synchronised with values of user
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
//in range button the output shown should always be equal to value the user is updating
output.textContent = salary.value;
salary.addEventListener('input', function () 
{
    output.textContent = salary.value;
});

//uc1 -name starts with capital letter and min 3 letter
const text = document.querySelector('#text');

const textError = document.querySelector('.text-error');
//this will throw an event showing that name is incorrect or nothing

text.addEventListener('input', function () 
{
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value)) 
    {
        textError.textContent = "";
    }
    else 
    {
        textError.textContent = "Name is incorrect";
    }
});
