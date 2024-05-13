'use client';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

const Providers = ({ children }) => {
  const router = useRouter();

  return (
    <RecoilRoot>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </RecoilRoot>
  );
};

export default Providers;
