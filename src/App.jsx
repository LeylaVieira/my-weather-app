import './styles/styles.scss'

function App() {

  return (
    <main className="main">
      <div className="current bg-01d">
        <div className="current__wrapper">
          <div className="current__main">
            <p className="current__date">Wedneday 20, March</p>
            <h1 className="current__city">Santiz</h1>
            <div className="current__icon">A</div>
            <div className="current__temps">
              <p className='temp__description'>Broken clouds</p>
              <p className='temp temp--big'>14</p>
              <div className='temp__group'>
                <p className='temp temp--min'>8</p>
                <p className='temp temp--max'>14</p>
              </div>
            </div>
          </div>
          <ul className='current__infos info'>
            <li className='info__item'><span className='info__label'>Humidity</span>38%</li>
            <li className='info__item'><span className='info__label'>Wind</span>2.6</li>
            <li className='info__item'><span className='info__label'>Sunrise</span>7:52</li>
            <li className='info__item'><span className='info__label'>Sunset</span>19:04</li>
          </ul>
        </div>
      </div>
      <div className="forecast">
        <h2 className='forecast__title'>Next days</h2>
        <ul className='forecast__list'>
          {/* Repetir */}
          <li className='forecast__item'>
            <p className='forecast__day'>THU</p>
            <p className='forecast__date'>21 / 02</p>
            <div className='forecast__icon'>A</div>
            <div className='temp__group'>
              <p className='temp temp--min'>8</p>
              <p className='temp temp--max'>14</p>
            </div>
          </li>{/* Repetir */}
          <li className='forecast__item'>
            <p className='forecast__day'>THU</p>
            <p className='forecast__date'>21 / 02</p>
            <div className='forecast__icon'>A</div>
            <div className='temp__group'>
              <p className='temp temp--min'>8</p>
              <p className='temp temp--max'>14</p>
            </div>
          </li>
          <li className='forecast__item'>
            <p className='forecast__day'>THU</p>
            <p className='forecast__date'>21 / 02</p>
            <div className='forecast__icon'>A</div>
            <div className='temp__group'>
              <p className='temp temp--min'>8</p>
              <p className='temp temp--max'>14</p>
            </div>
          </li>
          <li className='forecast__item'>
            <p className='forecast__day'>THU</p>
            <p className='forecast__date'>21 / 02</p>
            <div className='forecast__icon'>A</div>
            <div className='temp__group'>
              <p className='temp temp--min'>8</p>
              <p className='temp temp--max'>14</p>
            </div>
          </li>
          <li className='forecast__item'>
            <p className='forecast__day'>THU</p>
            <p className='forecast__date'>21 / 02</p>
            <div className='forecast__icon'>A</div>
            <div className='temp__group'>
              <p className='temp temp--min'>8</p>
              <p className='temp temp--max'>14</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default App
