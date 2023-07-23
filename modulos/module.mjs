function defeated(live) {
  if (live === 0) {
    console.log("GAME OVER");
  }
}

export class Hero {
  constructor({
    name,
    favoriteTarget,
    live,
  }) {
    {
      this.name = name;
      this.favoriteTarget = favoriteTarget;
      this.live = live;
    }
  }
  die(){
    defeated(this.live);
  }
};