import SearchInput from './searchInput';

async function getData(id) {
  const res = await fetch(`https://search-api-decoupled-drupal-qa.pantheonsite.io/en/jsonapi/index/articles_index?filter[fulltext]=${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
  
  export default async function SearchPage({ params }) {
    let data = null
    if(params.id) {
      data = await getData(params.id[0]);
    }

    const RenderCurrentItems = ({ currentItems }) => {
      return currentItems.map((item) => {
        return (
          <article
            key={item.id}
            className="flex flex-col p-3 w-fit mx-auto mb-10"
          >
            <h2 className="justify-start my-auto text-2xl mb-2">{item.attributes.title}</h2>
            <p className="max-w-prose my-2">
              {item?.attributes.body.value.substr(3, 150)}...
            </p>
          </article>
        );
      });
    };
  
    return <div  className='flex flex-col p-3 w-2/3 mx-auto'>
    <span className="text-2xl">Search Page</span>
        <SearchInput />
        { data ? <RenderCurrentItems currentItems={data.data}/> :
         <div>
            <h1 className="text-xl">Experiment searching our test data. The backend being queried is based off of the drupal umami dataset.</h1>
            <p>Example searches with mathcing results:</p> 
            <ul className="list-disc">
                <li>milk</li>
                <li>chocolate</li>
                <li>supermarket</li>
            </ul>
            </div>}
    </div>;
  }