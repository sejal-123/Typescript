// class User {
//     username: string; // by default when we don't specify access modifier, it is public
//     email: string;
//     private id: string; // for js, we use # for private and in ts we use private keyword
//     readonly city: string = 'Jaipur';

//     constructor(uname: string, em: string) {
//         this.username = uname;
//         this.email = em;
//     }
// }

// Can also be written as

class User5 {
    private id: string = 'test';
    readonly city: string = 'Jaipur';
    protected test: string = 'abc';

    constructor(public username: string, public email: string) {
        console.log(username, email, this.id);
    }
}

class Person extends User5 {
// accessing protected access modifier, it is also access in class where it is created and in its subclass
    hello() {
        this.test = 'test';
    }
}

const u = new User5('test', 't@t.com');