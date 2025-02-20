abstract class Person {
    constructor(
        public id: string,
        public name: string
    ) {}

    abstract getSepia(): void;

    // difference between inteface and abstract class is that abstract class can have concrete methods but interface cannot

    getReels(): number {
        // some cmplex operation
        return 8;
    }
}

// Cannot create an instance of an abstract class.
// const p = new Person('1', 'Sej');

class Teacher extends Person {
    constructor(public id: string, public name: string, public subject: string) {
        super(id, name);
    }

    getSepia(): void {
        console.log('hello');
    }
}

const t = new Teacher('1', 'Sej', 'test');