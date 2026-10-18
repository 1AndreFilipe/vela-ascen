import {Catalog} from '@/components/catalog';
export const metadata={title:'Coleção'};
export default async function Page({searchParams}:{searchParams:Promise<{categoria?:string;pesquisa?:string}>}){const p=await searchParams;return <Catalog key={p.categoria} initialCategory={p.categoria} focus={!!p.pesquisa}/>}
