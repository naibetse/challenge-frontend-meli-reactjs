import { AppRouter } from "./routers/AppRouter";
import { ResultContext } from './helpers/ResultContext'
import { useState } from 'react'

function MeliApp() {
  
  const resultInitialState = {
    items: [],
    categories: [],
  }
  const [results, setResults] = useState(resultInitialState);

  return (
    <ResultContext.Provider value={{
      results, setResults
    }}>
      <AppRouter />
    </ResultContext.Provider>
  );
}

export default MeliApp;
