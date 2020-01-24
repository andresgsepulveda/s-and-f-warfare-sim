/* jshint esversion: 6 */

class Unit_Trait
{
   var trait_name;
   var trait_description;
   var trait_cost;
   var next_trait;

   constructor()
   {
      this.trait_name = "NONE";
      this.trait_description = "NONE";
      this.trait_cost = 0;
      this.next_trait = null;
   }

   get_name()
   {
     return this.name;
   }

   set_name(name)
   {
     if (typeof name === 'string'
         || name instanceof String)
     {
       this.name = name;
       return true;
     }
     return false;
   }

   get_description()
   {
     return this.description;
   }

   set_description(description)
   {
     if (typeof description === 'string'
         || description instanceof String)
     {
       this.description = description;
       return true;
     }
     return false;
   }

   get_cost()
   {
     return this.cost;
   }

   set_cost(cost)
   {
     if(Number.isInteger(cost) && 0 <= cost)
     {
       this.cost = cost;
       return true;
     }
     return false;
   }

   get_head_trait()
   {
     return this.next_trait;
   }

   set_head_trait(trait)
   {
     if(trait instanceof Unit_Trait)
     {
       this.next_trait = trait;
       return true;
     }
     return false;
   }
}

class Unit_Order
{
  var order_name;
  var order_description;
  var next_order;

  constructor()
  {
    this.order_name = "NONE";
    this.order_description = "NONE";
    this.next_order = null;
  }

  get_name()
  {
    return this.order_name;
  }

  set_name(name)
  {
    if (typeof name === 'string'
        || name instanceof String)
    {
      this.order_name = name;
      return true;
    }
    return false;
  }

  get_description()
  {
    return this.description;
  }

  set_description(description)
  {
    if (typeof name === 'string'
        || name instanceof String)
    {
      this.order_description = description;
      return true;
    }
    return false;
  }

  get_head_order()
  {
    return this.next_order;
  }

  set_head_order(order)
  {
    if (order instanceof Unit_Order)
    {
      this.next_order = order;
      return true;
    }
    return false;
  }
}

class Unit_Attitude
{
  const attitudes =
  {
    ALLIED = 'allied',
    FRIENDLY = 'friendly',
    NEUTRAL = 'neutral'
  };

  var attitude_status;
  var attitude_cost_mod;

  constructor()
  {
    this.attitude_status = attitudes.NEUTRAL;
    this.attitude_cost_mod = 1.50;
  }

  get_status()
  {
    return this.attitude_status;
  }

  set_status(attitude)
  {
     if (attitude in attitudes)
     {
       this.attitude_status = attitude;
       switch(attitude)
       {
         case attitudes.ALLIED:
          this.attitude_cost_mod = 1.0;
          break;
         case attitudes.FRIENDLY:
          this.attitude_cost_mod = 1.25;
          break;
         case attitudes.NEUTRAL:
          this.attitude_cost_mod = 1.50;
          break;
         default:
          break;
       }
       return true;
     }
     return false;
  }
}

class Unit_Size
{
   const sizes =
   {
     SMALL = 4,
     MEDIUM = 6,
     LARGE = 8,
     HUGE = 10,
     COLOSSAL = 12
   };

   var size_status;
   var size_cost_mod;

   constructor()
   {
     this.size_status = sizes.SMALL;
     this.size_cost_mod = 0.66;
   }

   get_size_status()
   {
     return this.size_status;
   }

   set_size_status(size)
   {
     if (size in sizes)
     {
       this.size_status = size;
       switch(size)
       {
         case size.SMALL:
          this.size_cost_mod = 0.66;
          break;
         case size.MEDIUM:
          this.size_cost_mod = 1.0;
          break;
         case size.LARGE:
          this.size_cost_mod = 1.33;
          break;
         case size.HUGE:
          this.size_cost_mod = 1.66;
          break;
         case size.COLOSSAL:
          this.size_cost_mod = 2.0;
          break;
         default:
          break;
       }
       return true;
     }
     return false;
   }
}

class Unit_Type
{
  const unit_types =
  {
    LEVIES = 'levies',
    INFANTRY = 'infantry',
    ARCHERS = 'archers',
    CAVALRY = 'cavalry',
    FLYING = 'flying',
    SIEGE_ENGINE = 'siege_engine'
  };

