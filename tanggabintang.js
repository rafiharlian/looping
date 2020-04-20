// let rows2 = 5
// for (let i = 1; i <= rows2; i++){
//     let bintang = ''
//     for(let j = 1; j <= i; j++){
//       bintang += '*'
//     }
//     console.log(bintang)
// }


// dengan kondisi if
let rows2 = 5
for (let i = 1; i <= rows2; i++){
    let bintang = ''
    for(let j = 1; j <= i; j++){
    if(i >= j){
        bintang += '*'       
        }
    }
    console.log(bintang)
}