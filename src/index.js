import { setAddUserEltCallback, updateAgeAverage, setAgeTypeEltEvents } from "./users-ui";

let addUserElt = document.querySelector("button.user-data__add");
let userElt  = document.querySelector("ul.users");
let infoElt = document.querySelector("article.info")
setAddUserEltCallback(addUserElt, userElt, infoElt);
setAgeTypeEltEvents(userElt, infoElt);