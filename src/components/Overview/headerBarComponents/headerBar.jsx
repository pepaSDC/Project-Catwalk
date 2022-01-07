import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'

let headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
}

export const HeaderBar = () => {
  return (
    <div
      style={headerStyle}>
      <div style={{fontSize: '30px'}}
        className="logo">
        SpaceWalk	&#128125;
      </div>
      <div
        className="searchBar">
      </div>
    </div>
  );
}