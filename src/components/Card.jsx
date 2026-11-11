export default function Card(props) {
  const { nameCharacter, imgUrl, imgAlt } = props;

  return (
    <div className='w-full h-72 rounded-xl p-4 bg-white backdrop:blur-md'>
      <div className='group w-full h-3/4 rounded overflow-hidden object-center object-cover'>
        <img
          className='group-hover:scale-110 transition-all ease-out duration-500 w-full h-full'
          src={`${imgUrl}`}
          alt={`${imgAlt}`}
        />
      </div>
      <div className='h-1/4 flex justify-center items-center'>
        <p className='text-lg lg:whitespace-nowrap'>{nameCharacter}</p>
      </div>
    </div>
  );
}
