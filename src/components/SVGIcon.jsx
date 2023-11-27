import React from "react";

const DeleteItem = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 11V17"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11V17"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 7H20"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Like = () => (
  <svg
    className="red-heart"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <title id="favouriteIconTitle">Favourite</title>
    <path
      d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
      fill="red"
    ></path>
  </svg>
);

const Dislike = () => (
  <svg
    className="grey-heart"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <title id="favouriteIconTitle">Favourite</title>
    <path
      d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
      fill="grey"
    ></path>
  </svg>
);

const Upvote = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9735 4.94376C10.7734 5.95711 10.4372 7.47704 9.20711 8.70711C9.0949 8.81932 8.97211 8.93775 8.84208 9.06316C7.70025 10.1645 6 11.8044 6 14.5C6 15.9634 6.62957 17.3494 7.60095 18.3748C8.57834 19.4064 9.82928 20 11 20H16C16.3517 20 16.6461 19.9091 16.8203 19.7929C16.9648 19.6966 17 19.6121 17 19.5C17 19.3879 16.9648 19.3034 16.8203 19.2071C16.6461 19.0909 16.3517 19 16 19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H16H16.5C16.8517 17 17.1461 16.9091 17.3203 16.7929C17.4648 16.6966 17.5 16.6121 17.5 16.5C17.5 16.3879 17.4648 16.3034 17.3203 16.2071C17.1461 16.0909 16.8517 16 16.5 16H15.5C14.9477 16 14.5 15.5523 14.5 15C14.5 14.4477 14.9477 14 15.5 14H16.5H17C17.3517 14 17.6461 13.9091 17.8203 13.7929C17.9648 13.6966 18 13.6121 18 13.5C18 13.3879 17.9648 13.3034 17.8203 13.2071C17.6461 13.0909 17.3517 13 17 13H16C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11H17C17.3517 11 17.6461 10.9091 17.8203 10.7929C17.9648 10.6966 18 10.6121 18 10.5C18 10.3879 17.9648 10.3034 17.8203 10.2071C17.6461 10.0909 17.3517 10 17 10H12.5C12.1772 10 11.8743 9.84421 11.6866 9.58167C11.499 9.31937 11.4494 8.98272 11.5534 8.67751C11.5534 8.67751 11.5534 8.67751 11.5534 8.6775C11.5534 8.67747 11.5534 8.67745 11.5535 8.67742L11.5535 8.67716L11.5536 8.67712C11.5536 8.67697 11.5537 8.67683 11.5537 8.67668L11.5538 8.67644L11.5567 8.66782L11.5701 8.62664C11.5822 8.58889 11.6004 8.53119 11.6227 8.45641C11.6673 8.30657 11.7283 8.08979 11.791 7.82887C11.918 7.30015 12.0448 6.62105 12.0695 5.96253C12.0951 5.27836 12.0043 4.75373 11.8214 4.43325C11.7131 4.24364 11.5498 4.07173 11.1704 4.01759C11.1228 4.18202 11.079 4.40572 11.0148 4.73357C11.002 4.79932 10.9883 4.86926 10.9735 4.94376ZM13.8035 8C13.9252 7.44203 14.0414 6.74706 14.068 6.03747C14.0986 5.22164 14.0176 4.24627 13.5583 3.44175C13.0472 2.54635 12.1465 2 10.9 2C10.5185 2 10.1605 2.12626 9.87023 2.38014C9.60657 2.61078 9.45664 2.89645 9.36405 3.12621C9.21607 3.49339 9.12463 3.96912 9.04745 4.37062C9.03514 4.43463 9.0232 4.49675 9.01145 4.55624C8.81659 5.54289 8.56283 6.52296 7.79289 7.29289C7.70469 7.38109 7.59751 7.48271 7.47588 7.59801C6.35307 8.66247 4 10.8932 4 14.5C4 16.5366 4.87043 18.4006 6.14905 19.7502C7.42166 21.0936 9.17072 22 11 22H16C16.6483 22 17.3539 21.8409 17.9297 21.4571C18.5352 21.0534 19 20.3879 19 19.5C19 19.0313 18.8705 18.6245 18.6591 18.2855C19.1487 17.8757 19.5 17.2719 19.5 16.5C19.5 16.0313 19.3705 15.6245 19.1591 15.2855C19.6487 14.8757 20 14.2719 20 13.5C20 12.8912 19.7815 12.387 19.4489 12C19.7815 11.613 20 11.1088 20 10.5C20 9.61209 19.5352 8.9466 18.9297 8.54295C18.3539 8.15906 17.6483 8 17 8H13.8035Z"
      fill="#000000"
    />
  </svg>
);

