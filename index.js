const records = [
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 }
]


let a = records.filter(function (i) {
    if (i.age >= 20 && i.age <= 30 && i.temperature < 100) {
        return true;
    }
});
let b = records.filter(function (i) {
    if (i.age >= 31 && i.age <= 40 && i.temperature < 100) {
        return true;
    }
});
let c = records.filter(function (i) {
    if (i.age >= 41 && i.age <= 50 && i.temperature < 100) {
        return true;
    }
});
let d = records.filter(function (i) {
    if (i.temperature >= 100) {
        return true;
    }
});

function vaxTrail(a, b, c, d) {
    const A = a;
    const B = b;
    const C = c;
    const D = d;
    const Combined = { A, B, C, D }
    console.log(Combined)
}

vaxTrail(a, b, c, d)