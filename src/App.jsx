// --> import components
import DisplayController from './components/DisplayController'
import SearchForm from './components/SearchForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='bg-[linear-gradient(45deg,_#08244F,_#134CB5,_#0B42AB)]
         w-full min-h-screen px-6 py-10 flex flex-col items-center'>

        {/* search & card */}
        <SearchForm />
        <DisplayController />

        <Footer />
      </div>
    </>

  )
}

export default App
