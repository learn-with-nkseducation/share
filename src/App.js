import React, { useState, useEffect } from "react";
import Logo from "./logo.svg";
import India from "./india.png";
import logoUrl from "./india.png"; // This is your image URL

let globalLink = "https://play.google.com/store/apps/details?id=co.iron.nobtg";

const App = () => {
  const [qrValue, setQrValue] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setQrValue(globalLink);
  }, []);

  const handleCopyText = () => {
    navigator.clipboard
      .writeText(globalLink)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleShare = (e) => {
    e.preventDefault();
    if (whatsappNumber.length === 10 && /^[0-9]+$/.test(whatsappNumber)) {
      const message = encodeURIComponent(
        `हॅलो विद्यार्थी %F0%9F%91%8B,\n\nतुमचे NKs Education मध्ये हार्दिक स्वागत आहे! आम्ही तुमच्या प्रगतीसाठी सदैव तत्पर आहोत.\n\n📲 आमचे APP डाउनलोड करा:\nअशाच आणखी टेस्टसाठी आणि विविध शैक्षणिक साधनांसाठी आमचे APP डाउनलोड करा:\n🔗 NKs Education App ${globalLink}\n\n📢 NMMS 8वी मोफत टेस्ट:\nतुम्हाला ८ वी NMMS ची मोफत टेस्ट सोडवायची असल्यास खालील लिंकवर क्लिक करा:\n🔗 NMMS Free Test https://online-test.classplusapp.com/?testId=66ae4c69a20fcf7102157229&defaultLanguage=en\n\n📢 ही माहिती ८ वीच्या सर्व विद्यार्थ्यांना नक्की पोहोचवा!\n\nशुभेच्छा! %F0%9F%8E%89\n\nWhatsApp लिंकसाठी, कृपया खालील लिंकवर क्लिक करा:\n🔗 NMMS Free Test contact WhatsApp https://api.whatsapp.com/send?phone=919226719313\n\nशुभेच्छा!\n\n📸 येथे आमचा लोगो पहा: ${encodeURIComponent(
          logoUrl
        )}`
      );
      const url = `https://wa.me/+91${whatsappNumber}?text=${message}`;
      window.open(url, "_blank");
    } else {
      setError("Please enter a valid 10-digit Indian WhatsApp number.");
    }
  };

  return (
    <>
      <div className="wrapper">
        {/* Header */}
        <div className="header">
          <a href={globalLink} className="logo-link">
            <img className="logo" src={Logo} alt="logo" />
            <h1 className="head">Nk's Education Share</h1>
          </a>
        </div>

        {/* QR-Code */}
        <p className="qr-text">Scan Below QR To Download Application</p>
        {qrValue && (
          <div className="qr-code">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`}
              alt="QR code"
            />
          </div>
        )}

        {/* Download Link */}
        <div className="download-div">
          <p className="download-text">
            Download Application :
            <a href={globalLink} className="link">
              &nbsp;NK's Education
            </a>
          </p>
        </div>

        {/* Copy Link */}
        <div className="copy" onClick={handleCopyText}>
          <p className="copy-text">
            {globalLink} &nbsp;&nbsp;
            <i className="fa fa-copy" aria-hidden="true"></i>
          </p>
        </div>

        {/* WhatsApp Share */}
        <div className="form-div">
          <form
            onSubmit={handleShare}
            style={{ display: "flex", alignItems: "center" }}
          >
            <span className="flag">
              <img src={India} alt="flag" className="flag-logo" />
              &nbsp;+91
            </span>
            <input
              className="phone"
              type="text"
              placeholder="WhatsApp Number"
              maxLength={10}
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
            <button className="btn" type="submit">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              &nbsp;Share
            </button>
          </form>
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </>
  );
};

export const updateglobalLink = (newText) => {
  globalLink = newText;
};

export default App;
