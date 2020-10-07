import React from 'react';
import dynamic from 'next/dynamic';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function MeusDescontosPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR />

      <div className="container mx-auto">
        <h2 className="text-xl font-medium mx-2 my-4">Meus descontos</h2>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="meus-descontos" />
    </>
  );
}
