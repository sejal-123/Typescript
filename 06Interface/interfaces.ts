interface User {
    readonly dbId: number,
    name: string,
    email: string,
    googleId?: string,
    startTrial: () => string,
    getCoupon(couponName: string, value: number): string
}

const usr: User = {
    dbId: 10,
    name: 'test',
    email: 'h@h.com',
    startTrial: () => {
        return 'test'
    },
    getCoupon: (name: 'hh', val: 10) => {
        return ''
    }
}