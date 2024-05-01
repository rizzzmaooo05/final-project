const Header = () => {
  return (
    <header className="flex flex-row gap-4 bg-red-500 items-center justify-between">
        <h3 className="px-4 py-2 text-2xl text-white">
          <a href="/" className="hover:font-bold">Aplikasi Belum Punya Nama</a>
        </h3>
        <ul className="flex gap-2 px-4 py-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
  )
}

export default Header