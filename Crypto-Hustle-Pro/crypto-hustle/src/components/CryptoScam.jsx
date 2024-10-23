import React, { useEffect, useState } from "react";

const CryptoScam = () => {
    const [scamList, setScamList] = useState(null);

    useEffect(() => {
      const getScams = async () => {
        try {
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          const response = await fetch(
            "https://api.cryptoscamdb.org/v1/featured",
            requestOptions
          );
          const json = await response.json();
          console.log(json); // Check data structure here
          setScamList(json); // Update state with JSON data
        } catch (error) {
          console.error(error);
        }
      };
      getScams();
    }, []);

    return (
        <div>
          <p>Here is a list of coins and platforms involved in recent crypto-related scams:</p>
          <ul className="side-list">
              {scamList && scamList.result && scamList.result.map((scam) => 
                <li key={scam.name}>{scam.name}</li>
              )}
          </ul>
        </div>
    );
};

export default CryptoScam;
