const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getIcon(){
        return '<i class="fas fa-coffee"></i>';
    }
};

module.exports = Manager;