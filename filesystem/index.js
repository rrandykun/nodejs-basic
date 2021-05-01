// TODO: tampilkan teks pada notes.txt pada console.
const fileSys = require('fs');
const path = require('path');

const callbackFS = (error, file) => {
    if (error) {
        console.log("Gagal membaca data!");
        return;
    }
    console.log(file);

}

const berkas = path.resolve(__dirname, 'notes.txt');
fileSys.readFile(berkas, 'UTF-8', callbackFS);