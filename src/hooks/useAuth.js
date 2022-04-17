import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useAuth = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPass, setValidPass] = useState(true);
    const regexEmail = /^(\w+([.-]?\w+)*).{6,}@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,23}$/;

    useEffect(() => {
        onAuthStateChanged(auth, u => {
            setUser(u);
        });
    }, []);

    const handleEmail = event => {
        const e = event.target.value;
        setEmail(e);

        if (e.match(regexEmail)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    const handlePass = event => {
        const p = event.target.value;
        setPassword(p);

        if (p.match(regexPass)) {
            setValidPass(true);
        } else {
            setValidPass(false);
        }
    };

    const logOut = () => {
        signOut(auth).then(() => {
            navigate('/', { replace: true });
        });
    };

    return {
        user, setUser,
        email, setEmail,
        password, setPassword,
        validEmail, setValidEmail,
        validPass, setValidPass,
        handleEmail, handlePass,
        navigate, logOut
    };
};

export default useAuth;