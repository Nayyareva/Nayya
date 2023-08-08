const readline = require (`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

rl.question ("Masukkan sebuah kalimat: ", (kalimat) => {
    //gunakan method trim untuk menghapus spasi diawal dan diakhir kalimat
        const kalimatTrimmed = kalimat.trim();
        console.log (`kalimat setelah di-trim: ${kalimatTrimmed}`);
        rl.close();
    });