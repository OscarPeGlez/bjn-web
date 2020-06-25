/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react';

export const Header: FC = (): JSX.Element => {
  return (
    <header id="omni-header" className="site-header py-3">
      <div className="header-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="header-logo col-lg-6 col-md-6">
              <div className="logo">{/* <img alt="Logo" src={logo} width="120px" /> */}</div>
            </div>
            <div className="header-right col-lg-6 col-md-6">
              <div>
                {/* <ul className="nav align-items-center">
                  {!hasTitle && (
                    <li className="d-lg-inline-block nav-item pr-4">
                      {!esDireccionEnvio && (
                        <OverlayTrigger
                          key="bottom"
                          placement="bottom"
                          overlay={<Tooltip id="tooltip-Agregar">Buscar productos</Tooltip>}
                        >
                          <button
                            onClick={abrirModalBusquedaProductos}
                            type="button"
                            className="action-item nav-link btn btn-nav border-0 icon-nav"
                          >
                            <i className="icon-buscar" />
                          </button>
                        </OverlayTrigger>
                      )}
                    </li>
                  )}
                  <li className="d-lg-inline-block nav-item pr-4">
                    {!esDireccionEnvio && crearIconoAgregar()}
                  </li>
                  <li className="d-lg-inline-block nav-item pr-4">
                    {!esDireccionEnvio && crearIconoCarrito()}
                  </li>
                  <li className="d-lg-inline-block nav-item pr-4">
                    {!esDireccionEnvio && (
                      <OverlayTrigger
                        key="bottom"
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-categorias">Categorías</Tooltip>}
                      >
                        <button
                          type="button"
                          onClick={abrirModalCategorias}
                          className="action-item nav-link btn btn-nav border-0 icon-nav"
                        >
                          <i className="icon-categorias" />
                        </button>
                      </OverlayTrigger>
                    )}
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
