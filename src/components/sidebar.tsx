import Link from "next/link";

/**
 * create a react component that renders a sidebar
 * with a list of links href the different pages
 */
const Sidebar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}
export default Sidebar;