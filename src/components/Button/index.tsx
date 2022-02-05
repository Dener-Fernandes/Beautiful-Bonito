import './styles.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset',
  textButton: string,
}

export function Button({ type, textButton }: ButtonProps) {
  return (
    <button type={type}>{textButton}</button>
  );
}