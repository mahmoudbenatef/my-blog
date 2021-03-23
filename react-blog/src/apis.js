export  class MyApis{
    constructor() {
    this.currentUser = null;
    }
    getAllUsers (){
         return fetch(`https://jsonplaceholder.typicode.com/users`) .then(response => response.json())
                   }
     handleLogin  (email) {
        var allUsers=[]
        const users = this.getAllUsers().then( json => allUsers=json).then()
         setTimeout( () => {

             let authedUser = allUsers.filter((tmpUser)=>{
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
         },1000)

    }
}