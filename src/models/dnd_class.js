class DndClass {
    constructor(options) {
        let key, val;
        Object.entries(options).map( (obj) => {
            key = obj[0];
            val = obj[1];
            this[key] = val;
        });
    }
}

export default DndClass;