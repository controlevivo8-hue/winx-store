const http = require('http');
const pBase = [
    {n: "Batom Matte", v: "49,90"}, {n: "Paleta Sombras", v: "89,90"},
    {n: "Rímel 4D", v: "45,00"}, {n: "Base Alta", v: "65,00"},
    {n: "Gloss Brilho", v: "35,00"}, {n: "Iluminador", v: "55,00"}
];
let v = "";
for(let i=1; i<=100; i++) {
    let p = pBase[i % pBase.length];
    v += `<div style="background:#111;border:1px solid #d4af37;border-radius:10px;padding:10px;width:140px;margin:5px">
    <div style="font-size:30px">💄</div><h3 style="font-size:14px">${p.n} #${i}</h3>
    <p style="color:#fff">R$ ${p.v}</p>
    <a href="https://wa.me/5548999717451?text=Quero+o+item+${i}" style="background:#25d366;color:#fff;text-decoration:none;padding:5px;display:block;border-radius:5px;font-size:12px">Comprar</a></div>`;
}
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`<body style="background:#000;color:#d4af37;font-family:sans-serif;text-align:center">
    <h1>WINX STORE</h1><p>100 ITENS</p>
    <div style="display:flex;flex-wrap:wrap;justify-content:center">${v}</div>
  </body>`);
}).listen(process.env.PORT || 10000);
console.log('✅ MEGA LOJA ATIVA!');
