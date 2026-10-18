import Link from 'next/link';
export default function NotFound(){return <section className="section empty"><span className="eyebrow">404</span><h1>Esta peça do caminho não existe.</h1><Link className="button" href="/colecao">Voltar à coleção</Link></section>}
