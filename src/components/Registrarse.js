import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'; // Importa las funciones necesarias de Firebase v9
import appFirebase from '../credenciales';

const Registrarse = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setUser] = useState(null);

  const auth = getAuth(appFirebase); // Obtiene la instancia de autenticación

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleRegister = async () => {
    try {
      if (!validateEmail(email)) {
        setErrorMessage('Por favor, ingrese un correo electrónico válido.');
        return;
      }

      if (password.length < 6) {
        setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth, // Usa la instancia de autenticación
        email,
        password
      );
      const user = userCredential.user;
      setSuccessMessage(`Usuario registrado: ${user.email}`);
      console.log('Usuario registrado:', user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('El usuario ya está registrado. Puede iniciar sesión.');
      } else {
        setErrorMessage(`Error al registrar usuario: ${error.message}`);
        console.error('Error al registrar usuario:', error);
      }
    }
  };

  const validateEmail = (email) => {
    // Utiliza una expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  // Si ya está autenticado, no mostrar el formulario
  if (user) {
    return (
      <div className='container-fluid'>
      <div className="container mt-5">
        <div className="alert alert-success">
          <p>Ya estás registrado como {user.email}. Puedes seguir comprando.</p>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className='container-fluid'>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registro</h2>
              {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
              {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
              <button onClick={handleRegister} className="btn btn-primary">Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Registrarse;
