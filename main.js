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

}

class Unit_Ancestry
{
  var ancestry_name;
  var ancestry_atk_bonus;
  var ancestry_pow_bonus;
  var ancestry_def_bonus;
  var ancestry_toughness_bonus;
  var ancestry_morale_bonus;

  constructor()
  {

  }
}
