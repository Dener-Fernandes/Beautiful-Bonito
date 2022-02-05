import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { MainImage } from '../../components/MainImage';

import './styles.scss';

export function SignInPage() {
  return (
    <main className="container">
      <div className="formContainer">
        <h1>Beautiful Bonito</h1>
        <form className="formContent">
          <label htmlFor="">E-mail</label>
          <Input type="text" placeholder="Digite seu e-mail" />
          <label htmlFor="senha">Senha</label>
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit" textButton="Entrar" />
          <p>Ainda não possui conta <a href="/SignUp">Cadastre-se</a></p>
        </form>
      </div>
      <div className="cardImage">
        <MainImage />
      </div>
    </main>
  );
}