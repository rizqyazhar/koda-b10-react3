export default function Form(props) {
  const { children } = props;
  return <form className='flex flex-col items-center'>{children}</form>;
}
