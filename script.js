// Buscador y filtros de la enciclopedia. No hace falta tocar este archivo.
const caja = document.getElementById('buscar');
const botones = document.querySelectorAll('.chips button');
const fichas = document.querySelectorAll('.entry');
let categoria = 'todas';
function mostrar() {
  const texto = caja.value.toLowerCase().trim();
  let visibles = 0;
  fichas.forEach(f => {
    const okCat = categoria === 'todas' || f.dataset.cat === categoria;
    const okTexto = f.textContent.toLowerCase().includes(texto);
    f.hidden = !(okCat && okTexto);
    if (!f.hidden) visibles++;
  });
  document.getElementById('vacio').hidden = visibles > 0;
}
caja.addEventListener('input', mostrar);
botones.forEach(b => b.addEventListener('click', () => {
  categoria = b.dataset.cat;
  botones.forEach(x => x.setAttribute('aria-pressed', x === b));
  mostrar();
}));
