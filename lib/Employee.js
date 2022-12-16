
class Employee {
    // creates a new object for every instnce when called//
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    } 
    
    getName () {
        return this.name;
    }
    
    getEmail () {
        return this.email;
    }

    getId () {
        return this.id;
    }

    getRole () {
        return "Employee"
    }
}

module.exports = Employee;