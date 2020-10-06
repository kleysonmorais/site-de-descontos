import React from 'react';
import dynamic from 'next/dynamic';
import { ScrollingContainers } from 'app/UI/components/scrolling-containers';
import { CategoryCardItem } from 'app/UI/components/category-card-item';
import { BannerCardItem } from 'app/UI/components/banner-card-item';
import { DiscountCardItem } from 'app/UI/components/discount-card-item';
import { GridTemplate } from 'app/UI/components/grid-template';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function ListarDescontosPage() {
  return (
    <>
      <DynamicAppTabNavigationWithNoSSR />

      <div className="container mx-auto">
        <div className="my-4 md:my-8">
          <ScrollingContainers>
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
            <CategoryCardItem />
          </ScrollingContainers>
        </div>

        <div className="my-4 md:my-12">
          <ScrollingContainers>
            <BannerCardItem />
            <BannerCardItem />
            <BannerCardItem />
          </ScrollingContainers>
        </div>

        <h2 className="text-xl font-medium mx-2">Eventos</h2>

        <div className="my-4">
          <ScrollingContainers>
            <DiscountCardItem />
            <DiscountCardItem />
            <DiscountCardItem />
          </ScrollingContainers>
        </div>

        <h2 className="text-xl font-medium mx-2 mt-8">Parceiros</h2>

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

          <div className="px-2">
            <button
              type="button"
              className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold 
              hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent 
              rounded w-full  my-8"
            >
              Ver mais parceiros
            </button>
          </div>
        </div>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR />
    </>
  );
}
