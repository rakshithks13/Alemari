//testing the code

// Variables with type annotations
let username: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Array and Tuple
let skills: string[] = ["JavaScript", "TypeScript", "React"];
let user: [string, number] = ["Alice", 25];

// Function with parameter and return types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(username));

// Interface
interface Employee {
  id: number;
  name: string;
  department?: string; // Optional property
}

// Class with constructor and method
class Manager {
  private employees: Employee[] = [];

  addEmployee(emp: Employee): void {
    this.employees.push(emp);
  }

  listEmployees(): void {
    console.log("Employees:", this.employees);
  }
}

const mgr = new Manager();
mgr.addEmployee({ id: 1, name: "Alice" });
mgr.addEmployee({ id: 2, name: "Bob", department: "Sales" });
mgr.listEmployees();
