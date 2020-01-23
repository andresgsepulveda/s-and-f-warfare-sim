
# Specifications for S&F Warfare Sim

## Units

  1. The user should have the ability to create a unit to S&F specifications
     - Provide ability to input data to the website
       - Save data via cache / cookies.
       - Allow user to upload / download .json files for easy loading. 
     - Provide list of inputted units
     - 

  2. Each Unit should store the following
     - Name of Unit : String

     - Ancestry: Ancestry Class
      - Should store:
        - Ancestry Name: String
        - ATK Bonus: Integer
        - POW Bonus: Integer
        - DEF Bonus: Integer
        - TUF Bonus: Integer
        - MOR Bonus: Integer
        - Default Traits: Trait Class
          - References the head trait that is connected to the other ones. 

     - Experience: Class
      - Should store the following:
        - Experience Level: Enum
          - None(Levies), Green, Regular, Seasoned, Veteran, Elite, Super-Elite
        - ATK Bonus: Integer
        - POW Bonus: Integer
        - DEF Bonus: Integer
        - TUF Bonus: Integer
        - MOR Bonus: Integer
        - Experience Cost: Integer
          - Based on Level of Unit

     - Equipment: Class:
       - Should store the following
          - Equipment Level: Enum
            - None(Levies), Light, Medium, Heavy, Super-Heavy
        - ATK Bonus: Integer
        - POW Bonus: Integer
        - DEF Bonus: Integer
        - TUF Bonus: Integer
        - MOR Bonus: Integer
        - Equipment Cost: Integer
          - Based on Equipment Level

     - Type: Class
       - Should store the following:
         - Type name: Enum
          - Levies
            - Unsoldiers. 
            - No equipment or experience allowed.
            - Add default trait: Always diminished
          - Infantry
          - Archers
          - Cavalry
          - Flying
          - Fortifications
            - No experience, no equipment allowed.
          - Siege Engines
        - ATK Bonus: Integer
        - POW Bonus: Integer
        - DEF Bonus: Integer
        - TUF Bonus: Integer
        - MOR Bonus: Integer
        - Cost Modifier: Float
          - Modifier to determine total unit cost

     - Size of Unit: Class
       - Should store the following:
         - Size number: Enum
           - 4, 6, 8, 10, or 12
         - Cost Modifier: Float
           - Modifier to determine total cost.

     - Attack Modifier: Integer (-10 to +10)

     - Defense: Integer (min 10, max ???)

     - Power Modifier: Integer (-10 to +10)

     - Toughness: Integer (min 10, max ???)

     - Morale Modifier: Integer (-10 to +10)

     - Casualties: Integer (min 0, max Size)
       - 50% = DIMINISHED STATUS 
       
     - Are Mercenaries? : Boolean (default is false)
       - Upkeep is doubled 

     - Is Diminished Status: Boolean (default is false)
       - If true, prompts a morale check upon a successful power check from an enemy
       
     - Unit Attitude: Class
       - Should store the following:
         - Status: Enum
           - Allied, Friendly, Neutral
           - Hostile not listed, since it won't be bought. 
       - Cost Modifier: Float
         - Based on Status. 
       
     - Unit Cost: Integer
       - Represented as GP for simplicity
       
     - Unit upkeep: Integer
       - 1/10 of the cost, rounded up. 

     - Unit Traits: Class
       - Stored via linked list
       - Class should store:
         - Name of Trait: String
         - Description of Trait: String
         - Trait Cost: Integer
         - Next Trait: Unit Trait Class

     - Unit Orders: Class
       - Stored via linked list
       - All units (except Fortification) have the "Attack Unit" order pre-loaded
       - Order Class should store:
         - Name of Trait: String
         - Description: String
         - Next Order: Unit Order Class
        
 ## Warfare
 
 ### Simulator
 
 #### Simplified Warfare
 
 #### Regular Warfare
      
