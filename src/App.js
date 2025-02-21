import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Footer from "./components/Footer"
import Button from "./components/Button"
import List from "./components/List"
import Add from "./components/Add"
import CredentialsSignInPage from "./components/Login"
import ResponsiveAppBar from "./components/AppBar"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login2"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [items, setItems] = useState([
        { id: 1, name: "item1", price: 10 },
        { id: 2, name: "item2", price: 20 },
        { id: 3, name: "item3", price: 30 }
    ]);

    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    const nombre = "andre";
    const elemento = <h2> hola, {nombre}</h2>;

    const sum = () => {
        setCount(count + 1);
        console.log(count);
    };

    const add = (item) => {
        console.log('hola');
        // called a spread, is like a push [...arr, itemToPush]
        setItems([...items, item]);
    };

    const del = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const login = (user) => {
        if (user.username == "andre" && user.password == "123") {
            setIsLogin(true);
        }

        return isLogin;
    }

    const logout = () => {
        setIsLogin(false);
    }

    return (
        <div>
            <BrowserRouter>
                {isLogin && <ResponsiveAppBar logout={logout} />}
                <Routes>
                    <Route path="/" element={<Login login={login} />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/add" element={<Add add={add} />} />
                    <Route path="/items" element={<List items={items} ondelete={del} />} />
                </Routes>
                <Footer />
            </BrowserRouter>

            {count}
            <Button />
            {/*<Button name="suma" click={sum} />
            <Button name="mensaje" click={() => alert("hola")} />
            */}
            <Footer />
        </div>
    );
}

export default App;
