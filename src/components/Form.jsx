export default function Form(props) {
  const { children, ...rest } = props;
  return (
    <form {...rest} className='flex flex-col items-center'>
      {children}
    </form>
  );
}
