// Serviço para retornar uma listagem de artigos

const articles = [
    {
        id: 1,
        title: 'Como os NFTs estão sendo usados no Brasil?',
        date: '18/07/2022',
        description: 'Enquanto nos EUA há um setor mais desenvolvido, no Brasil o momento ainda é de entender as possibilidades dos NFTs – que vão muito além dos investimentos!'
    },
    {
        id: 2,
        date: '18/07/2022',
        title: 'Inovação como guia para tomada de melhores decisões hoje',
        description: 'Olhar para o futuro traz caminhos que podem ser seguidos desde já. No fim, são essas saídas que trazem os diferenciais competitivos das empresas inovadoras'
    },
    {
        id: 3,
        date: '18/07/2022',
        title: '7 dicas essenciais para começar a vender pela internet',
        description: 'Mesmo em um momento conturbado da economia, os resultados da sua empresa podem melhorar significativamente'
    }
];

function getArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article => {
        return article.id === Number(articleId);
    });
}

export { getArticles, getArticleById };