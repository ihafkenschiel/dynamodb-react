import { fetchData, putData } from './AwsFunctions'

function App() {
  const fetchDataFormDynamoDb = () => {
    fetchData('Users')
  }

  const addDataToDynamoDB = async () => {
    const userData = {
      id: '101',
      firstName: 'Faisal',
      lastName: 'Ali',
    }

    await putData('Users', userData)
  }

  return (
    <div className="App">
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => addDataToDynamoDB()}> Post </button>
    </div>
  )
}

export default App
