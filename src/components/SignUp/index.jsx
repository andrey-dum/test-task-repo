import React, { useEffect, useState } from 'react';

import './index.scss'
import ModalWindow from './ModalWindow';
import { useActions, useSelector } from '../../hooks/store';
import { getPositions, authUser } from '../../store/actions';

const actionsToBind = {
    getPositions,
    authUser
}

const SignUp = () => {
    const user = useSelector(state => state.users.user)
    const actions = useActions(actionsToBind);
    const positions = useSelector(state => state.users.positions)
    const loading = useSelector(state => state.app.loading)

    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле не может быть пустым');

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле не может быть пустым');

    const [phone, setPhone] = useState('');
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [phoneError, setPhoneError] = useState('Поле не может быть пустым');

    const [positionId, setPositionId] = useState(1);

    const [photo, setPhoto] = useState('');
    const [photoError, setPhotoError] = useState('')

    const [formValid, setFormValid] = useState(false)
   
    
    

    useEffect(() => {
        actions.getPositions()
    }, [ actions])

    useEffect(() => {
        if (nameError || emailError || phoneError || photoError || !photo) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [ nameError, emailError, phoneError, photoError, photo])

     

    const handlerBlur = (e) => {
    switch(e.target.name) {
        case 'name':
            setNameDirty(true)
            break;
        case 'email':
            setEmailDirty(true)
            break;
        case 'phone':
            setPhoneDirty(true)
            break;
        default:
            break
    }
    }
      
      const handlerName = (e) => {
        setName(e.target.value)

        if (e.target.value.length < 2 || e.target.value.length > 60) {
            setNameError('Username should contain 2-60 characters') 
            
        } else {
            setNameError('')
        }
        
      }

    const changePhoneHandler = (e) => {
        setPhone(e.target.value)
        if (!/^[\+]{0,1}380([0-9]{9})$/.test(String(e.target.value))) {
            setPhoneError('User phone number. Number should start with code of Ukraine +380')
        } else {
            setPhoneError('')
        }
    }

    const handlerEmail = (e) => {
        setEmail(e.target.value)
    
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(String(e.target.value))) {
            setEmailError('Email некорректный!')
        } else if (e.target.value.length < 8 || e.target.value.length > 100) {
            setEmailError('User email should contain 8-100 characters') 
        } else {
            setEmailError('')
        }
        
    }

    const changeRadioHandler = (e) => {
        setPositionId(e.target.value)
    }


    const photoChangeHandler = (e) => {
        const file = e.target.files[0];

        const fileName = file.name;

        const fileExtension = fileName.replace(/^.*\./, '');
        const fileSize = file.size;

        if (fileSize <= 5000000 && fileExtension === 'jpg' || fileExtension === 'jpeg') {
            setPhoto(file);
        } else {
            setPhotoError('Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.')
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // const formData = new FormData(e.target);
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('position_id', positionId);
        formData.append('photo', photo);

        actions.authUser(formData)
        setEmail('')
        setName('')
        setPhone('')
        setPhoto('')
        setPositionId(1)   
    }

    return (
        <div className="signUp section">
            <div className="container">
                <div className="signup__wrapper">

                        <h1 className="section__title text-center">Register to get a work</h1>
                        <p className="text-center">Attention! After successful registration and alert, 
                            update the list of users in the block from the top</p>

                            <form className="signup__form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        required
                                        type="text" 
                                        value={name}
                                        onBlur={handlerBlur} 
                                        onChange={handlerName}
                                        name="name" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Your name"
                                    />
                                    {<div>{nameDirty && nameError && <small style={{color: 'red'}}>{nameError}</small> }</div> }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        
                                        type="email" 
                                        className="form-control" 
                                        name="email"
                                        value={email}
                                        onBlur={handlerBlur} 
                                        onChange={handlerEmail}
                                        id="email" 
                                        placeholder="Your email" 
                                    />
                                    {<div>{emailDirty && emailError && <small style={{color: 'red'}}>{emailError}</small> }</div> }
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="number">Phone number</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        name="phone"
                                        value={phone}
                                        onBlur={handlerBlur} 
                                        onChange={changePhoneHandler}
                                        id="phone" 
                                        placeholder="+380 XX XXX XX XX"  
                                    />
                                     {<div>{phoneDirty && phoneError && <small style={{color: 'red'}}>{phoneError}</small> }</div> }
                                    <small id="emailHelp" className="form-text text-muted">Enter a phone number in international format</small>
                                </div>

                                    <div className="select__position">Select your position</div>
                               
                                    { positions && positions.map(p => (
                                        <div className="form-check" key={p.id}>
                                            <input 
                                                onChange={changeRadioHandler} 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="position" 
                                                id={p.id} 
                                                value={p.id} 
                                                checked={p.id == positionId}
                                            />
                                            <label className="form-check-label" htmlFor={p.id}>
                                                {p.name}
                                            </label>
                                        </div>
                                    )) }

                                    <div className="input-group upload__file is-invalid">
                                        <div className="custom-file">
                                        <label className="upload__title" htmlFor="photo">Photo</label>
                                        <input onChange={photoChangeHandler} name="photo" type="file" className="custom-file-input" id="photo"  />
                                        <label className="custom-file-label" htmlFor="photo">Choose file...</label>
                                        </div>
                                        {<div>{photoError && <small style={{color: 'red'}}>{photoError}</small> }</div> }
                                    </div>
                                    

                                    <div className="text-center">
                                        <button disabled={loading || !formValid} type="submit" className="btn btn-primary">Sign up now</button>
                                    </div>
                                </form>
                        <ModalWindow user={user} />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
