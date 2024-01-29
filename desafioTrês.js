/*class heroCreated {
  constructor (name, age, type) {
    this.name = name
    this.age = age
    this.type = type
  }

  attack () {
    let attackType
    switch (this.type) {
      case "Mage":
        attackType = "Magia"
        break;
      
      case "Warrior":
        attackType = "Espada"
        break;
      
      case "Monk":
        attackType = "Artes Marciais"
        break;
      
      case "Ninja":
        attackType = "Shuriken"
        break
      
      default:
        attackType = "Usou um ataque aleatório"
    }
    console.log(`O(a) ${this.name} da classe ${this.type}, usou ${attackType}`)
  }
}

const hero1 = new heroCreated("Harry Potter", "16", "Mage")
hero1.attack()

const hero2 = new heroCreated("Alexandre, o grande", "32", "Warrior")
hero2.attack()

const hero3 = new heroCreated("Buddha", "143", "Monk")
hero3.attack()

const hero4 = new heroCreated("Narutin", "13", "Ninja")
hero4.attack() */


class heroCreated {
  constructor (name, type) {
    this.name = name
    this.type = type
  }

  strutureRepetition () {
    let hero = [{name: "Harry Potter", type: "Mage"},
    {name: "Alexandre, o grande", type: "Warrior"},
    {name: "Buddha", type: "Monk"},
    {name: "Narutin", type: "Ninja"}]
    
    for (let i = 0; i < hero.length; i++) {
      let heroi = hero[i].type
      let attackType

      if (heroi === "Mage") {
        attackType = "Magia"
        console.log(`O ${hero[i].name} do tipo ${hero[i].type}, usou ${attackType}`)
      } else if (heroi === "Warrior") {
        attackType = "Espada"
        console.log(`O ${hero[i].name} do tipo ${hero[i].type}, usou ${attackType}`)
      } else if (heroi === "Monk") {
        attackType = "Artes marciais"
        console.log(`O ${hero[i].name} do tipo ${hero[i].type}, usou ${attackType}`)
      } else if (heroi === "Ninja") {
        attackType = "Shuriken"
        console.log(`O ${hero[i].name} do tipo ${hero[i].type}, usou ${attackType}`)
      }
      
    }
  }

}
  
const hero1 = new heroCreated ()
hero1.strutureRepetition()