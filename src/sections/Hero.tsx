import Headshot from '../assets/Hero/Headshot.jpeg'

const Hero = () => {
  return (
    <div className='bg-lightpeach'>
      <img
        src={Headshot}
        alt='RJ Tabelon headshot'
        className='w-48 h-48 object-cover'
      />
    </div>
  );
}

export default Hero