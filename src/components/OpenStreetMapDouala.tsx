
import React from "react";

const OpenStreetMapDouala = () => {
  return (
    <div style={{ width: "100%", height: 320, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px #0001" }}>
      <iframe
        title="Map of Douala"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 16 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.openstreetmap.org/export/embed.html?bbox=9.665%2C3.995%2C9.825%2C4.125&amp;layer=mapnik&amp;marker=4.0500,9.7670"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default OpenStreetMapDouala;