  var type_status;
  var type_atk_bonus;
  var type_pow_bonus;
  var type_def_bonus;
  var type_toughness_bonus;
  var type_morale_bonus;
  var type_cost_mod;

  constructor()
  {
    this.type_status = unit_types.INFANTRY;
    this.type_atk_bonus = 0;
    this.type_pow_bonus = 0;
    this.type_def_bonus = 1;
    this.type_toughness_bonus = 1;
    this.type_morale_bonus = 0;
    this.type_cost_mod = 1.0;
  }

  get_type_status()
  {
    return this.type_status;
  }

  set_type_status(type)
  {
    if (type in unit_types)
    {
      this.type_status = type;
      switch(type)
      {
        case unit_types.LEVIES:
          this.type_atk_bonus = 0;
          this.type_pow_bonus = 0;
          this.type_def_bonus = 0;
          this.type_toughness_bonus = 0;
          this.type_morale_bonus = -1;
          this.type_cost_mod = 0.75;
          break;
        case unit_types.INFANTRY:
          this.type_atk_bonus = 0;
          this.type_pow_bonus = 0;
          this.type_def_bonus = 1;
          this.type_toughness_bonus = 1;
          this.type_morale_bonus = 0;
          this.type_cost_mod = 1.0;
          break;
        case unit_types.ARCHERS:
          this.type_atk_bonus = 0;
          this.type_pow_bonus = 1;
          this.type_def_bonus = 0;
          this.type_toughness_bonus = 0;
          this.type_morale_bonus = 1;
          this.type_cost_mod = 1.75;
          break;
        case unit_types.CAVALRY:
          this.type_atk_bonus = 1;
          this.type_pow_bonus = 1;
          this.type_def_bonus = 0;
          this.type_toughness_bonus = 0;
          this.type_morale_bonus = 2;
          this.type_cost_mod = 1.5;
          break;
        case unit_types.FLYING:
          this.type_atk_bonus = 0;
          this.type_pow_bonus = 0;
          this.type_def_bonus = 0;
          this.type_toughness_bonus = 0;
          this.type_morale_bonus = 3;
          this.type_cost_mod = 2.0;
          break;
        case unit_types.SIEGE_ENGINE:
          this.type_atk_bonus = 1;
          this.type_pow_bonus = 1;
          this.type_def_bonus = 0;
          this.type_toughness_bonus = 1;
          this.type_morale_bonus = 0;
          this.type_cost_mod = 1.5;
          break;
        default:
          break;
      }
      return true;
    }
    return false;
  }
}

class Unit_Experience
{
  const exp_types =
  {
    NONE = 'none',
    GREEN = 'green',
    REGULAR = 'regular',
    SEASONED = 'seasoned',
    VETERAN = 'veteran',
    ELITE = 'elite',
    SUPER_ELITE = 'super_elite'
  };

  var exp_status;
  var exp_atk_bonus;
  var exp_pow_bonus;
  var exp_def_bonus;
  var exp_toughness_bonus;
  var exp_morale_bonus;

  constructor()
  {
    this.exp_status = GREEN;
    this.exp_atk_bonus = 0;
    this.exp_pow_bonus = 0;
    this.exp_def_bonus = 0;
    this.exp_toughness_bonus = 0;
    this.exp_morale_bonus = 0;
  }

  get_exp_status()
  {
    return this.type_status;
  }

  set_exp_status(type)
  {
    if (type in unit_types)
    {
      this.exp_status = type;
      switch(type)
      {
        case exp_types.NONE:
          this.exp_atk_bonus = 0;
          this.exp_toughness_bonus = 0;
          this.exp_morale_bonus = 0;
          break;
        case exp_types.GREEN:
          this.exp_atk_bonus = 0;
          this.exp_toughness_bonus = 0;
          this.exp_morale_bonus = 0;
          break;
        case exp_types.REGULAR:
          this.exp_atk_bonus = 1;
          this.exp_toughness_bonus = 1;
          this.exp_morale_bonus = 1;
          break;
        case exp_types.SEASONED:
          this.exp_atk_bonus = 1;
          this.exp_toughness_bonus = 1;
          this.exp_morale_bonus = 2;
          break;
        case exp_types.VETERAN:
          this.exp_atk_bonus = 1;
          this.exp_toughness_bonus = 1;
          this.exp_morale_bonus = 3;
          break;
        case exp_types.ELITE:
          this.exp_atk_bonus = 2;
          this.exp_toughness_bonus = 2;
          this.exp_morale_bonus = 4;
          break;
        case exp_types.SUPER_ELITE:
          this.exp_atk_bonus = 2;
          this.exp_toughness_bonus = 2;
          this.exp_morale_bonus = 5;
          break;
        default:
          break;
      }
      return true;
    }
    return false;
  }
}

