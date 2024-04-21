abstract syntax format.
ObjectProperty(a:eats   inverseOf(a:eaten_by)   domain(a:animal))
ObjectProperty(a:has_child)  ObjectProperty(a:has_father   range(a:man))
ObjectProperty(a:has_mother   range(a:woman))
ObjectProperty(a:has_parent)  ObjectProperty(a:has_part  inverseOf(a:part_of))

Class(a:adult partial annotation(rdfs:comment "Things that are adult.")  
 Class(a:animal partial restriction(a:eats someValuesFrom (owl:Thing)))
 Class(a:animal_lover complete intersectionOf(restriction(a:has_pet minCardinality(3)) a:person))
 Class(a:animal_lover partial annotation(rdfs:comment "Someone who really likes animals"))
 Class(a:bicycle partial a:vehicle)
 Class(a:bicycle partial annotation(rdfs:comment "A human propelled vehicle, with two wheels"))  
Class(a:bus_driver complete annotation(rdfs:comment "Someone who drives a bus.") intersectionOf(restriction(a:drives someValuesFrom (a:bus)) a:person))
Class(a:haulage_truck_driver complete 
  intersectionOf(restriction(a:drives someValuesFrom (a:truck)) a:person 
    restriction(a:works_for someValuesFrom 
      (restriction(a:part_of someValuesFrom (a:haulage_company))))))
 Class(a:haulage_worker complete 
  restriction(a:works_for someValuesFrom 
   (unionOf(restriction(a:part_of someValuesFrom (a:haulage_company)) 
            a:haulage_company))))
Class(a:vegetarian complete 
  annotation(rdfs:comment "A vegetarian is defined as an animal that
  eats no other animals, or parts of animals.")
  intersectionOf(a:animal 
    restriction(a:eats allValuesFrom (complementOf(restriction(a:part_of someValuesFrom (a:animal))))) 
    restriction(a:eats allValuesFrom (complementOf(a:animal)))))
 Class(a:vehicle partial)
 Class(a:white_thing partial)
 Class(a:white_van_man complete 
  annotation(rdfs:comment "A white van man is a man who drives a white van.")
  intersectionOf(restriction(a:drives someValuesFrom (intersectionOf(a:van a:white_thing))) a:man))
 Class(a:white_van_man partial 
  restriction(a:reads allValuesFrom (a:tabloid)))
 Class(a:woman complete 
  intersectionOf(a:female a:person a:adult))
 Class(a:young partial)
 Class(owl:Thing partial)
 
Individual(a:Joe type(a:person)
  type(restriction(a:has_pet maxCardinality(1)))
  value(a:has_pet a:Fido))
 Individual(a:Kevin type(a:person)
  value(a:has_pet a:Fluffy)
  value(a:has_pet a:Flossie))
 Individual(a:Louie type(a:duck))

 Individual(a:Q123_ABC
  annotation(rdfs:comment "A white van")
  type(a:van)
  type(a:white_thing))
 Individual(a:Rex type(a:dog)
  value(a:is_pet_of a:Mick))
 Individual(a:Spike type(owl:Thing)
  value(a:is_pet_of a:Pete))
 Individual(a:The_Guardian type(a:broadsheet))
 Individual(a:The_Sun type(a:tabloid))
 Individual(a:The_Times type(a:broadsheet))
 Individual(a:Tibbs type(a:cat))
 Individual(a:Tom type(owl:Thing))
 Individual(a:Walt type(a:person)
  value(a:has_pet a:Huey)
  value(a:has_pet a:Louie)
  value(a:has_pet a:Dewey))

 DisjointClasses(unionOf(a:animal restriction(a:part_of someValuesFrom (a:animal))) 
  unionOf(a:plant restriction(a:part_of someValuesFrom (a:plant))))
 DisjointClasses(a:tabloid a:broadsheet)
 DisjointClasses(a:adult a:young)
 DisjointClasses(a:cat a:dog)

 SubPropertyOf(a:has_mother a:has_parent)
 SubPropertyOf(a:has_father a:has_parent)
 SubPropertyOf(a:has_pet a:likes)
Rules: 
Person(?p) ^ hasChild(?p,?c) ^ Female(?c) -> hasDaughter(?p,?c)
Teenager(?t) ^ Twen(?w) -> youngerThan(?t,?w)
Person(?p) ^ hasChild(?p,?c) ^ Female(?c) -> hasDaughter(?p,?c)

