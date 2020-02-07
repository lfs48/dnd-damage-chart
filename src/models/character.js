class Character {
    constructor({options}) {
        this.level = options.level;
        this.class = options.class;
        this.str = options.str;
        this.dex = options.dex;
        this.con = options.con;
        this.int = options.int;
        this.wis = options.wis;
        this.cha = options.cha;
    } 

    prof() {
        if (this.level < 5) {
            return 2;
        } else if (this.level < 9) {
            return 3;
        } else if (this.level < 13) {
            return 4;
        } else if (this.level < 17) {
            return 5;
        } else {
            return 6;
        }
    }
}