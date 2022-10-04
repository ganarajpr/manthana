import Link from 'next/link';

export default function Layout(props) {
  return (
    <div className=''>
      <div class='navbar bg-base-100'>
        <Link href='/'>
          <div className='hover:cursor-pointer grid grid-flow-col justify-center items-center'>
            <img src='./logo-tr.png' className='w-12' />
            <a class='text-4xl'>मन्थनं</a>
          </div>
        </Link>
      </div>
      <div className={`mt-4 h-full w-full grid ${props.className || ''}`}>
        {props.children}
      </div>
    </div>
  );
}
