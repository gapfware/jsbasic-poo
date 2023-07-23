import { Hero } from "./module.mjs";

const battleMachine = new Hero({
  name: "Battle Machine",
  favoriteTarget: "Ground ",
  damageType: "Single Target",
  speed: 16,
  live: 0,
}) 

battleMachine.die();
