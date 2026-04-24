import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import LoginPage from './pages/Auth/LoginPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import DashboardPage from './pages/Dashboard/DashboardPage.jsx';
import DocumentListPage from './pages/Documents/DocumentListPage.jsx';
import DocumentDetailPage from './pages/Documents/DocumentDetailPage.jsx';
import FlashcardsListPage from './pages/Flashcards/FlashcardsListPage.jsx';
import FlashcardPage from './pages/Flashcards/FlashcardPage.jsx';
import QuizTakePage from './pages/Quizzes/QuizTakePage.jsx'
import QuizResultPage from './pages/Quizzes/QuizResultPage.jsx'
import ProfilePage from './pages/Profile/ProfilePage.jsx'
const App = () => {
  const isAuthenticated = true;
  const loading = false;

  if(loading){
    return (
      <div className='flex items-center justify-center h-screen'>
        <p>Loading...</p>
      </div>
    )
  }


  return (
    <Router>
      <Routes>
        <Route path='/' element= {isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace/>} />
        <Route path='/login' element= {<LoginPage/>} />
        <Route path='' element= {<RegisterPage/>} />

        {/*Protected routes  */}
        <Route  element={<ProtectedRoute />}>
          <Route path='/dashboard' element = {<DashboardPage />}></Route>
          <Route path='/documents' element = {<DocumentListPage/>}></Route>
          <Route path='/documents/:id' element = {<DocumentDetailPage/>}></Route>
          <Route path='/flashcards' element = {<FlashcardsListPage/>}></Route>
          <Route path='/documents/:id/flashcards' element = {<FlashcardPage/>}></Route>
          <Route path='/quizzes/:quizId' element = {<QuizTakePage/>}></Route>
          <Route path='/quizzes/:quizId/results' element = {<QuizResultPage/>}></Route>
          <Route path='/profile' element = {<ProfilePage/>}></Route>
        </Route>

        <Route path='*' element= {<NotFoundPage/>} />
      </Routes>
    </Router>
  )
}

export default App
