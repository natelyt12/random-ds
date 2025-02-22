function randomDS(n = 4) {
    const chars = ['Đ', 'S'];
    let result;
    do {
        result = '';
        for (let i = 0; i < n; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
    } while (result === 'ĐĐĐĐ' || result === 'SSSS');
    return result;
}

const randombtn = document.getElementById('gen');
const randomrtn = document.getElementById('rtn');
const ansbox = document.getElementById('answer')
const count = document.getElementById('count')

let z = 0
randombtn.addEventListener('click', () => {
    z++
    ansbox.innerHTML = randomDS()
    if (z>=2) {
        count.innerText = `, mày đã do dự ${z-1} lần`
    }
})
