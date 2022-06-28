import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _createdRacesInstances = 0;
  private energy: EnergyType;
  
  constructor(name: string) {
    super(name);
    this.energy = 'mana';
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this.energy; 
  }

  set energyType(energyType: EnergyType) {
    this.energy = energyType;
  }

  static createdArchetypeInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }
}
export default Necromancer;