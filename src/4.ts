class Key {
  constructor(private signature: number) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  tenants: Person[] = [];

  constructor(public key: Key) {
    this.door = false;
  }
  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('The door is opened.');
    } else {
      console.log('The door is closed.');
    }
  }
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is opened.');
    } else {
      console.log('Invalid key.');
    }
  }
}

const key = new Key(Math.floor(Math.random() * 20));

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};