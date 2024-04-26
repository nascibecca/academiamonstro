const monstros = [
    {
        id: 1,
        nome: 'Cibermonstro',
        altura: 3,
        habilidades: 'Pulso Eletromagnético - Emite uma onda de energia que desativa temporariamente dispositivos eletrônicos ao redor.',
        foto: 'https://robohash.org/Cibermonstro'
    },
    {
        id: 2,
        nome: 'Espectral',
        altura: 2,
        habilidades: 'Assombro - Desaparece instantaneamente e se materializa em outro local próximo.',
        foto: 'https://robohash.org/Espectral'
    },
    {
        id: 3,
        nome: 'Guardião',
        altura: 4,
        habilidades: 'Invocação Divina - Invoca uma entidade celestial para lutar ao lado dos aliados, concedendo bênçãos e proteção.',
        foto: 'https://robohash.org/Guardiao'
    },
    {
        id: 4,
        nome: 'Florcanto',
        altura: 1.4,
        habilidades: 'Canção da Natureza - Canta uma melodia que promove o crescimento das plantas ao redor e fortalece os aliados.',
        foto: 'https://robohash.org/Florcanto'
    }
];

const secao = document.querySelector(".monstros");
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
  

const todosOsMonstros = monstros.map((monstro) => {
    return `<div>
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}" alt="${monstro.nome}">
        <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
    </div>`;
});

secao.innerHTML = todosOsMonstros.join("");
