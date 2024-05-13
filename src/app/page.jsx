import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/components/Pages/Home'));

export default function Page() {
  return <Suspense fallback={<p>loading</p>}>{<HomePage />}</Suspense>;
}
