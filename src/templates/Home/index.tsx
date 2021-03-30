import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://www.my-trips.com"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.my-trips.com',
          site_name: 'My Trips',
          images: [
            {
              url: 'https://www.my-trips.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ]
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
