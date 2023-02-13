import sha256 from "crypto-js/sha256";
import shaOne from "crypto-js/sha1";
import MD5 from "crypto-js/md5";
import { useEffect, useRef, useState } from "react";
import copy from "copy-to-clipboard";

function App() {
  const textRef = useRef(null);
  const [text, setText] = useState("");
  const [sha1, setSha1] = useState("");
  const [sha2, setSha2] = useState("");
  const [md5, setMd5] = useState("");
  const [generated, setGenerated] = useState(false);
  const handleClick = () => {
    const txt = textRef.current.value;
    setSha1(shaOne(txt).toString());
    setSha2(sha256(txt).toString());
    setMd5(MD5(txt).toString());
    setText(txt);
    setGenerated(true);
  };

  return (
    <div className="container my-10 mx-auto">
      <div>
        <textarea
          ref={textRef}
          placeholder="Enter text"
          className="textarea mb-5 textarea-primary textarea-lg w-full"
        ></textarea>
        <button onClick={handleClick} className="btn btn-primary">
          Generate
        </button>
      </div>
      {generated && (
        <div className="overflow-x-auto mt-5">
          <table className="table border  min-w-fit">
            <tbody>
              <tr>
                <th className="w-10 border-r-2">Your String</th>
                <td className="">{text}</td>
                <td></td>
              </tr>
              <tr>
                <th className="border-r-2">MD5 hash</th>
                <td>
                  <span className="uppercase">
                    {md5.slice(0, Math.floor(md5.length / 2))}
                  </span>
                  <span>{md5.slice(Math.floor(md5.length / 2))}</span>
                </td>
                <td>
                  <div
                    onClick={(e) => {
                      copy(md5);
                      e.target.innerHTML = "Copied!";
                      setTimeout(() => {
                        e.target.innerHTML = "Copy";
                      }, 1000);
                    }}
                    className="btn btn-ghost"
                  >
                    Copy
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-r-2">SHA1 hash</th>
                <td>
                  <span className="uppercase">
                    {sha1.slice(0, Math.floor(sha1.length / 2))}
                  </span>
                  <span>{sha1.slice(Math.floor(sha1.length / 2))}</span>
                </td>
                <td>
                  <div
                    onClick={(e) => {
                      copy(sha1);
                      e.target.innerHTML = "Copied!";
                      setTimeout(() => {
                        e.target.innerHTML = "Copy";
                      }, 1000);
                    }}
                    className="btn btn-ghost"
                  >
                    Copy
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-r-2">SHA256 hash</th>
                <td>
                  <span className="uppercase">
                    {sha2.slice(0, Math.floor(sha2.length / 2))}
                  </span>
                  <span>{sha2.slice(Math.floor(sha2.length / 2))}</span>
                </td>
                <td>
                  <div
                    onClick={(e) => {
                      copy(sha2);
                      copy(sha1);
                      e.target.innerHTML = "Copied!";
                      setTimeout(() => {
                        e.target.innerHTML = "Copy";
                      }, 1000);
                    }}
                    className="btn btn-ghost"
                  >
                    Copy
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
