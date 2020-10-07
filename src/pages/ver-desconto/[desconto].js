import React from 'react';
import dynamic from 'next/dynamic';
// import { GridTemplate } from 'app/UI/components/grid-template';
// import { CategoryCardItem } from 'app/UI/components/category-card-item';

// const DynamicAppTabNavigationWithNoSSR = dynamic(
//   () => import('app/UI/components/app-tab'),
//   { ssr: false }
// );

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

export default function BuscaPage() {
  return (
    <>
      <div className="bg-gray-200" style={{ height: '50vh' }}>
        <img
          className="object-cover w-full h-full"
          src="https://picsum.photos/600/600"
          alt="desconto"
        />
      </div>
      <div className="container mx-auto px-4 pb-8">
        <h2 className="text-xl font-medium mt-4">Título do Desconto</h2>
        <p className="text-lg font-light">Culinária</p>

        <hr className="my-6" />

        <p className="text-base font-thin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p className="text-lg font-light mt-6 mb-2">Sobre o parceiro</p>
        <p className="text-base font-thin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          <br /> INSTAGRAM AQUI
        </p>

        <p className="text-lg font-light mt-6 mb-2">Regras de uso</p>
        <p className="text-base font-thin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="" />
    </>
  );
}
