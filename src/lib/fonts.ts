import localFont from 'next/font/local'
import { Geist_Mono, Inter } from "next/font/google";

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets:["latin"]
}) 

export const eudoxus = localFont({
    variable: '--font-eudoxus',
    src: [
      {
        path: '../fonts/Eudoxus/EudoxusSans-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../fonts/Eudoxus/EudoxusSans-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../fonts/Eudoxus/EudoxusSans-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../fonts/Eudoxus/EudoxusSans-Light.ttf',
        weight: '300',
        style: 'normal',
      },
    ],
    display: 'swap',
})

export const editor = localFont({
    variable: '--font-editor',
    src: [
      {
        path: "../fonts/Editor/EditorsNote-Extralight.ttf",
        weight: '200',
        style: 'normal',
      },
      {
        path: "../fonts/Editor/EditorsNote-ExtralightItalic.ttf",
        weight: '200',
        style: 'italic',
      },
      {
        path: "../fonts/Editor/EditorsNote-Italic.ttf",
        weight: '400',
        style: 'italic',
      },
      {
        path: "../fonts/Editor/EditorsNote-Light.ttf",
        weight: '300',
        style: 'normal',
      },
      {
        path: "../fonts/Editor/EditorsNote-LightItalic.ttf",
        weight: '300',
        style: 'italic',
      },
      {
        path: "../fonts/Editor/EditorsNote-MediumItalic.ttf",
        weight: '500',
        style: 'italic',
      },
      {
        path: "../fonts/Editor/EditorsNote-Regular.ttf",
        weight: '400',
        style: 'normal',
      },
      {
        path: "../fonts/Editor/EditorsNote-ThinItalic.ttf",
        weight: '100',
        style: 'italic',
      },
    ],
    display: 'swap',
})

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap'
});