import { CopyToClipboard } from 'react-copy-to-clipboard';
import md5 from 'md5';
import { useState } from 'react'
import './App.css'
import { barcodeGen } from './barcodeGen';

function App() {
  const [barcodeId, setBarcodeId] = useState(barcodeGen({}));
  const [options, setOptions] = useState({
    useLowerCaseI: false,
    use1: false,
    genLonger: false
  });

  return (
    <div className="body">
      <div className="navBar">
        Random Barcode Nickname Generator
      </div>
      <div className="contentBox">
        <div className="infoBox">
          Use barcode name made with l (small 'L'), I (large 'i') to prevent to be identified via nickname!
        </div>
        <a className="github-button" href="https://github.com/Poxios/barcode_nickname_generator" data-size="large" aria-label="Star Poxios/barcode_nickname_generator on GitHub">Star</a>
        <div className="copyAlertBox">
          Copied!
        </div>
        <CopyToClipboard text={barcodeId}>
          <input className="resultInput" value={barcodeId} readOnly onClick={() => {
            document.getElementsByClassName('copyAlertBox')[0].style.display = 'block'
          }} />
        </CopyToClipboard>
        <div className="md5Box">
          MD5: {md5(barcodeId)}
        </div>
        <button className="genButton" onClick={() => {
          setBarcodeId(barcodeGen(options))
        }}>Generate!</button>
        <div>
          <input id="radio1" type="checkbox" onChange={() => setOptions(prev => ({ ...prev, useLowerCaseI: !prev.useLowerCaseI }))} />
          <label htmlFor="radio1">Use lowercase of 'i'</label>
        </div>
        <div>
          <input id="radio2" type="checkbox" onChange={() => setOptions(prev => ({ ...prev, use1: !prev.use1 }))} />
          <label htmlFor="radio2">Include '1' on generation</label>
        </div>
        <div>
          <input id="radio3" type="checkbox" onChange={() => setOptions(prev => ({ ...prev, genLonger: !prev.genLonger }))} />
          <label htmlFor="radio3">Generate longer</label>
        </div>

      </div>
      <div className="footer">
        Made by <a href="https://github.com/Poxios">@Poxios</a>, 2022
      </div>
    </div>
  );
}

export default App;
