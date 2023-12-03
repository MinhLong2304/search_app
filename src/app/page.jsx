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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/735px-Magnifying_glass_icon.svg.png"
        width={150}
        height={50}
      />
      <SearchBar></SearchBar>
    </div>
    
    
    </>
  )
}
