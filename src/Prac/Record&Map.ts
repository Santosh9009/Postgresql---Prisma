// Record

type Users5 = {
  [key: string]:{
    id: number,
      username: string
  }
}
// or
type User6 = Record<string,{id: number, username: string}>



const users: User6 = {
  'rahitsf':{
    id: 3,
    username:'fdljslfjsfj'
  },
  'dslk':{
    id:34,
    username: 'slfjdslfj'
  }
}

// Map

type User7 = {
  name: string,
  age: number
}

const mrUser = new Map<string,User7>()
mrUser.set('user1',{name:'santosh',age:6})

console.log(mrUser.get('user1'))