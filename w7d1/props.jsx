const createUser = (name, email, password, isAdmin) => {
  const user = {
    name,
    email,
    password,
    isAdmin,
    dateCreated: new Date(),
  };

  return user;
};

createUser(undefined, "bob@bob.com", undefined, true);

const createUserButBetter = (userProperties) => {
  // const user = {
  //   name: userProperties.name,
  //   email: userProperties.email,
  //   password: userProperties.password,
  //   isAdmin: userProperties.isAdmin,
  //   dateCreated: new Date(),
  // };

  const user = { ...userProperties, dateCreated: new Date() };

  return user;
};

createUser({ email: "bob@bob.com" });

$.ajax({ url: "http://google.com" });

const createSomething = (props) => {
  // const user = {
  //   name: userProperties.name,
  //   email: userProperties.email,
  //   password: userProperties.password,
  //   isAdmin: userProperties.isAdmin,
  //   dateCreated: new Date(),
  // };

  const user = { ...userProperties, dateCreated: new Date() };

  return user;
};



<a href="http://google.com" target="_blank" class="promo" />Link text !</a>


// href, target, class are called attributes in HTML
// href, "http://google.com"
// target, _blank
// class, promo

const attributes = {
  href:"...",
  target:"...",
  class:"..."
}
