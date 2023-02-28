import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/post/Post';
import Edit from './components/post/Edit';
import Create from './components/post/Create';

function App() {
  return (
    <div className="App">
    <Navbar/>
		<div className={'container'}>
			<Routes>
				<Route element={<Home/>} path={'/'} />
				<Route path={'/post/:postId'} element={<Post/>}/>
				<Route path={'/edit/:postId'} element={<Edit/>}/>
				<Route path={'create'} element={<Create/>}/>
			</Routes>
		</div>
    </div>
  );
}

export default App;
