
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

     - Ancestry: String or Enum?
      - Enum would have to account for every ancestry possible.

     - Experience: Enum
      - None(Levies), Green, Regular, Seasoned, Veteran, Elite, Super-Elite

     - Equipment: Enum
      - None(Levies), Light, Medium, Heavy, Super-Heavy

     - Type: Enum
      - Levies
        - Unsoldiers. 
        - No equipment or experience allowed.
      - Infantry
      - Archers
      - Cavalry
      - Flying
      - Fortifications
        - No experience, no equipment allowed.
      - Siege Engines

     - Size of Unit: Int or Enum?
       - Can only be 4, 6, 8, 10, or 12.

     - Attack Modifier: Integer (-10 to +10)

     - Defense: Integer (min 10, max ???)

     - Power Modifier: Integer (-10 to +10)

     - Toughness: Integer (min 10, max ???)

     - Morale Modifier: Integer (-10 to +10)

     - Casualties: Integer (min 0, max Size)
       - 50% = DIMINISHED STATUS 

     - Is Diminished Status: Boolean (default is false)
       - If true, prompts a morale check upon a successful power check from an enemy

     - Unit Traits: Class
       - Stored via linked list
       - Class should store:
         - Name of Trait: String
         - Description of Trait: String
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
      
