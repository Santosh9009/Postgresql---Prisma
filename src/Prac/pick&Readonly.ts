// Pick
interface User1{
  id: number, 
  name: string,
  age: number,
  email: string, 
  password: string
}

type Updated = Pick<User1 , 'name'| 'age'| 'password'>

type UpdatedOptional = Partial<Updated>

function UpdateUser(updatedata:UpdatedOptional){
  
}

UpdateUser({name: 'santosh',age: 34})


// readonly
type User2 = {
   name : string,
  readonly age : number
}

const user : User2 ={name:'santosh',age:3}

user.name = 'harjlsjf'
// user.age = 34  not possible bcz its readonly 

// exclude 
type Event1 = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event1, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK