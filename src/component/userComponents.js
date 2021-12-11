import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"


console.log("User Component yüklendi.")



let user1 = new User(1, "Adem", "Taparci","Giresun")
let user2 = new User(2, "Zeynep", "Taparci","Ardahan")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




//userService.getById()
//userService.list()

let customer = {id:1, firstName:"Adem"}

//prototyping
customer.lastName = "Taparci"

console.log("-------------------------*----------------------*-------------*-------*")
userService.load()
userService.add(new Customer(1, "Ece", "Yılmaz","Konya",30))
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
