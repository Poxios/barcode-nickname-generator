import { CopyToClipboard } from 'react-copy-to-clipboard';
import md5 from 'md5';
import { useState } from 'react'
import './App.css'
import { barcodeGen } from './barcodeGen';
import GitHubButton from 'react-github-btn'

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
        <img src={'./android-icon-144x144.png'} alt="Main Icon" style={{ height: '32px', marginRight: '16px' }} />
        Random Barcode Nickname Generator
      </div>
      <div className="contentBox">
        <GitHubButton href="https://github.com/Poxios/barcode_nickname_generator" data-size="large" data-show-count="true" aria-label="Star Poxios/barcode_nickname_generator on GitHub">Star</GitHubButton>
        <div className="copyAlertBox">
          Copied to clipboard!
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
          <label htmlFor="radio3">Generate longer (14 letters)</label>
        </div>
        <div className="infoBox">
          Q. What is barcode nickname?
          <br />
          <b>A. Barcode nickname is a string made with 'l' and 'I'.</b>
          <br />
          <br />
          &nbsp;&nbsp;Small 'L' and large 'i' are very hard to distinguish with naked eye, so you can prevent being identified via nickname easy!
          <br />
          <br />
          <br />
          Q. Is it unique?
          <br />
          <b>A. The number of cases that can be combined with this is more than you might think.</b>
          <br />
          <br />
          &nbsp;&nbsp;Nicknames made with 'l' and 'I' in 10 letters -> 2<sup>10</sup>=1,024 cases<br />
          &nbsp;&nbsp;in 14 letters -> 2<sup>14</sup>=16,384 cases

        </div>
      </div>
      <div className="footer">
        Made by <a href="https://github.com/Poxios">@Poxios</a>, 2022
      </div>
    </div>
  );
}

export default App;