class Unit_Equipment
{
  const unit_equips =
  {
    NONE = 'none',
    LIGHT = 'light',
    MEDIUM = 'medium',
    HEAVY = 'heavy',
    SUPER_HEAVY = 'super_heavy'
  };

  var equip_status;
  var equip_atk_bonus;
  var equip_pow_bonus;
  var equip_def_bonus;
  var equip_toughness_bonus;
  var equip_morale_bonus;

  constructor()
  {
    this.equip_status = unit_equips.LIGHT;
    this.equip_atk_bonus = 0;
    this.equip_pow_bonus = 1;
    this.equip_def_bonus = 1;
    this.equip_toughness_bonus = 0;
    this.equip_morale_bonus = 0;
  }

  get_equip_status()
  {
    return this.equip_status;
  }

  set_equip_status(equipment)
  {
    if (equipment in unit_equips)
    {
      this.equip_status = equipment;
      switch(equipment)
      {
        case unit_equips.NONE:
          this.equip_pow_bonus = 0;
          this.equip_def_bonus = 0;
          break;
        case unit_equips.LIGHT:
          this.equip_pow_bonus = 1;
          this.equip_def_bonus = 1;
          break;
        case unit_equips.MEDIUM:
          this.equip_pow_bonus = 2;
          this.equip_def_bonus = 2;
          break;
        case unit_equips.HEAVY:
          this.equip_pow_bonus = 4;
          this.equip_def_bonus = 4;
          break;
        case unit_equips.SUPER_HEAVY:
          this.equip_pow_bonus = 6;
          this.equip_def_bonus = 6;
          break;
        default:
          break;
      }
      return true;
    }
    return false;
  }
}

class Unit_Ancestry
{

  var ancestry_name;
  var ancestry_atk_bonus;
  var ancestry_pow_bonus;
  var ancestry_def_bonus;
  var ancestry_toughness_bonus;
  var ancestry_morale_bonus;
  var ancestry_head_trait;

  constructor()
  {
    this.ancestry_name = "NONE";
    this.ancestry_atk_bonus = 0;
    this.ancestry_pow_bonus = 0;
    this.ancestry_def_bonus = 0;
    this.ancestry_toughness_bonus = 0;
    this.ancestry_morale_bonus = 0;
    this.ancestry_head_trait = null;
  }

  get_ancestry_name()
  {
    return this.ancestry_name;
  }

  set_ancestry_name(name)
  {
    if (typeof name === 'string' || name instanceof String)
    {
      this.ancestry_name = name;
      return true;
    }
    return false;
  }

  get_ancestry_atk()
  {
    return this.ancestry_atk_bonus;
  }

  set_ancestry_atk(atk)
  {
    if (isInteger(atk))
    {
      this.ancestry_atk_bonus = atk;
      return true;
    }
    return false;
  }

  get_ancestry_pow()
  {
    return this.ancestry_pow_bonus;
  }

  set_ancestry_pow(pow)
  {
    if (isInteger(pow))
    {
      this.ancestry_pow_bonus = pow;
      return true;
    }
    return false;
  }

  get_ancestry_def()
  {
    return this.ancestry_def_bonus;
  }

  set_ancestry_def(def)
  {
    if(isInteger(def))
    {
      this.ancestry_def_bonus = def;
      return true;
    }
    return false;
  }

  get_ancestry_toughness()
  {
    return this.ancestry_toughness_bonus;
  }

  set_ancestry_toughness(toughness)
  {
    if(isInteger(toughness))
    {
      this.ancestry_toughness_bonus = toughness;
      return true;
    }
    return false;
  }

