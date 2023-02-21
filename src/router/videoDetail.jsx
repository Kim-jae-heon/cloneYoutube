import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideo';

const VideoDetail = () => {
  const { state: { video } } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe width="640" height="360" 
        src={`https://www.youtube.com/embed/${video.id}?list=RDQMuFsL1xsijAc`}
        title={`${video.snippet.title}`} 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

export default VideoDetail;

