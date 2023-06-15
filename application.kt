//number2 

open class Recipe(
    val name: String,
    val ingredients: List<String>,
    val preparationTime: Int,
    val cookingMethod: String,
    val nutritionalInfo: String
) {
    fun displayRecipe() {
        println("Recipe: $name")
        println("Ingredients:")
        for (ingredient in ingredients) {
            println("- $ingredient")
        }
        println("Preparation Time: $preparationTime")
        println("Cooking Method: $cookingMethod")
        println("Nutritional Information: $nutritionalInfo")
    }
}

class MoroccanRecipe(
    name: String,
    ingredients: List<String>,
    preparationTime: Int,
    cookingMethod: String,
    nutritionalInfo: String,
    val spiceLevel: String
) : Recipe(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    override fun displayRecipe() {
        super.displayRecipe()
        println("Spice Level: $spiceLevel")
    }
}

class EthiopianRecipe(
    name: String,
    ingredients: List<String>,
    preparationTime: Int,
    cookingMethod: String,
    nutritionalInfo: String,
    val injera: Boolean
) : Recipe(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    override fun displayRecipe() {
        super.displayRecipe()
        println("Injera: $injera")
    }
}

class NigerianRecipe(
    name: String,
    ingredients: List<String>,
    preparationTime: Int,
    cookingMethod: String,
    nutritionalInfo: String,
    val coloredRice: String
) : Recipe(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
    override fun displayRecipe() {
        super.displayRecipe()
        println("coloreRice: $coloredRice")
    }
}



//number3

open class Species(val name: String, val diet: String, val typicalLifespan: Int) {
    open fun displayInformation() {
        println("Species: $name")
        println("Diet: $diet")
        println("Typical Lifespan: $typicalLifespan years")
    }
}

class Predator(name: String, diet: String, typicalLifespan: Int, val huntingStyle: String) :
    Species(name, diet, typicalLifespan) {
    override fun displayInformation() {
        super.displayInformation()
        println("Hunting Style: $huntingStyle")
    }
}

class Prey(name: String, diet: String, typicalLifespan: Int, val migrationPattern: String) :
    Species(name, diet, typicalLifespan) {
    override fun displayInformation() {
        super.displayInformation()
        println("Migration Pattern: $migrationPattern")
    }
}


//number 4













//Num5

class Product(val name: String, val price: Double, val quantity: Int) {
    fun calculateTotalValue(): Double {
        return price * quantity
    }
}
fun main(){

}
val product1 = Product("mangoes", 10.0, 5)
val product2 = Product("mellons", 20.0, 3)
val product3 = Product("oranges", 15.0, 2)

val totalValue1 = product1.calculateTotalValue()
val totalValue2 = product2.calculateTotalValue()
val totalValue3 = product3.calculateTotalValue()

println("Total value of ${product1.name}: $$totalValue1")
println("Total value of ${product2.name}: $$totalValue2")
println("Total value of ${product3.name}: $$totalValue3")

