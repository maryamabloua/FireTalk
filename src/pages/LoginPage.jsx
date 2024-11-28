import '../styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <form>
        <input type="email" className="input-field" placeholder="Email" />
        <input type="password" className="input-field" placeholder="Mot de passe" />
        <button type="submit" className="login-button">Se connecter</button>
      </form>
    </div>
  )
}

export default LoginPage
