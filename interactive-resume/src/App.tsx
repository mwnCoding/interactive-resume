import './App.css'

import { useResumeViewModel } from './viewmodels/ResumeViewModel'
import ExperienceList from './views/ExperienceList';
import Header from './views/Header'

function App() {
  const { resume, loading } = useResumeViewModel();
   if (loading) return <p>loading...</p>;

  return (
    <div className="AppContainer">
      <div className="HeaderContainer">
        {resume && <Header resume={resume} />}
      </div>
      <div className="ExperienceListContainer">
        {resume && <ExperienceList resume={resume} />}
      </div>
    </div>
  )
}

export default App
