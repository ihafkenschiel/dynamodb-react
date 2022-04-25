import { fetchData } from './AwsFunctions'

function App() {
  const fetchDataFormDynamoDb = () => {
    fetchData('Users')
  }

  return (
    <div className="App">
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
    </div>
  )
}

export default App
