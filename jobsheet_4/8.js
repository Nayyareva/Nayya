const readline = require (`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

//charAt 
rl.question("Memasukkan sebuah kalimat: ", (inputString) => {
        rl.question("Masukkan indeks yang ingin anda cek: ", (index) => {
            //konversi nilai index ke tipe Number
            index = Number (index);
            //periksa apakah index valid (berada dalam rentang string)
            if (index >= 0 && index < inputString.length) {
                //Gunakan metode charAt untuk mendapatkan karakter pada indeks yang diminta 
                const character = inputString.charAt(index);
                console.log (`karakter pada indeks ${index}: ${character}`);
            } else {
                console.log ("indeks tidak valid!");
            }
            rl.close();
    });
});