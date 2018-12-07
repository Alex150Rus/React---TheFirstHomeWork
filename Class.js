class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  get displayInfo() {
    return `Человек ${this.name}, возраст -  ${this.age}, рождён - ${this.dateOfBirth}`;
  }
}

class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }

  get displayInfo() {
    return `${super.displayInfo}, зарплата - ${this.salary}, отдел - ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
    this.developers = [];
  }

  addDeveloper(developer) {
    for (let i = 0; i < arguments.length; i++) {
      if (!this.developers.includes(arguments[i])) {
        this.developers.push(arguments[i]);
        arguments[i].manager = this;
      } else console.log('у него уже есть менеджер');
    }
  }

  removeDeveloper(developer) {
    for (let i = 0; i < arguments.length; i++) {
      this.developers = this.developers.filter(element => element !== arguments[i]);
      arguments[i].manager = 'none';
    }
  }

}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
  }

  get showManager() {
    console.log(this.manager);
  }

  set managerForDeveloper(manager) {
    if (this.manager !== manager) {
      this.manager = manager;
      manager.addDeveloper(this);
    } else console.log ('Слишком много командиров для меня одной))')
  }
}

