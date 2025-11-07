// Array de produtos
const products = [
  {
    id: 'p1',
    name: 'Camiseta DryFit Masculina',
    price: 69.90,
    image: '../IMG/th.jpg',
    description: 'Camiseta DryFit para treino, material respirável e leve.',
    pageUrl: './produtos/produto1.html'
  },
  {
    id: 'p2',
    name: 'Legging Feminina Power',
    price: 99.90,
    image: '../IMG/OIP.webp',
    description: 'Legging feminina para atividades de alto desempenho, confortável e flexível.',
    pageUrl: './produtos/produto2.html'
  },
  {
    id: 'p3',
    name: 'Short Masculino de Corrida',
    price: 79.90,
    image: '../IMG/4922056730_1.webp',
    description: 'Short masculino para corrida e atividades de alto impacto, com ajuste confortável.',
    pageUrl: './produtos/produto3.html'
  },

];

// Função para criar o card de cada produto
function createProductCard(product) {
    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    
    // Imagem do produto
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.classList.add('card-img-top');

    // Corpo do card
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Nome do produto
    const name = document.createElement('h5');
    name.classList.add('card-title');
    name.textContent = product.name;

    // Preço do produto
    const price = document.createElement('p');
    price.classList.add('card-text');
    price.textContent = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Adicionando elementos ao card
    cardBody.appendChild(name);
    cardBody.appendChild(price);
    card.appendChild(img);
    card.appendChild(cardBody);

    // Evento de clique no card
    card.addEventListener('click', () => openProduct(product.pageUrl));

    col.appendChild(card);
    return col;
}

// Função para renderizar todos os produtos
function renderProducts(productsList) {
    const container = document.getElementById('cards');
    container.innerHTML = '';  // Limpa os produtos antigos

    productsList.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Função para abrir a página do produto no iframe
function openProduct(url) {
    const iframe = document.getElementById('product-iframe');
    iframe.src = url;
    document.getElementById('close-btn').style.display = 'inline-block';

    iframe.scrollIntoView({ behavior: 'smooth' });
}

// Função para fechar o iframe e voltar para os produtos
document.getElementById('close-btn').addEventListener('click', () => {
    const iframe = document.getElementById('product-iframe');
    iframe.src = '';  // Limpa o iframe
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('close-btn').style.display = 'none';
});

// Renderiza os produtos assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
