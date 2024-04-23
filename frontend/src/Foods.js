import React, { useState, useEffect } from 'react'


const Foods = () => {

    const [Foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('');
        const result = await response.json();
        setFoods(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching foods:', error);
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);



  return (
    <div className="">
      <div className="">
        <h1 className="">Foods</h1>

        <div className="">
          {Foods.map((food) => {
            return <div className="">
              <h1 className="">{food.name}</h1>
              <div className="">
                <h1 className="">{`Protein ${food.protein} ${food.unit}`}</h1>
                <h1 className="">{`Fat ${food.fat} ${food.unit}`}</h1>
                <h1 className="">{`Carb ${food.carb} ${food.unit}` }</h1>
              </div>

              <div className="">
                <input type="number"></input>
              </div>
            </div>
          })}
        </div>


      </div>


    </div>
  )
}

export default Foods