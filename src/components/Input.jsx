export default function Input() {
  return (
    <div className='w-1/3'>
      <label
        htmlFor='search'
        className='w-full flex justify-center items-center border-2 px-2 py-1 rounded-full'>
        <input
          id='search'
          type='text'
          name='search'
          className='w-full px-2 border-0 outline-0'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className=''>
          <path d='m21 21-4.34-4.34' />
          <circle cx='11' cy='11' r='8' />
        </svg>
      </label>
      <button type='submit' className='opacity-0' />
    </div>
  );
}
