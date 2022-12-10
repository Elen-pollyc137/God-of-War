function IconArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <g fill="#fff" clipPath="url(#clip0_15_77)">
        <path d="M12.857 15L6.43 8.571 0 15l6.429 6.428L12.857 15z"></path>
        <path d="M30 15L15 30l-4.286-4.286L21.43 15 10.714 4.286 15 0l15 15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_15_77">
          <path
            fill="#fff"
            d="M0 0H30V30H0z"
            transform="matrix(-1 0 0 1 30 0)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}
function IconArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <g fill="#fff" clipPath="url(#clip0_15_74)">
        <path d="M17.143 15l6.428-6.429L30 15l-6.428 6.428L17.142 15z"></path>
        <path d="M0 15l15 15 4.286-4.286L8.57 15 19.286 4.286 15 0 0 15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_15_74">
          <path fill="#fff" d="M0 0H30V30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { IconArrow, IconArrowLeft };
