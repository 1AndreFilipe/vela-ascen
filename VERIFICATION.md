# Verificação

- Compilação de produção Next.js e TypeScript: aprovadas.
- 12 produtos e respetivas páginas geradas.
- Testado no navegador da aplicação contra a publicação Vercel: pesquisa sem acentos, categorias, ordenação por preço, limite de preço, variante Preto, favoritos, saco e persistência após recarregamento.
- Duas unidades da Mala Luna produziram corretamente 290 EUR. Checkout simulado mostrou confirmação e esvaziou o saco.
- Formulário de contacto mostrou confirmação de simulação sem enviar mensagem.
- Sem erros de JavaScript nos registos do navegador durante estes testes.
- Imagens externas verificadas por HTTP; uma imagem indisponível foi substituída.
- Layout responsivo implementado com grelhas de duas colunas em ecrãs estreitos e menu móvel. Teste automático dedicado a 390 px não concluído: o Edge headless não arrancou neste ambiente.

Publicação: https://vela-ascen.vercel.app

O repositório remoto GitHub e a sua ligação à Vercel dependem da ligação da conta GitHub. O repositório Git local contém o código completo.
