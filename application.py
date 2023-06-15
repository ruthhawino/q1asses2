
class Recipe:
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info):
        self.name = name
        self.ingredients = ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method
        self.nutritional_info = nutritional_info
    
    def display_recipe(self):
        print(f"Recipe: {self.name}")
        print("Ingredients:")
        for ingredient in self.ingredients:
            print(f"- {ingredient}")
        print(f"Preparation Time: {self.preparation_time}")
        print(f"Cooking Method: {self.cooking_method}")
        print(f"Nutritional Information: {self.nutritional_info}")


class MoroccanRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info, spice_level):
        super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_info)
        self.spice_level = spice_level
    
    def display_recipe(self):
        super().display_recipe()
        print(f"Spice Level: {self.spice_level}")


class EthiopianRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info, injera):
        super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_info)
        self.injera_required = injera
    
    def display_recipe(self):
        super().display_recipe()
        print(f"Injera Required: {self.injera}")


class NigerianRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info,colored_rice):
        super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_info)
        self.colored_rice= colored_rice
    
    def display_recipe(self):
        super().display_recipe()
        print(f"Jollof Rice Variant: {self.colored_rice}")



# number 3

class Species:
    def __init__(self, name, diet, typical_lifespan):
        self.name = name
        self.diet = diet
        self.typical_lifespan = typical_lifespan

    def get_information(self):
        print(f"Species: {self.name}")
        print(f"Diet: {self.diet}")
        print(f"Typical Lifespan: {self.typical_lifespan} years")


class Predator(Species):
    def __init__(self, name, diet, typical_lifespan, hunting_style):
        super().__init__(name, diet, typical_lifespan)
        self.hunting_style = hunting_style

    def get_information(self):
        super().display_information()
        print(f"Hunting Style: {self.hunting_style}")


class Prey(Species):
    def __init__(self, name, diet, typical_lifespan, migration_pattern):
        super().__init__(name, diet, typical_lifespan)
        self.migration_pattern = migration_pattern

    def get_information(self):
        super().display_information()
        print(f"Migration Pattern: {self.migration_pattern}")


#Number4

class Artist:
    def __init__(self, name, country, musical_style, instruments):
        self.name = name
        self.country = country
        self.musical_style = musical_style
        self.instruments = instruments


class Performance:
    def __init__(self, artist, start_time, end_time, additional_info=None):
        self.artist = artist
        self.start_time = start_time
        self.end_time = end_time
        self.additional_info = additional_info



class Stage:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.scheduled_performances = []

    def add_performance(self, performance):
        self.scheduled_performances.append(performance)


# number5

class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return self.price * self.quantity

product1 = Product("mangoes", 10.0, 5)
product2 = Product("mellons", 20.0, 3)
product3 = Product("oranges", 15.0, 2)

total_value1 = product1.calculate_total_value()
total_value2 = product2.calculate_total_value()
total_value3 = product3.calculate_total_value()

print(f"Total value of {product1.name}: ${total_value1}")
print(f"Total value of {product2.name}: ${total_value2}")
print(f"Total value of {product3.name}: ${total_value3}")
