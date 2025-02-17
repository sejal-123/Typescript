class User1 {
    private id: string = 'test';
    readonly city: string = 'Jaipur';

    constructor(public username: string, public email: string) {
        console.log(username, email, this.id);
    }

    setId(id: string): void {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }
}

const u1 = new User1('test', 't@t.com');
u1.setId('22');
u1.getId();