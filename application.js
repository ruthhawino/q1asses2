//2. African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.


 SudoCode 

 input  =
// 1 unique ingredients
// 2 preparation Time,
// 3 cooking method,
// 4 nutritional information 

 Process=

// Creating a base class AfricanRecipe with all the inputs
// Creating subclasses for different countries containing MoroccanRecipe,
// EthopianRecipe and NigeriaRecipe  with their own unique properties and methods.

Output = 
// Diferent african  countries recipse with all unique properties.


class Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
      this.name = name;
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
      this.nutritionalInfo = nutritionalInfo;
    }
  
    displayRecipe() {
      console.log(`Recipe: ${this.name}`);
      console.log("Ingredients:");
      for (let ingredient of this.ingredients) {
        console.log(`- ${ingredient}`);
      }
      console.log(`Preparation Time: ${this.preparationTime}`);
      console.log(`Cooking Method: ${this.cookingMethod}`);
      console.log(`Nutritional Information: ${this.nutritionalInfo}`);
    }
  }
  
  class MoroccanRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, spiceLevel) {
      super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.spiceLevel = spiceLevel;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`Spice Level: ${this.spiceLevel}`);
    }
  }
  
  class EthiopianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, injera) {
      super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.injera= injera;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`Injera: ${this.injera}`);
    }
  }
  
  class NigerianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo,coloredRice) {
      super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.coloredRice= coloredRice;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`colored Rice: ${this.coloredRice}`);
    }
  }
 
  

//3. Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance./   

sudocode 

input = 
//animalDiet,Species,lifespan,Migration
//process =creating  base class where we inherit from and a method that displayys attributes
//creat subclasses with methods tht will identify their unique lifestyle,

Output=

//  Different animals species with their unique lifespan
//  and the diet they feed onand  the miggration patter







class Species {
    constructor(name, diet, typicalLifespan) {
      this.name = name;
      this.diet = diet;
      this.typicalLifespan = typicalLifespan;
    }
  
    getInformation() {
      console.log(`Species: ${this.name}`);
      console.log(`Diet: ${this.diet}`);
      console.log(`Typical Lifespan: ${this.typicalLifespan} years`);
    }
  }
  
  class Predator extends Species {
    constructor(name, diet, typicalLifespan, huntingStyle) {
      super(name, diet, typicalLifespan);
      this.huntingStyle = huntingStyle;
    }
  
    getInformation() {
      super.displayInformation();
      console.log(`Hunting Style: ${this.huntingStyle}`);
    }
  }
  
  class Prey extends Species {
    constructor(name, diet, typicalLifespan, migrationPattern) {
      super(name, diet, typicalLifespan);
      this.migrationPattern = migrationPattern;
    }
  
    getInformation() {
      super.displayInformation();
      console.log(`Migration Pattern: ${this.migrationPattern}`);
    }
  }
  

  //Number4 

// 4. African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.  


sudocode =

// input =music Style ,instrument,
// different schedules ,
// musician country,and Name

process =
//  create  3 classes whichinclude 
// artist,perfomance,performance and stage
// include an methods 

output=
// Different artist ,
// time for PerformanceTiming,
// musicalstyle,
// instruments that each artist uses



class Artist {
    constructor(name, country, musicalStyle, instruments) {
      this.name = name;
      this.country = country;
      this.musicalStyle = musicalStyle;
      this.instruments = instruments;
    }
  }
  
  class Performance {
    constructor(artist, startTime, endTime) {
      this.artist = artist;
      this.startTime = startTime;
      this.endTime = endTime;
      
    }
  }
  
  class Stage {
    constructor(name, capacity) {
      this.name = name;
      this.capacity = capacity;
      this.scheduledPerformances = [];
    }
  
    addPerformance(performance) {
      this.scheduledPerformances.push(performance);
    }
  }
  

  //number5

//   Create a class called Product with attributes for name, price, and quantity.
//   Implement a method to calculate the total value of the product (price * quantity).
//   Create multiple objects of the Product class and calculate their total values.

sudocode =  

input=
// NAME OFTHE PRODUCT
// PRICE OF THE PRODUCT
//  QUANTITY OF THEPRODUCT

 PROCESS =
//  creat a class product
//  with the attributes name.price and quantity
//  implement a method for calculating total values of the products

  output= 
//  each product with thename,price,and quantity

class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    calculateTotalValue() {
      return this.price * this.quantity;
    }
  }
const product1 = new Product("Mangoes", 10, 5);
const product2 = new Product("Mellons", 20, 3);
const product3 = new Product("oranges", 15, 2);

const totalValue1 = product1.calculateTotalValue();
const totalValue2 = product2.calculateTotalValue();
const totalValue3 = product3.calculateTotalValue();

console.log(`Total value of ${product1.name}: $${totalValue1}`);
console.log(`Total value of ${product2.name}: $${totalValue2}`);
console.log(`Total value of ${product3.name}: $${totalValue3}`);

// /6. Implement a class called Student with attributes for name, age, and grades (a
//     list of integers). Include methods to calculate the average grade, display the
//     student information, and determine if the student has passed (average grade >=
//     60). Create objects for the Student class and demonstrate the usage of these
//     methods./
sudocode 

// input = 
// nameof each student
// age of the student
// grade of the student

// process 
// creating a classstudent
//  passing attributs of each student 
// implement methods that checks wether the student has passed or failed
// calculate average grade and 
// display student information

// output

// Nstudents information
// passed orfailed,
// average grade 




class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  
    calculateAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
  
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  
    displayStudentInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grades: ${this.grades.join(', ')}`);
    }
  
    hasPassed() {
      const averageGrade = this.calculateAverageGrade();
      return averageGrade >= 60;
    }
  }
const student1 = new Student("Ruth", 18, [85, 76, 92, 88]);
const student2 = new Student("awino", 20, [72, 60, 65, 70]);
const student3 = new Student("enmmy", 19, [45, 55, 50, 40]);

const averageGrade1 = student1.calculateAverageGrade();
const averageGrade2 = student2.calculateAverageGrade();
const averageGrade3 = student3.calculateAverageGrade();

console.log(`Average grade for ${student1.name}: ${averageGrade1}`);
console.log(`Average grade for ${student2.name}: ${averageGrade2}`);
console.log(`Average grade for ${student3.name}: ${averageGrade3}`);

student1.displayStudentInfo();
student2.displayStudentInfo();
student3.displayStudentInfo();

console.log(`${student1.name} has passed: ${student1.hasPassed()}`);
console.log(`${student2.name} has passed: ${student2.hasPassed()}`);
console.log(`${student3.name} has passed: ${student3.hasPassed()}`);


























