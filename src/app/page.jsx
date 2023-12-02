import Image from 'next/image';
import HomeHeader from './/components/HomeHeader';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <>
       {/*Header */}
    <HomeHeader></HomeHeader>
    
    {/*Body*/}
    <div className='flex flex-col items-center mt-24'>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
        width={300}
        height={100}
      />
      <SearchBar></SearchBar>
    </div>
    
    
    </>
  )
}
