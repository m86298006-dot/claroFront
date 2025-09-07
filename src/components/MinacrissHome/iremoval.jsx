import React from "react";
import { Link } from "react-router-dom";   // ✅ Importamos Link
import "./iremoval.css";

export default function Home() {
  return (
    <div className="body-wrap is-boxed has-animations">
      {/* Encabezado */}
      <header className="site-header">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0 aja">
                <a href="">iRemoval PRO</a>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Sección Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">iREMOVAL PRO</h1>
                <div className="hero-cta">
                  <p className="hero-paragraph">
                    iRemoval PRO v7.2 (iRa1n v4.6) (solo iPhone 6s a X)
                  </p>
                  <a
                    className="button button-primary"
                    href="https://mega.nz/file/C4VWUBAD#Mtj11jqRhIhJi9IwQsxEtmW6QCjUOm3iO2KFbI2P324"
                  >
                    Descargar
                  </a>
                  <br />
                  <br />
                  <p className="hero-paragraph">
                    iRemoval PRO Edición Premium 5.1
                  </p>
                  <a
                    className="button button-primary"
                    href="https://mega.nz/file/y9kxCLjB#BFsJT4sERSAwnXsHIiqZ-YvFcE3cPp9qIC7d1ckodfk"
                  >
                    Descargar
                  </a>
                </div>
              </div>

              {/* Figuras decorativas */}
              <div className="hero-figure anime-element">
                <svg
                  className="placeholder"
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect width="528" height="396" style={{ fill: "transparent" }}></rect>
                </svg>
                <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                <div className="hero-figure-box hero-figure-box-05"></div>
                <div className="hero-figure-box hero-figure-box-06"></div>
                <div className="hero-figure-box hero-figure-box-07"></div>
                <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Planes y precios */}
        <div className="container-sm">
          <div className="pricing-inner section-inner">
            <div className="pricing-header text-center">
              <h2 className="section-title mt-0">A12+ Sin señal - Untethered</h2>
              <p className="section-paragraph mb-0">
                Activa tu dispositivo y úsalo sin señal
              </p>
            </div>
            <div className="pricing-tables-wrap">
              <div className="pricing-table">
                <div className="pricing-table-inner is-revealing">
                  <div className="pricing-table-main">
                    <div className="pricing-table-header pb-24">
                      <div className="pricing-table-price">
                        <span className="pricing-table-price-amount h1">
                          $53 ~ $118
                        </span>
                        <span className="text-xs">/dispositivo</span>
                      </div>
                    </div>
                    <div className="pricing-table-features-title text-xs pt-24 pb-24">
                      Funciones disponibles
                    </div>
                    <ul className="pricing-table-features list-reset text-xs">
                      <li>Soporte untethered (apagar/encender)</li>
                      <li>iServices / Notificaciones / iPay</li>
                      <li>iPhone XS hasta 16 Pro Max</li>
                      <li>iPad 8 hasta iPad M3</li>
                      <li>iOS 17.0.1 hasta 18.6 beta 3</li>
                      <li>Borrado falso</li>
                      <li>Sin OTA</li>
                    </ul>
                  </div>
                  <div className="pricing-table-cta mb-8">
                    {/* ✅ Ahora va a /planes */}
                    <Link
                      to="/planes"
                      className="button button-primary button-shadow button-block"
                    >
                      Ver opciones
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="cta section">
          <div className="container">
            <div className="cta-inner section-inner">
              <h3 className="section-title mt-0">¡Califica nuestro servicio!</h3>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-inner">
            <div className="brand footer-brand">
              <a href="https://iremovalpro.com/">
                <h5>iRemoval PRO</h5>
              </a>
            </div>

            <div className="footer-copyright">
              © 2020-2025 IREMOVAL PRO LTD, Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
