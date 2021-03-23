export  class MyApis{
    constructor() {
    this.currentUser = null;
    this.allUsers= null;
    this.getAllUsers()
    }
    getAllUsers (){
         return fetch(`https://jsonplaceholder.typicode.com/users`) .then(response => response.json()
             .then((users) => this.allUsers = users ))
                   }
     handleLogin  (email) {
        // var allUsers=[]
        //         allUsers=json
                let authedUser = this.allUsers.filter((tmpUser)=>{
                    if(tmpUser.email == email)
                    {
                        console.log(tmpUser.email)
                        return tmpUser
                    }
                })
                if (authedUser[0].id)
                {
                    this.currentUser= authedUser[0].id;
                    return authedUser[0].id
                }
                else return {}
        }

}