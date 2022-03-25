const req = require('../hooks/http');

const UserService = () => {
   
   const res = req("http://localhost:3001/api/users");
   res.then(data => console.log(data))
   

}

module.exports = UserService;
