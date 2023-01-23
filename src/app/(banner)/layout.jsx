// import { Counter } from './Counter.jsx'
import { Anton } from '@next/font/google'
import 'src/app/globals.css'
// No me salio importar la Font como lo hizo MiduDev ¯\_(•_•)_/¯ Y ya intenté de todo, y leí la docu oficial, por eso funciona así
const font = Anton({
  weight: '400',
  subsets: ['latin'],
  // la variable tambien se puede usar en archivos css. Con font.variable
  variable: '--anton-font'
})

export default function Layout ({ children }) {
  return (
    <div>
      <marquee className={font.className} style={{ background: 'rgb(250, 250, 250)', color: 'black', fontSize: '15px' }}>Capaz para publicidad</marquee>
      {children}
    </div>
  )
}
