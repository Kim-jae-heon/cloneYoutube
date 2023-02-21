import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from '@tanstack/react-query';

const ChannelInfo = ({ id, name }) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(['channel', id],
  () => youtube.channelImgURL(id), {staleTime: 1000 * 60 * 5});
  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}

export default ChannelInfo;