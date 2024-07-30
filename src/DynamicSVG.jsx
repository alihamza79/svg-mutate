import React from 'react';

const DynamicSVG = ({ width, height, arcRadius, cornerWidth, cornerHeight }) => {
  return (
    <svg className="injected-svg partViewerSvgNqp" style={{ width: '100%', height: '90vh' }} viewBox={`0 0 ${width + 2 * arcRadius} ${height + 2 * cornerHeight}`} preserveAspectRatio="xMidYMid meet" version="1.1" id="svgMain" xmlns="http://www.w3.org/2000/svg">
      <defs xmlns="http://www.w3.org/2000/svg">
        <marker id="ArrowEnd-2" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 0 0 L 10 3 L 0 6 z"></path>
        </marker>
        <marker id="ArrowStart-2" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 10 0 L 0 3 L 10 6 z"></path>
        </marker>
        <marker id="HoverArrowEnd-2" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 0 0 L 10 3 L 0 6 z"></path>
        </marker>
        <marker id="HoverArrowStart-2" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 10 0 L 0 3 L 10 6 z"></path>
        </marker>
        <marker id="SelectedArrowEnd" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim selectedDim" d="M 0 0 L 10 3 L 0 6 z"></path>
        </marker>
        <marker id="SelectedArrowStart" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim selectedDim" d="M 10 0 L 0 3 L 10 6 z"></path>
        </marker>
      </defs>
      <g xmlns="http://www.w3.org/2000/svg" id="all" strokeWidth="0.25%" stroke="black" fill="none">
        <path fill="#E9E9F0" d={`
          M 0 0 
          L ${width - arcRadius} 0 
          A ${arcRadius} ${arcRadius} 0 0 1 ${width} ${arcRadius}
          L ${width} ${height - cornerHeight}
          L ${width - cornerWidth} ${height}
          L ${cornerWidth} ${height}
          L 0 ${height - cornerHeight}
          Z
        `}></path>
        <g id="engrave" fill="black" stroke="none"></g>
        <g fontSize="13.0" fill="black">
          <g id="dim_dx" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1="0" y1="0" x2="0" y2="-32.86"></line>
            <line x1={width} y1="0" x2={width} y2="-32.86"></line>
            <line className="arrowHeadStart arrowHeadEnd" x1="0" y1="-25" x2={width} y2="-25" markerStart="url(#ArrowStart-2)" markerEnd="url(#ArrowEnd-2)"></line>
            <text transform={`rotate(0,${width / 2},-25) scale(1,-1)`} textAnchor="middle" x={width / 2} y="-25" dx="1.96" dy="-15.65">A: {width}</text>
          </g>
          <g id="dim_dy" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1="0" y1="0" x2="-32.86" y2="0"></line>
            <line x1="0" y1={height} x2="-32.86" y2={height}></line>
            <line className="arrowHeadStart arrowHeadEnd" x1="-25" y1="0" x2="-25" y2={height} markerStart="url(#ArrowStart-2)" markerEnd="url(#ArrowEnd-2)"></line>
            <text transform={`rotate(90,-25,${height / 2}) scale(1,-1)`} textAnchor="middle" x="-25" y={height / 2} dx="1.96" dy="-15.65">B: {height}</text>
          </g>
          <g id="dim_ar" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1={width - arcRadius} y1="0" x2={width} y2={arcRadius}></line>
            <line className="arrowHeadStart" x1={width - arcRadius} y1="0" x2={width - arcRadius * 1.5} y2={arcRadius * 0.5} markerStart="url(#ArrowStart-2)"></line>
            <text transform={`rotate(-45,${width - arcRadius * 1.5},${arcRadius * 0.5}) scale(1,-1)`} textAnchor="start" x={width - arcRadius * 1.5} y={arcRadius * 0.5} dx="1.96" dy="-15.65">rC: {arcRadius}</text>
          </g>
          <g id="dim_dcx" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1={width - cornerWidth} y1={height} x2={width - cornerWidth} y2={height + 32.86}></line>
            <line x1={width} y1={height - cornerHeight} x2={width} y2={height + 32.86}></line>
            <line className="arrowHeadStart arrowHeadEnd" x1={width - cornerWidth} y1={height + 25} x2={width} y2={height + 25} markerStart="url(#ArrowStart-2)" markerEnd="url(#ArrowEnd-2)"></line>
            <text transform={`rotate(0,${width - cornerWidth / 2},${height + 25}) scale(1,-1)`} textAnchor="middle" x={width - cornerWidth / 2} y={height + 25} dx="1.96" dy="-15.65">D: {cornerWidth}</text>
          </g>
          <g id="dim_dcy" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1={width} y1={height - cornerHeight} x2={width + 32.86} y2={height - cornerHeight}></line>
            <line x1={width - cornerWidth} y1={height} x2={width + 32.86} y2={height}></line>
            <line className="arrowHeadStart arrowHeadEnd" x1={width + 25} y1={height - cornerHeight} x2={width + 25} y2={height} markerStart="url(#ArrowStart-2)" markerEnd="url(#ArrowEnd-2)"></line>
            <text transform={`rotate(90,${width + 25},${height - cornerHeight / 2}) scale(1,-1)`} textAnchor="middle" x={width + 25} y={height - cornerHeight / 2} dx="1.96" dy="-15.65">E: {cornerHeight}</text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DynamicSVG;
