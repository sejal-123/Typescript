const user:[string, number] = ['aa', 3];

let rgb: [number, number, number] = [255, 112, 45];

type User3 = [number, string];

let usr3: User3 = [1, 'Sej'];

usr3[1] = 'var';

// this also allows push an splice operations
// usr3.push(3);