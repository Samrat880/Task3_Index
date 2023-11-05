import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Tasks</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Repository Link</th>
            <th>Deployment Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>my-react-app</td>
            <td>
              <a href="https://github.com/Samrat880/Task3_My_React_App.git">Link 1</a>
            </td>
            <td>
              <a href="https://task3-my-react-app-olive.vercel.app/">Link 1</a>
            </td>
          </tr>
          <tr>
            <td>react-calculator-app</td>
            <td>
              <a href="https://github.com/Samrat880/Task3_Calculator.git">Link 2</a>
            </td>
            <td>
              <a href="https://task3-calculator-beta.vercel.app/">Link 2</a>
            </td>
          </tr>
          <tr>
            <td>color-picker-react-app</td>
            <td>
              <a href="https://github.com/Samrat880/Task3_Color_Picker.git">Link 3</a>
            </td>
            <td>
              <a href="https://task3-color-picker-mu.vercel.app/">Link 3</a>
            </td>
          </tr>
          <tr>
            <td>usertable-react-app</td>
            <td>
              <a href="https://github.com/Samrat880/Task3_Usertable_React_App.git">Link 4</a>
            </td>
            <td>
              <a href="https://task3-usertable-react-app-mu.vercel.app/">Link 4</a>
            </td>
          </tr>
          <tr>
            <td>age-calculator-react-app</td>
            <td>
              <a href="https://github.com/Samrat880/Task3_Age_Calculator.git">Link 5</a>
            </td>
            <td>
              <a href="https://task3-age-calculator-ten.vercel.app/">Link 5</a>
            </td>
          </tr>
          <tr>
            <td>portfolio</td>
            <td>
              <a href="https://github.com/Samrat880/Task3_Portfolio_React-.git">Link 6</a>
            </td>
            <td>
              <a href="https://task3-portfolio-react-murex.vercel.app/">Link 6</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
