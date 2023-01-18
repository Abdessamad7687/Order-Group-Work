import React from 'react'

const login = () => {
    return (
        <div className='container'>
            <h2 className="text-center mt-5">Connexion</h2>
            <form className="mt-5 col-md-8 mx-auto">
                <div className='form-group'>
                    <input type="text" className='form-control mt-2' placeholder="Votre username" />
                </div>
                <div className='form-group'>
                    <input type="password" className='form-control mt-2' placeholder="Votre mot de passe" />
                </div>
                <div className='form-group'>
                    <button type="submit" className='btn btn-primary mt-2'>Se connecter</button>
                </div>
            </form>
        </div>
    )
}

export default login