export const ErrorMessage = (props: {
  message: string;
  className?: string;
}) => {
  return (
    <div
      className={[
        'rounded-md border border-solid bg-red-500 p-4',
        'fixed top-1/2 left-1/2 w-full shadow-lg',
        'border-error-60 bg-error-50 -translate-x-1/2 text-white',
        'z-10 max-w-xl -translate-y-1/2 transform',
        props.className,
      ].join(' ')}
    >
      {props.message}
    </div>
  );
};
