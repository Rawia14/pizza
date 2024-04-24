import User from "../models/security/user";
import AuthenticationService from "./AuthenticationService";

class UserService {

    static async save(newUser: User): Promise<User> {
        return fetch(`http://localhost:8080/user/`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json",
              authorization: AuthenticationService.getJwt(),
            },
          })  

          .then((user) => user.json())
          .catch((error) => {
            console.error(error);
            throw error;
          });
      }
    }
    
    export default UserService;
            
        
    
