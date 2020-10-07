import React from 'react';
import dynamic from 'next/dynamic';
import { GridTemplate } from 'app/UI/components/grid-template';
import { CategoryCardItem } from 'app/UI/components/category-card-item';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function BuscaPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR />

      <div className="container mx-auto">
        <h2 className="text-xl font-medium mx-2 my-4">Categorias populares</h2>

        <GridTemplate mobileCols={2} desktopCols={4}>
          <CategoryCardItem type="toSearch" />
          <CategoryCardItem type="toSearch" />
          <CategoryCardItem type="toSearch" />
          <CategoryCardItem type="toSearch" />
          <CategoryCardItem type="toSearch" />
          <CategoryCardItem type="toSearch" />
        </GridTemplate>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="busca" />
    </>
  );
}
