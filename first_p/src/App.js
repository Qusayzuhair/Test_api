import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = useState('')
  useEffect(() => {
    async function callApi() {
      const apiResult = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setApiData(apiResult.data)

    }
    callApi()
    //console.log(apiData)

  }, [apiData])
  return (
    <div className="App">
      <table style={{ width: `800px`, margin: '50px auto', border: `3px solid #ccc`, background: 'lightblue' }} >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>

          </tr>

        </thead>
        <tbody>
          {
            apiData &&
            (apiData).map((apiDetails, index) => {
              return (
                <tr key={index}>
                  <td>
                    {apiDetails.id}
                  </td>
                  <td>
                    {apiDetails.title}
                  </td>
                  <td>
                    {apiDetails.body}
                  </td>
                </tr>
              )


            })
          }

        </tbody>

      </table>

    </div>
  );
}

export default App;
