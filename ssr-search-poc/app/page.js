import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <p className="text-xl flex pt-3 pr-3">
         Test Search Functionality by navigating to&nbsp;
          <code><Link href="search" style={{color: 'blue', textDecoration: 'underline'}}>/search</Link></code>
        </p>
      </div>
    </main>
  )
}
