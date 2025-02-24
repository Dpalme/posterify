export const LoadingBackdrop = () => {
  return (
    <div className="text-main fixed z-10 flex h-full w-full flex-col items-center justify-center gap-16">
      <svg
        width="320"
        height="320"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="9.81"
          y="15"
          width="19.8"
          height="30"
          rx="2"
          fill="#64D2FF"
        >
          <animate
            attributeName="y"
            values="15;10;15;15;15;15;15;15;15"
            dur="1.5s"
            repeatCount="indefinite"
            keySplines="0 0 2 1; 3 0 4 1; 0.5 7 0.5 1; 4 2 0.5 1"
          />
        </rect>
        <rect
          x="11.61"
          y="12.5"
          width="23.1"
          height="35"
          rx="2"
          fill="#FF9F0A"
        >
          <animate
            attributeName="y"
            values="12.5;12.5;10;12.5;12.5;12.5;12.5;12.5;12.5"
            dur="1.5s"
            repeatCount="indefinite"
            keySplines="0 0 2 1; 3 0 4 1; 0.5 7 0.5 1; 4 2 0.5 1"
          />
        </rect>
        <rect
          x="16.71"
          y="11"
          width="25.08"
          height="38"
          rx="2"
          fill="#FFD60A"
        >
          <animate
            attributeName="y"
            values="11;11;11;9;11;11;11;11;11"
            dur="1.5s"
            repeatCount="indefinite"
            keySplines="0 0 2 1; 3 0 4 1; 0.5 7 0.5 1; 4 2 0.5 1"
          />
        </rect>
        <rect
          x="23"
          y="10"
          width="26.4"
          height="40"
          rx="2"
          fill="#30D158"
        >
          <animate
            attributeName="y"
            values="10;10;10;10;8;10;10;10;10"
            dur="1.5s"
            repeatCount="indefinite"
            keySplines="0 0 2 1; 3 0 4 1; 0.5 7 0.5 1; 4 2 0.5 1"
          />
        </rect>
      </svg>
      <p className="font-title inline-block pb-2 text-3xl">POSTERIFY</p>
    </div>
  );
};
