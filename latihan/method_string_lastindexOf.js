const readline = require (`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

rl.question ("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata yang ingin anda cari: ", (kataCari) => {
        //Gunakan method lastindexOf untuk mencari kataCari dalam kalimat 
        const indeksKataTerakhir = kalimat.lastIndexOf (kataCari);
        if (indeksKataTerakhir !== -1) {
            console.log (`kata '${kataCari}' ditemukan pada indeks terakhir: ${indeksKataTerakhir}`);
        } else {
            console.log (`kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});