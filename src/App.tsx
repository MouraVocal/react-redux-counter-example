import './App.css'
import { connect } from 'react-redux'
import { CounterDecrement, CounterIncrement } from './actions/counter'

function App({ counter, increment, decrement }: { counter: number, increment: () => void, decrement: () => void }) {

  return (
    <>
      <div className='container'>
        <div className='App'>
          <p>Contador: {counter}</p>
          <div className='buttonContainer'>
            <button className='button' onClick={increment}>Incrementar</button>
            <button className='button' onClick={decrement}>Decrementar</button>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state: { counterReducer: { counter: number } }) => ({
  counter: state.counterReducer.counter,
})

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => void) => ({
  increment: () => dispatch(CounterIncrement()),
  decrement: () => dispatch(CounterDecrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
