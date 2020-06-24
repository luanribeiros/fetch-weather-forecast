import React from 'react';
import './styles.scss';
import up from '../../assets/images/icons/upload.png';
import down from '../../assets/images/icons/download.png';
import rain from '../../assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';
import temp from '../../assets/images/icons/raindrop-close-up.png';

const Card = () => {
  return (
    <>
      <h1>Previsão para Osasco - SP</h1>
      <section className="bgCard">
        <section className="bgCard-header">
          <h2>01/02/2017</h2>
          <p>
            Sol com muitas nuvens durante o dia. Período de nublado, com muita chuva a qualquer
            hora.
          </p>
        </section>
        <section className="bgCard-content">
          <section className="bgCard-content_temp">
            <table>
              <tr>
                <td>
                  <img src={up} title="" alt="" />
                </td>
                <td className="colorTemp">20°C</td>
              </tr>
              <tr>
                <td>
                  <img src={temp} title="" alt="" />
                </td>
                <td>10mm</td>
              </tr>
            </table>
          </section>
          <section className="bgCard-content_rain">
            <table>
              <tr>
                <td>
                  <img src={down} title="" alt="" />
                </td>
                <td className="colorRain">10°C</td>
              </tr>
              <tr>
                <td>
                  <img src={rain} title="" alt="" />
                </td>
                <td>50%</td>
              </tr>
            </table>
          </section>
        </section>
      </section>
    </>
  );
};

export default Card;
