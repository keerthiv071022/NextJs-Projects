
async function getNews() {
  const res = await fetch(
    "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10"
  );

  return res.json();
}

export default async function News() {
  const data = await getNews();

  return (
    <div>
      <h1>Latest News</h1>

      {data.hits.map((news: any) => (
        <p key={news.objectID}>
          {news.title}
        </p>
      ))}
    </div>
  );
}
