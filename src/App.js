import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  // トグルでローディング画面の切り替え
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  // クリックされたidの項目を削除する
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  // ツアー項目の読み込み
  const fetchTours = async () =>{
    setLoading(true);

    try {
      // URLを読み込む
      const response = await fetch(url);
      // 読み込んだURLをjson形式に変換
      const tours = await response.json();
      // ローディング画面から切り替える
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return(
      <main>
        <Loading />
      </main>
    );
  }

  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no tour left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