  get_ancestry_morale()
  {
    return this.ancestry_morale_bonus;
  }

  set_ancestry_morale(morale)
  {
    if(isInteger(morale))
    {
      this.ancestry_morale_bonus = morale;
      return true;
    }
    return false;
  }

  get_ancestry_head_trait()
  {
    return this.ancestry_head_trait;
  }

  set_ancestry_head_trait(trait)
  {
    if(trait instanceof Unit_Trait)
    {
      this.ancestry_head_trait = trait;
      return true;
    }
    return false;
  }
}

class SF_Unit
{
  // Strings
  var name;
  var commander;

  // Class variables
  var ancestry;
  var attitude;
  var experience;
  var equipment;
  var unit_type;
  var unit_size;
  var traits;
  var orders;

  // Integers
  var atk_mod;
  var pow_mod;
  var def_mod;
  var tough_mod;
  var morale_mod;
  var casualties;
  var unit_cost;
  var cost_mod;

  // Float
  var upkeep;

  //Booleans
  var is_diminished;
  var are_mercenaries;

  constructor(name, commander)
  {
    this.name = name;
    this.commander = commander;
  }

  get_name()
  {
    return this.name;
  }

  set_name(name)
  {
    if(typeof name === 'string' || name instanceof String)
    {
      this.name = name;
      return true;
    }
    return false;
  }

  get_commander()
  {
    return this.commander;
  }

  set_commander(commander)
  {
    if(typeof commander === 'string' || commander instanceof String)
    {
      this.commander = commander;
      return true;
    }
    return false;
  }

  get_ancestry()
  {
    return this.ancestry;
  }

  set_ancestry(ancestry)
  {
    if(ancestry instanceof Unit_Ancestry)
    {
      this.ancestry = ancestry;
      calculate_stats();
      calculate_cost();
      return true;
    }
    return false;
  }

  get_attitude()
  {
    return this.attitude;
  }

  set_attitude(attitude)
  {
    if(attitude instanceof Unit_Attitude)
    {
      this.attitude = attitude;
      calculate_stats();
      calculate_cost();
      return true;
    }
    return false;
  }

  get_experience()
  {
    return this.experience()
  }

  set_experience(experience)
  {
    if(experience instanceof Unit_Experience)
    {
      this.experience = experience;
      calculate_stats();
      calculate_cost();
      return true;
    }
    return false;
  }

  get_equipment()
  {
    return this.equipment;
  }

  set_equipment(equipment)
  {
    if(equipment instanceof Unit_Equipment)
    {
      this.equipment = equipment;
      calculate_stats();
      calculate_cost();
      return true;
    }
    return false;
  }

  get_unit_type()
  {
    return this.unit_type;
  }

  set_unit_type(unit_type)
  {
    if (unit_type instanceof Unit_Type)
    {
      this.unit_type = unit_type;
      check_diminished();
      calculate_stats();
      calculate_cost();
      return true;
    }
    return false;
  }

  get_unit_size()
  {
    return this.unit_size;
  }

  set_unit_size(unit_size)
  {
    if(unit_size instanceof Unit_Size)
    {
      this.unit_size = unit_size;
      this.casualties = 0;
      calculate_stats();
      calculate_cost();
      return true;
    }
    return false;
  }

  get_traits()
  {
    return this.traits;
  }

  set_traits(trait)
  {
    if(trait instanceof Unit_Trait)
    {
      this.traits = trait;
      calculate_cost();
      return true;
    }
    return false;
  }

  get_orders()
  {
    return this.orders;
  }

  set_orders(order)
  {
    if(order instanceof Unit_Order)
    {
      this.orders = order;
      return true;
    }
    return false;
  }

  get_atk_mod()
  {
    return this.atk_mod;
  }

  set_atk_mod(atk_mod)
  {
    if(isInteger(atk_mod))
    {
      this.atk_mod = atk_mod;
      return true;
    }
    return false;
  }

  get_pow_mod()
  {
    return this.pow_mod;
  }

  set_pow_mod(pow_mod)
  {
    if(isInteger(pow_mod))
    {
      this.pow_mod = pow_mod;
      return true;
    }
    return false;
  }

  get_def_mod()
  {
    return this.def_mod;
  }

