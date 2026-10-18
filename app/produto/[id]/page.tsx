import {notFound} from 'next/navigation';
import {products} from '@/lib/products';
import {ProductDetail} from '@/components/product-detail';
import {ProductCard} from '@/components/product-card';
export function generateStaticParams(){return products.map(p=>({id:p.id}))}
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;return {title:products.find(p=>p.id===id)?.name||'Produto'}}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const p=products.find(p=>p.id===id);if(!p)notFound();return <><ProductDetail product={p}/><section className="section"><div className="section-heading"><h2>Em boa companhia.</h2></div><div className="product-grid">{products.filter(x=>x.id!==id).slice(0,4).map(x=><ProductCard key={x.id} product={x}/>)}</div></section></>}
