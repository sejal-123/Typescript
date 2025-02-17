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

class User {
    private id: string = 'test';
    readonly city: string = 'Jaipur';

    constructor(public username: string, public email: string) {
        console.log(username, email, this.id);
    }
}

const u = new User('test', 't@t.com');