const Downvote = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.1797 4.20705C7.03518 4.3034 7 4.38791 7 4.5C7 4.61209 7.03518 4.6966 7.1797 4.79295C7.35386 4.90906 7.64834 5 8 5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H8H7.5C7.14834 7 6.85386 7.09094 6.6797 7.20705C6.53518 7.3034 6.5 7.38791 6.5 7.5C6.5 7.61209 6.53518 7.6966 6.6797 7.79295C6.85386 7.90906 7.14834 8 7.5 8H8.5C9.05228 8 9.5 8.44772 9.5 9C9.5 9.55228 9.05228 10 8.5 10H7.5H7C6.64834 10 6.35386 10.0909 6.1797 10.2071C6.03518 10.3034 6 10.3879 6 10.5C6 10.6121 6.03518 10.6966 6.1797 10.7929C6.35386 10.9091 6.64834 11 7 11H8C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13H7C6.64834 13 6.35386 13.0909 6.1797 13.2071C6.03518 13.3034 6 13.3879 6 13.5C6 13.6121 6.03518 13.6966 6.1797 13.7929C6.35386 13.9091 6.64834 14 7 14H11.5C11.8228 14 12.1257 14.1558 12.3134 14.4183C12.501 14.6806 12.5505 15.0172 12.4466 15.3224C12.4466 15.3224 12.4466 15.3225 12.4466 15.3225C12.4466 15.3225 12.4466 15.3225 12.4465 15.3226L12.4465 15.3228L12.4464 15.3229C12.4464 15.323 12.4463 15.3232 12.4463 15.3233L12.4462 15.3236L12.4433 15.3322L12.4299 15.3734C12.4178 15.4111 12.3996 15.4688 12.3773 15.5436C12.3327 15.6934 12.2717 15.9102 12.209 16.1711C12.082 16.6999 11.9552 17.3789 11.9305 18.0375C11.9049 18.7216 11.9957 19.2463 12.1786 19.5668C12.2869 19.7564 12.4502 19.9283 12.8296 19.9824C12.8771 19.818 12.921 19.5943 12.9852 19.2664C12.998 19.2007 13.0117 19.1307 13.0265 19.0562C13.2266 18.0429 13.5628 16.523 14.7929 15.2929C14.9051 15.1807 15.0279 15.0623 15.1579 14.9368C16.2997 13.8355 18 12.1956 18 9.5C18 8.03662 17.3704 6.6506 16.399 5.62524C15.4217 4.59356 14.1707 4 13 4H8C7.64834 4 7.35386 4.09094 7.1797 4.20705ZM12.7584 20.1749C12.7584 20.1749 12.7587 20.1743 12.7593 20.1733L12.7584 20.1749ZM10.1965 16C10.0748 16.558 9.95856 17.2529 9.93195 17.9625C9.90136 18.7784 9.98244 19.7537 10.4417 20.5582C10.9528 21.4537 11.8535 22 13.1 22C13.4815 22 13.8395 21.8737 14.1298 21.6199C14.3934 21.3892 14.5434 21.1036 14.636 20.8738C14.7839 20.5066 14.8754 20.0309 14.9526 19.6294C14.9649 19.5654 14.9768 19.5033 14.9886 19.4438C15.1834 18.4571 15.4372 17.477 16.2071 16.7071C16.2953 16.6189 16.4025 16.5173 16.5241 16.402C17.6469 15.3375 20 13.1068 20 9.5C20 7.46338 19.1296 5.5994 17.851 4.24976C16.5783 2.90644 14.8293 2 13 2H8C7.35166 2 6.64614 2.15906 6.0703 2.54295C5.46482 2.9466 5 3.61209 5 4.5C5 4.96874 5.12954 5.37549 5.34094 5.71446C4.85131 6.12427 4.5 6.72808 4.5 7.5C4.5 7.96874 4.62954 8.37549 4.84094 8.71446C4.35131 9.12427 4 9.72808 4 10.5C4 11.1088 4.21853 11.613 4.55108 12C4.21853 12.387 4 12.8912 4 13.5C4 14.3879 4.46482 15.0534 5.0703 15.4571C5.64614 15.8409 6.35166 16 7 16H10.1965Z"
      fill="#000000"
    />
  </svg>
);

const SVGIcon = ({ name }) => {
  switch (name) {
    case "delete":
      return <DeleteItem />;
    case "like":
      return <Like />;
    case "dislike":
      return <Dislike />;
    case "upvote":
      return <Upvote />;
    case "downvote":
      return <Downvote />;
    default:
      return null;
  }
};

export default SVGIcon;