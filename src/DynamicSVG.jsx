import React from 'react';

const DynamicSVG = ({ height, width, arcRadius, cornerWidth, cornerHeight }) => {
  return (
    <svg
      className="injected-svg partViewerSvgNqp"
      style={{ width: '100%', height: '100%' }}
      viewBox={`${-width / 2 - 32} ${-height / 2 - 32} ${width + 64} ${height + 64}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="ArrowEnd-5" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 0 0 L 10 3 L 0 6 z"></path>
        </marker>
        <marker id="ArrowStart-5" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 10 0 L 0 3 L 10 6 z"></path>
        </marker>
        <marker id="HoverArrowEnd-5" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 0 0 L 10 3 L 0 6 z"></path>
        </marker>
        <marker id="HoverArrowStart-5" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 10 0 L 0 3 L 10 6 z"></path>
        </marker>
        <marker id="SelectedArrowEnd" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim selectedDim" d="M 0 0 L 10 3 L 0 6 z"></path>
        </marker>
        <marker id="SelectedArrowStart" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim selectedDim" d="M 10 0 L 0 3 L 10 6 z"></path>
        </marker>
      </defs>
      <g id="all" transform={`translate(0,${height / 2}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
        <path fill="#E9E9F0" d={`M 0.00 0.00 L ${(width / 2) - arcRadius} 0.00 A${arcRadius},${arcRadius} 0  1,0 ${(width / 2) + arcRadius},0.00  L ${width} 0.00 L ${width} ${height - cornerHeight} L ${width - cornerWidth} ${height} L ${cornerWidth} ${height} L 0.00 ${height - cornerHeight} L 0.00 0.00 `}></path>
        <g id="engrave" fill="black" stroke="none"></g>
        <g fontSize={height / 10} fill="black">
          <g id="dim_dx" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1="0.00" y1="0.00" x2="0.00" y2={-height / 2.22}></line>
            <line x1={width} y1="0.00" x2={width} y2={-height / 2.22}></line>
            <line className="arrowHeadStart arrowHeadEnd" x1="0.00" y1={-height / 3} x2={width} y2={-height / 3} markerStart="url(#ArrowStart-5)" markerEnd="url(#ArrowEnd-5)"></line>
            <text transform={`rotate(0.0000,${width / 2},${-height / 3}) scale(1,-1) translate(0,${height / 1.28})`} textAnchor="middle" x={width / 2} y={-height / 3} dx="2.50" dy="-17.47">A</text>
          </g>
          <g id="dim_dy" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1="0.00" y1="0.00" x2={-height / 2.22} y2="0.00"></line>
            <line x1={cornerWidth} y1={height} x2={-height / 2.22} y2={height}></line>
            <line className="arrowHeadStart arrowHeadEnd" x1={-height / 3} y1="0.00" x2={-height / 3} y2={height} markerStart="url(#ArrowStart-5)" markerEnd="url(#ArrowEnd-5)"></line>
            <text transform={`rotate(90.0000,${-height / 3},${height / 2}) scale(1,-1) translate(0,${-height / 1.28})`} textAnchor="middle" x={-height / 3} y={height / 2} dx="2.50" dy="-17.47">B</text>
          </g>
          <g id="dim_ar" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1={(width / 2) - arcRadius} y1={arcRadius} x2={width / 2} y2="0.00"></line>
            <line className="arrowHeadStart" x1={(width / 2) - arcRadius} y1={arcRadius} x2={(width / 2) - (arcRadius * 1.67)} y2={height / 1.5} markerStart="url(#ArrowStart-5)"></line>
            <text transform={`rotate(-45.0000,${(width / 2) - (arcRadius * 1.67)},${height / 1.5}) scale(1,-1) translate(0,${-height * 1.45})`} textAnchor="start" x={(width / 2) - (arcRadius * 1.67)} y={height / 1.5} dx="2.50" dy="-17.47">rC</text>
          </g>
          <g id="dim_dcx" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1={width - cornerWidth} y1={height} x2={width - cornerWidth} y2={height * 1.45}></line>
            <line x1={width} y1={height - cornerHeight} x2={width} y2={height * 1.45}></line>
            <line className="arrowHeadStart arrowHeadEnd" x1={width - cornerWidth} y1={height * 1.25} x2={width} y2={height * 1.25} markerStart="url(#ArrowStart-5)" markerEnd="url(#ArrowEnd-5)"></line>
            <text transform={`rotate(0.0000,${width - cornerWidth / 2},${height * 1.25}) scale(1,-1) translate(0,${-height * 1.45})`} textAnchor="middle" x={width - cornerWidth / 2} y={height * 1.25} dx="2.50" dy="-17.47">D</text>
          </g>
          <g id="dim_dcy" className="Dim" fill="" stroke="" strokeWidth="0.25%">
            <line x1={width} y1={height - cornerHeight} x2={width + height / 4.6} y2={height - cornerHeight}></line>
            <line x1={width - cornerWidth} y1={height} x2={width + height / 4.6} y2={height}></line>
            <line className="arrowHeadStart arrowHeadEnd" x1={width + height / 4.6} y1={height - cornerHeight} x2={width + height / 4.6} y2={height} markerStart="url(#ArrowStart-5)" markerEnd="url(#ArrowEnd-5)"></line>
            <text transform={`rotate(90.0000,${width + height / 4.6},${(height + cornerHeight) / 2}) scale(1,-1) translate(0,${-height * 1.45})`} textAnchor="middle" x={width + height / 4.6} y={(height + cornerHeight) / 2} dx="2.50" dy="-17.47">E</text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DynamicSVG;
