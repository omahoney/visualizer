import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Viztopia Logo" width={30} height={30} /> 
        <p className="logo_text">Viztopia</p> 
      </Link>
      <Link href="/visualizer" className="nav_link">Visualizer</Link>
    </nav>
  )
}

export default Nav