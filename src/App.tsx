import { useState } from 'react'
import styles from './App.module.css'
import feitoCom from './assets/feitocom.png'

const App = () =>{

  const handleCalculateButton = () =>{
    if(heightField && weightField){
    } else{
      alert("Digite todos  os campos")
    }
  }

  const [heightField,setHeightField] = useState<number>(0)
  const [weightField,setWeightField] = useState<number>(0)

  return (
    <div className={styles.main}>
      {/*aqui vamos criar o header */}
      <header>
        <div className={styles.headerContainer}>
            <img src={feitoCom} alt="logo" width={150}/>
        </div>
      </header>
      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p> IMC é a sigla para Índice de Massa Corporal</p>

          <input
          type="number"
          placeholder="Digite sua altura"
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value)) }
          />

          <input
          type="number"
          placeholder="Digite seu peso"
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value)) }
          />

          <button onClick={handleCalculateButton}>Calcular</button>

        </div>
        <div className={styles.rightSide}>
        ...
        </div>

        </div>
      </div>
  )
}

export default App
