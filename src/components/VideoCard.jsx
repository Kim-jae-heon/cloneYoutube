import { useNavigate } from 'react-router-dom';


const VideoCard = ({ video, type }) => {
  const time = Math.floor((new Date() - new Date(video.snippet.publishedAt)) / 1000 / 60 / 60);
  const showTime = time > 24 
  ? Math.floor(time / 24) + 'days ago' 
  : time + 'hours ago';
  const navigate = useNavigate();
  const isList = type === 'list';

  const watchVideoDetail = () => {
    navigate(`/videos/watch/${video.id}`, {state: { video }});
  }

  return (
    <li className={isList ? 'flex gap-1 m-2' : ''}
    onClick={watchVideoDetail}>
      <img className={isList ? 'w-60 mr-2' : 'w-full'}
      src={video.snippet.thumbnails.medium.url}
      alt={video.snippet.title} />
      <div>
        <div className="font-semibold my-2 line-clamp-2">
          {video.snippet.title}
        </div>
        <div className="text-xs opacity-80">{video.snippet.channelTitle}</div>
        <div className="text-xs opacity-80">{showTime}</div>
      </div>
    </li>
  );
}

export default VideoCard;