  set_def_mod(def_mod)
  {
    if(isInteger(def_mod))
    {
      this.def_mod = def_mod;
      return true;
    }
    return false;
  }

  get_tough_mod()
  {
    return this.tough_mod;
  }

  set_tough_mod(tough_mod)
  {
    if(isInteger(tough_mod))
    {
      this.tough_mod = tough_mod;
      return true;
    }
    return false;
  }

  get_morale_mod()
  {
    return this.morale_mod;
  }

  set_morale_mod(morale_mod)
  {
    if(isInteger(morale_mod))
    {
      this.morale_mod = morale_mod;
      return true;
    }
    return false;
  }

  calculate_stats()
  {
    atk_bonus = ancestry.get_ancestry_atk() + experience.exp_atk_bonus
                + equipment.equip_atk_bonus + unit_type.type_atk_bonus;
    set_atk_mod(atk_bonus);
    pow_bonus = ancestry.get_ancestry_pow() + experience.exp_pow_bonus
                + equipment.equip_pow_bonus + unit_type.type_pow_bonus;
    set_pow_mod(pow_bonus);
    def_bonus = ancestry.get_ancestry_def() + experience.exp_def_bonus
                + equipment.equip_def_bonus + unit_type.type_def_bonus;
    set_def_mod(def_bonus);
    tough_bonus = ancestry.get_ancestry_toughness()
                  + experience.exp_toughness_bonus
                  + equipment.equip_toughness_bonus
                  + unit_type.type_toughness_bonus;
    set_tough_mod(tough_bonus);
    morale_bonus = ancestry.get_ancestry_morale() + experience.exp_morale_bonus
                   + equipment.equip_morale_bonus + unit_type.type_morale_bonus;
    set_morale_mod(morale_bonus);
  }

  get_casualties()
  {
    return this.casualties;
  }

  set_casualties(casualties)
  {
    if(isInteger(casualties)
       && 0 <= casualties
       && casualties <= unit_size.get_size_status())
    {
      this.casualties = casualties;
      check_diminished();
      return true;
    }
    return false;
  }

  get_unit_cost()
  {
    return this.unit_cost;
  }

  get_cost_mod()
  {
    return this.cost_mod;
  }

  get_unit_upkeep()
  {
    return this.upkeep;
  }

  set_cost_mod(cost_mod)
  {
    if(isInteger(cost_mod))
    {
      this.cost_mod = cost_mod;
      calculate_cost();
      return true;
    }
    return false;
  }

  calculate_cost()
  {
    cost_total = 0;
    calculate_stats();
    // First, add up bonuses to stats (with double morale)
    stat_total = cost_stat_calc();
    // Then multiply by unit type cost modifier
    cost_total += (stat_total * unit_type.type_cost_mod);
    // Then multiply it by unit size cost modifier
    cost_total *= unit_size.size_cost_mod;
    // Then multiply the result by 10
    cost_total *= 10;

    // Add the cost of all the traits the unit has
    current_trait = traits;
    while(current_trait != null)
    {
      cost_total += current_trait.trait_cost;
      current_trait = current_trait.next_trait;
    }

    // Finally add a flat 30 points
    cost_total += 30;

    cost_total *= attitude.attitude_cost_mod;

    unit_cost = cost_total.toFixed();
    calculate_upkeep();
  }

  cost_stat_calc()
  {
    return atk_mod + def_mod + pow_mod + tough_mod + (2 * morale_mod);
  }

  calculate_upkeep()
  {
    upkeep_total = unit_cost / 10;
    if (are_mercenaries)
    {
      upkeep = upkeep_total * 2;
      return;
    }
    upkeep = upkeep_total;
  }

  get_is_diminished()
  {
    return is_diminished;
  }

  check_diminished()
  {
    let ratio = casualties / ((float) unit_size.get_size_status());
    if (ratio >= 0.50)
    {
      is_diminished = true;
    }
    else if (unit_type.get_type_status() === unit_types.LEVIES)
    {
      is_diminished = true;
    }
    is_diminished = false;
  }

  get_mercenary_status()
  {
    return this.are_mercenaries;
  }

  set_mercenary_status(status)
  {
    if (typeof status === 'boolean')
    {
      this.are_mercenaries = status;
      calculate_cost();
      return true;
    }
    return false;
  }

}
