export default function Login() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <form className="d-flex flex-column align-items-center">
        <h1 className="text-light">Login</h1>
        <input
          type="email"
          class="form-control my-3"
          id="InputEmail"
          aria-describedby="emailHelp"
          placeholder="E-mail"
        />
        <input
          type="password"
          class="form-control my-3"
          id="InputPassword"
          placeholder="Senha"
        />
        <button type="submit" class="btn btn-dark mt-3">
          Acessar
        </button>
      </form>
    </div>
  );
}
