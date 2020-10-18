import React from 'react';
import dynamic from 'next/dynamic';
import { GridTemplate } from 'app/UI/components/grid-template';
import { DiscountCardItem } from 'app/UI/components/discount-card-item';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function CategoriaPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR />

      <div className="my-4">
        <GridTemplate>
          <DiscountCardItem />
          <DiscountCardItem />
          <DiscountCardItem />
          <DiscountCardItem />
          <DiscountCardItem />
          <DiscountCardItem />
          <DiscountCardItem />
          <DiscountCardItem />
          <DiscountCardItem />
        </GridTemplate>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="" />
    </>
  );
}
