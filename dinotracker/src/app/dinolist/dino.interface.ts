import { Species } from "./species.type";

export interface Dino {
    position: number;
    name: string;
    species: Species;
    base_level: number;
    base_melee: number;
    base_healthpoints: number;
  }