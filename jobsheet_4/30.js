const readline = require (`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

rl.question ("Masukkan sebuah kalimat: ", (kalimat) => {
    //gunakan method toLowerCase untuk mengubah kalimat menjadi huruf kecil
        const kalimatLowerCase = kalimat.toLowerCase();
        console.log (`kalimat dalam huruf kecil: ${kalimatLowerCase}`);
        rl.close();
    });