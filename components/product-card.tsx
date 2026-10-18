'use client';
import Link from 'next/link';
import {Heart,Plus} from 'lucide-react';
import {Product,money} from '@/lib/products';
import {useStore} from './store';
export function ProductCard({product:p,index=0}:{product:Product;index?:number}){const {wishlist,toggle,add}=useStore();const saved=wishlist.includes(p.id);return <article className="product-card"><div className="product-image"><Link href={`/produto/${p.id}`}><img src={p.image} alt={p.name} loading="lazy"/></Link>{index===0&&<span className="product-label">ESSENCIAL VELA</span>}<button className={`wish ${saved?'saved':''}`} onClick={()=>toggle(p.id)} aria-label={`${saved?'Remover':'Guardar'} ${p.name} nos favoritos`} aria-pressed={saved}><Heart size={18} fill={saved?'currentColor':'none'}/></button><button className="quick-add" onClick={()=>add(p.id,p.variants[0])}><Plus size={15}/> Adicionar · {p.variants[0]}</button></div><div className="product-caption"><div><span className="product-category">{p.category}</span><Link href={`/produto/${p.id}`}><h3>{p.name}</h3></Link><span className="variant-hint">{p.variants.length} opções</span></div><span>{money(p.price)}</span></div></article>}
