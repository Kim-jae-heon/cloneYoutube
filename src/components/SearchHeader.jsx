import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Form } from 'react-router-dom';
import { FiYoutube, FiSearch } from 'react-icons/fi';

const SearchHeader = () => {
  const { keywords } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const submitParams = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  useEffect(() => {
    if(keywords) {
      setText(keywords);
    } else {
      setText('');
    }
  }, [keywords]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <FiYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
      </Link>
      <Form className='w-full flex justify-center'
      role='search' onSubmit={submitParams}>
        <input className='w-7/12 p-2 outline-none bg-black text-gray-50'
        type='search' value={text} 
        onChange={(e) => setText(e.target.value)} />
        <button className='bg-zinc-600 px-4'>
          <FiSearch />
        </button>
      </Form>
    </header>
  );
}

export default SearchHeader;