import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

const Videos = () => {
  const { keywords } = useParams();
  const { youtube } = useYoutubeApi();
  const {isLoading, error, data: videos} = useQuery(
    ['videos', keywords], () => {
      return youtube.search(keywords);
    }, { staleTime: 1000 * 60 }
  );

  // useEffect(() => {
  //   fetch(`${keywords ? 'search.json' : 'videos/popular.json'}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.items)
  //     setTitles(data.items.map(val => 
  //       val.snippet.title
  //     ));
  //   });
  // }, [keywords]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      <ul className='grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
      gap-2 gap-y-4'>
        {videos && videos.map((video) => {
          return (
            <VideoCard key={video.id} video={video} />
          );
        })}
      </ul>
    </div>
  )
}

export default Videos;