import React from 'react';
import dynamic from 'next/dynamic';
import GridInstagramPhotos from 'app/UI/components/grid-instagram-photos';

const DynamicGridInstagramPhotosNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/grid-instagram-photos'),
  { ssr: false }
);

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
          industry.
        </p>

        <h2 className="text-base font-light mt-6">Instagram</h2>
        <DynamicGridInstagramPhotosNavigationWithNoSSR />
        <h2 className="text-base font-thin text-right">@meuinsta</h2>

        <h2 className="text-base font-light mt-6">Localização</h2>
        <iframe
          className="py-4"
          title="maps-place"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28349.873486607645!2d-47.497915304156564!3d-5.517558437854776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55fa8db895edb%3A0x65b4882b9ad0eac7!2zQcOnYcOtIENvbXBhbmhpYQ!5e0!3m2!1spt-BR!2sbr!4v1602070905325!5m2!1spt-BR!2sbr"
          width="100%"
          // height="450"
          frameBorder="0"
          // style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          // tabIndex="0"
        />

        <hr className="my-6" />

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
