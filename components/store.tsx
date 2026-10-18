'use client';
import {createContext,useContext,useEffect,useState} from 'react';
import {products} from '@/lib/products';
export type Item={id:string;variant:string;quantity:number};
type Store={cart:Item[];wishlist:string[];ready:boolean;add:(id:string,variant:string)=>void;update:(id:string,variant:string,quantity:number)=>void;toggle:(id:string)=>void;clear:()=>void;notice:string};
const Context=createContext<Store|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){
 const [cart,setCart]=useState<Item[]>([]),[wishlist,setWishlist]=useState<string[]>([]),[ready,setReady]=useState(false),[notice,setNotice]=useState('');
 useEffect(()=>{try{const s=JSON.parse(localStorage.getItem('vela-store-v1')||'{}');if(Array.isArray(s.cart))setCart(s.cart.filter((i:Item)=>products.some(p=>p.id===i.id&&p.variants.includes(i.variant))&&Number.isInteger(i.quantity)&&i.quantity>0&&i.quantity<=20));if(Array.isArray(s.wishlist))setWishlist(s.wishlist.filter((id:string)=>products.some(p=>p.id===id)));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)try{localStorage.setItem('vela-store-v1',JSON.stringify({cart,wishlist}))}catch{}},[cart,wishlist,ready]);
 useEffect(()=>{if(notice){const t=setTimeout(()=>setNotice(''),2800);return()=>clearTimeout(t)}},[notice]);
 const add=(id:string,variant:string)=>{setCart(c=>{const match=c.find(i=>i.id===id&&i.variant===variant);return match?c.map(i=>i===match?{...i,quantity:Math.min(20,i.quantity+1)}:i):[...c,{id,variant,quantity:1}]});setNotice('Adicionado ao saco. Um bom encontro.')};
 const update=(id:string,variant:string,quantity:number)=>setCart(c=>c.map(i=>i.id===id&&i.variant===variant?{...i,quantity:Math.max(0,Math.min(20,quantity))}:i).filter(i=>i.quantity>0));
 const toggle=(id:string)=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id]);
 return <Context.Provider value={{cart,wishlist,ready,add,update,toggle,clear:()=>setCart([]),notice}}>{children}<div aria-live="polite" className={notice?'toast visible':'toast'}>{notice}</div></Context.Provider>
}
export function useStore(){const store=useContext(Context);if(!store)throw Error('Store missing');return store}
