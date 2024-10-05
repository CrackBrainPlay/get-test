import MainPage from "@/components/templates/MainPage/MainPage";
import { SITE_URL } from "@/constants/route";

export const metadata = {
  title: "Get - test",
  description: "",
  keywords: "",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  robots: "index",
  locale: 'ru_RU',
  images: [
    {
      url: `${SITE_URL}/image/logo512.png`,
      width: 512,
      height: 512,
    }
  ],
  icons: [
    { rel: "apple-touch-icon", url: `${SITE_URL}/image/logo192.png` }
  ],
  openGraph: {
    title: "",
    description: "",
    url: `${SITE_URL}`,
    siteName: '',
    images: [
      {
        url: `${SITE_URL}/image/logo192.png`,
        width: 192,
        height: 192,
      }
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function Home() {
  return <MainPage />
}
