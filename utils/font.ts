import { Inter, Montserrat, Open_Sans, Raleway, Satisfy, Source_Code_Pro } from "next/font/google";
import '../app/globals.css'

export const inter = Inter({ subsets: ["latin"] });
export const raleway = Raleway({ subsets: ['latin'], weight:['400', '600', '700', '900'] })
export const monserrat = Montserrat({ subsets: ['latin'], weight:['400', '700', '900'] })
export const satisfy = Satisfy({ subsets: ['latin'], weight: '400' })
export const sourcecode = Source_Code_Pro({ subsets: ['latin'], weight: [ '300' ,'400','700','900'] })