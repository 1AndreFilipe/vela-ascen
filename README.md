# VELA — ASCEN

Loja de demonstração em português europeu, criada com Next.js App Router, TypeScript e Tailwind CSS. Marca, produtos e preços fictícios. Nenhum pagamento, mensagem ou encomenda real é processado.

## Executar

Node.js 22 ou superior. Instalar dependências com `npm install`, executar `npm run dev` e abrir http://localhost:3000. Produção: `npm run build` e `npm start`. Verificação de tipos: `npm run typecheck`.

## Funcionalidades

- Página inicial editorial, coleções e história da marca.
- 12 produtos, páginas individuais, variantes e ampliação da imagem.
- Pesquisa sem distinção de acentos, categorias, preço máximo e ordenação.
- Favoritos e saco persistidos em localStorage, com validação dos dados guardados.
- Quantidades de 1 a 20 por variante, remoção e totais em EUR.
- Checkout explicitamente simulado, perfil fictício, escolha de entrega e confirmação.
- FAQ, contacto simulado e informação de privacidade.
- Layout adaptável, navegação por teclado e respeito pela preferência de movimento reduzido.

## Publicação

Importar este diretório como repositório GitHub e ligar o projeto Vercel `vela-ascen`, framework Next.js. Não são necessárias variáveis de ambiente ou serviços de pagamento. A ligação Git permite publicações automáticas em cada push.

## Dados e imagens

Os dados estão em `lib/products.ts`; os componentes reutilizáveis em `components/`. As imagens ilustrativas são carregadas do Unsplash e não representam produtos comerciais da VELA. Não são usadas ferramentas de analytics. O browser guarda apenas os identificadores, variantes, quantidades e favoritos na chave `vela-store-v1`. O formulário de contacto não transmite dados.
