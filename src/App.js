import './Main.css';
import FileUpload1 from './component/FileUpload';
import FileUpload2 from './component/FileUpload';

function App() {

  return (
    <div className='App'>
      <div className="header">
        <h1>React with Firebase Storage</h1>
      </div>
      <div className="row">
        <div className="main">
          <h2>Upload the File</h2>
          <span className="break"></span>

          <FileUpload1></FileUpload1>
          <FileUpload2></FileUpload2>

        </div>
      </div>
    </div>
  );
}

export default App;
