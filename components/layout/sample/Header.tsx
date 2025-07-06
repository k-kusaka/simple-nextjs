import { FaChartLine } from 'react-icons/fa6';

export const Header = () => {
  return (
    <header className='flex h-full items-center'>
      <h1 className='flex items-center gap-1 text-2xl font-black tracking-wider'>
        <FaChartLine className='text-accentBlue' />
        Klab
      </h1>
    </header>
  );
};
