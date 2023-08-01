import LocalFont from 'next/font/local'
import { Yesteryear } from 'next/font/google'

// const vazirFont = LocalFont({
//   src: [
//     {
//       path: '../public/fonts/vazir/Vazirmatn-Thin.woff2',
//       weight: '100',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-ExtraLight.woff2',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-Light.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-ExtraBold.woff2',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/vazir/Vazirmatn-Black.woff2',
//       weight: '900',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-vazir',
//   style: 'normal',
//   display: 'block',
// })

const yesteryear = Yesteryear({ weight: '400', subsets: ['latin'] })

export { yesteryear }
