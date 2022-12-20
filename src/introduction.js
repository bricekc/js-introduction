export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return b - a;
}

export function sum(a) {
  let res = 0;
  // eslint-disable-next-line no-plusplus
  for (let i=0; i<a.length; i++)
  {
    res+=a[i];
  }
  return res;
}

export function addToAll(values, toAdd)
{
  const res = values.map(x => x+toAdd);
  return res;
}

export function average(values)
{
  let sum = 0;
  if (values.length == 0)
  {
    return null;
  }
  else
  {
    for (let i=0; i<values.length; i++)
    {
      sum+=values[i];
    }
    let size = values.length;
    return sum/size;
  }
}

export function isAdult(user)
{
  if (user.age >=18)
  {
    return true;
  }
  else
  {
    return false;
  }
}

export function isChild(user)
{
  if (user.age <18)
  {
    return true;
  }
  else
  {
    return false;
  }
}

export function extractAge(users)
{
  let res = [];
  for (let i=0; i < users.length; i++)
  {
    res.push(users[i].age);
  }
  return res;
}

export function adultFilter(users, type)
{
  if (type == "adult")
  {
    return users.filter(user => isAdult(user));
  }
  else if (type == "child")
  {
    return users.filter(user => isChild(user));
  }
  else
  {
    return users;
  }
}

export function ageAverage(users, type)
{
  let userstype = adultFilter(users, type);
  let sumage = extractAge(userstype);
  return average(sumage);
}

export function isAllAdult(users)
{
  return users.every(isAdult);
}

export function hasChild(users)
{
  return users.some(isChild);
}

export function addIsAdultProperty(users)
{
  let copyUsers = [];
  for (let i=0;i<users.length;i++)
  {
    let adult = {isAdult: isAdult(users[i])}
    copyUsers.push({...users[i], ...adult}); 
  }
  console.log(copyUsers);
  return copyUsers;
}