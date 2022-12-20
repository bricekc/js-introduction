import { add, adultFilter, ageAverage } from "./introduction";
export function createHtmlUser(age)
{
    let li = document.createElement("li");
    li.classList.add("user");
    li.innerHTML +=  "<input type='text' value='Name' class='input user__name'>";
    li.innerHTML += "<input type='number' value='"+age+"'class='input user__age'>";
    li.innerHTML += "<button value='delete' class='input user__delete'>delete</button>";
    return li;
}

export function setAddUserEltCallback(addUserElt, usersElt, infoElt)
{
    infoElt = infoElt || null;
    addUserElt.addEventListener("click", event =>
    {
        let age = Math.floor(Math.random() * 42);
        let userElt = createHtmlUser(age);
        usersElt.appendChild(userElt);
        if (infoElt !== null)
        {
            updateAgeAverage(usersElt, infoElt);
            setUserEltCallbacks(userElt, usersElt,infoElt);
        }
    });

}

export function extractUser(usersElt)
{
    let user = {
        name: usersElt.getElementsByClassName("user__name")[0].value,
        age: parseInt(usersElt.getElementsByClassName("user__age")[0].value,10)
    };
    return user;
}

export function extractUsers(usersElt)
{
    let listUser = Array.from(usersElt.querySelectorAll('li.user'));
    let users = [];
    for(let user of listUser)
    {
        users.push(extractUser(user));
    }
    return users;
}

export function extractUserType(infoElt)
{
    let radios = Array.from(infoElt.querySelectorAll('input[type="radio"]'))
    let res;
    for(let valeur of radios)
    {
        if(valeur.checked)
        {
            res = valeur.value;
        }
    }
    return res;
}

export function updateAgeAverage(usersElt, infoElt)
{
    let moyenne = ageAverage(extractUsers(usersElt), extractUserType(infoElt));
    let info = infoElt.querySelector('span.info__age-average');
    info.innerText ="";
    if(moyenne !==null)
    {
        info.innerText = String(parseFloat(moyenne).toFixed(2));
    }
}

export function setUserEltCallbacks(userElt, usersElt, infoElt)
{
    let button = userElt.querySelector(".user__delete");
    button.addEventListener("click", function ()
    {
        userElt.remove();
        updateAgeAverage(usersElt, infoElt);
    });

    let button_Modif = userElt.querySelector(".user__age");
    button_Modif.addEventListener("change", function ()
    {
        updateAgeAverage(usersElt, infoElt);
    });
    updateUserClassName(userElt)
}
export function setAgeTypeEltEvents(usersElt, infoElt)
{
    let form =infoElt.querySelector(".info__age-average-type");
    form.addEventListener("click", function ()
    {
        let usersAdulte = adultFilter(usersElt);
        updateAgeAverage(usersAdulte,infoElt);
    });
}
export function updateUserClassName(userElt) {
    const age = userElt.querySelector('.user__age').value;
    if (age < 18) {
      userElt.classList.add('user--child');
    } else {
      userElt.classList.remove('user--child');
    }
  }