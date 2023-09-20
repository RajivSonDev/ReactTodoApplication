import './TodoApp.css';
import { BrowserRouter, Routes, Navigate} from 'react-router-dom';
import { Route } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodoComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './security/AuthContext';
import { useState } from 'react';
import TodoComponent from './TodoComponent';



function AuthenticatedRoute({children}){

    const authContext=useAuth()

    if(authContext.isAuthenticated){
        return children
    }

    // Navigate will be take back the user to login component

    return <Navigate to="/" />

}


export default function TodoApp(){

    const []=useState()

    return (
        <div className="TodoApp">
           <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>
                        <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                        <WelcomeComponent />
                        </AuthenticatedRoute>
                        }></Route>
                        
                        <Route path='/todos' element={
                        <AuthenticatedRoute>
                        <ListTodosComponent />
                        </AuthenticatedRoute>
                        }>
                            
                        </Route>
                        <Route path='/logout' element={<LogoutComponent />}></Route>
                        <Route path='/todo/:id' element={
                        <AuthenticatedRoute>
                        <TodoComponent />
                        </AuthenticatedRoute>
                        }
                        
                        ></Route>
                        <Route path='*' element={<ErrorComponent />}></Route>
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>  
        </div>
    )
}












