import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/components/store';
import { Shell } from '@/components/shell';
export const metadata: Metadata = { title: { default: 'VELA — O essencial permanece', template: '%s | VELA' }, description: 'Uma expressão de simplicidade. Acessórios intemporais numa loja de demonstração criada pela ASCEN.' };
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) { return <html lang="pt-PT"><body><StoreProvider><Shell>{children}</Shell></StoreProvider></body></html>; }
