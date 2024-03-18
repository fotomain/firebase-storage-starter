
// =========
import './Main.css';
import FileUpload1 from './component/FileUpload';
import FileUpload2 from './component/FileUpload';

import {doc, setDoc} from "firebase/firestore";
import {fidb} from "./firebase_stack/fi_firebase-config";

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

            <button onClick={()=>
            {
//             fi_job_queue_crud_create
                let job_data = {
                    job_type:'file2sql',
                    job_guid:'job_guid__9-9-9__'+Date.now(),
                    url:'https://firebasestorage.googleapis.com/v0/b/reactlogin1-c98e3.appspot.com/o/files%2Ffile-3-MIN-f888.mp4?alt=media&token=75ba7a7c-0303-47dc-9bbe-dac7d4307384',
                    user_guid:'uwieortwieputtiweporitwer'
                }

                const doc_ref= doc(fidb,'job_queue',job_data.job_guid)
                setDoc(
                    doc_ref
                    , {job_data:job_data}
                    , { merge: true }

                ).then((res) => {
                    console.log('=== fi_job_queue_create')
//                           if(params.do_after) params.do_after(res)
                })
            }
            }
                    style={{color:'green', border:'2px solid green', backgroundColor:'white', padding:'10px', }}
            >   JOB START file2sql
                    <br/>
                fi_job_queue_crud_create
            </button>

            <br/>


        </div>
      </div>
    </div>
  );
}

export default App;

