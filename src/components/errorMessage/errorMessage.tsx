type Props = { error: Error }

const ErrorMessage = ({ error }: Props) => <p className="error">{error.message}</p>

export default ErrorMessage;
