import SearchInput from './[...id]/searchInput.js';

async function getData(id) {
  const res = await fetch(`https://search-api-decoupled-drupal-qa.pantheonsite.io/en/jsonapi/index/articles_index?filter[fulltext]=${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

  export default async function SearchPage({ children }) {

    return <div  className='flex flex-col p-3 w-2/3 mx-auto'>
    <span className="text-2xl">Search Page</span>
         <div>
            <h1 className="text-xl">Experiment searching our test data. The backend being queried is based off of the drupal umami dataset.</h1>
            <p>Example searches with mathcing results:</p>
            <ul className="list-disc">
                <li>milk</li>
                <li>chocolate</li>
                <li>supermarket</li>
            </ul>
            </div>

    </div>;
  }