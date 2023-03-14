import SearchInput from './[...id]/searchInput.js';

export default function SearchLayout({ children }) {
  return (
    <div id="search">
      <p>(Search Layout)</p>
      <SearchInput />
      {children}
    </div>
  )
}
