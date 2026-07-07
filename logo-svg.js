const WCB_LOGO_SVG = `
<svg viewBox="0 0 320 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block;">
  <g transform="translate(5, 5)">
    <!-- WCB text -->
    <text x="0" y="45" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" fill="#006097" letter-spacing="-1.5">wcb</text>
    
    <!-- Figure 1 (Left/Taller) -->
    <circle cx="106" cy="22" r="6" fill="#006097" />
    <path d="M106,28 C102,32 98,39 98,48 M106,28 C110,32 114,39 114,48" stroke="#006097" stroke-width="4" stroke-linecap="round" fill="none" />
    <!-- Arms -->
    <path d="M96,35 C101,38 106,38 111,35" stroke="#006097" stroke-width="3" stroke-linecap="round" fill="none" />

    <!-- Figure 2 (Right/Shorter) -->
    <circle cx="120" cy="18" r="7.5" fill="#006097" />
    <path d="M120,25.5 C115.5,30 111,38 111,48 M120,25.5 C124.5,30 129,38 129,48" stroke="#006097" stroke-width="4.5" stroke-linecap="round" fill="none" />
    <!-- Arms -->
    <path d="M109,33 C115,36 120,36 126,33" stroke="#006097" stroke-width="3.5" stroke-linecap="round" fill="none" />
    
    <!-- Dots above 'w' and 'c' which are part of the brand logo stylization -->
    <circle cx="20" cy="10" r="4.5" fill="#006097" />
    <circle cx="68" cy="10" r="4.5" fill="#006097" />

    <!-- Workers Compensation Board of Manitoba text -->
    <text x="0" y="66" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="12" fill="#006097" letter-spacing="-0.2">Workers Compensation</text>
    <text x="0" y="80" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" font-size="12" fill="#006097" letter-spacing="-0.2">Board of Manitoba</text>
  </g>
</svg>
`;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WCB_LOGO_SVG };
}
