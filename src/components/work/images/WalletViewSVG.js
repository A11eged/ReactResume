import React from 'react';
import styles from './WalletView.module.css';

export const WalletViewSVG = (props) => {
  return (
    <svg
      viewBox="0 0 97.01 80.74"
      height={props.height}
      width={props.width}
      enableBackground="new 0 0 100 100"
      style={{ borderRadius: '3%' }}
      onClick={props.onClick}
    >
      <filter>
        <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
      </filter>
      <path
        className={styles.svgBackground}
        d="M0 0h97.01v80.74H0z"
      />
      <path
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.72px',
        }}
        d="m4.94 29.98.64 10.7 6.39-.46 2.73-5.81-9.76-4.43z"
      />
      <path
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.72px',
        }}
        d="m6.18 41.54 8.97 3.28.14-9.54-2.71 5.83-6.4.43zM5.58 40.68l3.74-4.27 5.38-2M12.58 41.11l2.57 3.71"
      />
      <path
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.72px',
        }}
        d="m4.94 29.98 4.38 6.43 2.65 3.81"
      />
      <path
        d="M16.38 43.64c-.59.6 4.95 6.97 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.91-6.21-8.24ZM14.12 46.37c-.59.6 4.95 6.98 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.91-6.21-8.24Z"
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.36px',
        }}
      />
      <path
        d="M14.12 46.37c-.59.6 4.95 6.98 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.91-6.21-8.24ZM16.44 46.59c-.59.6 4.95 6.97 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.9-6.21-8.24Z"
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.36px',
        }}
      />
      <path
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.72px',
        }}
        d="m93.23 29.83-9.81 4.33 2.67 5.83 6.4.53.74-10.69z"
      />
      <path
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.72px',
        }}
        d="m82.83 35.03.04 9.54 9-3.19-6.41-.5-2.63-5.85zM83.42 34.16l5.31 2.03 3.76 4.33M85.46 40.88l-2.59 3.69"
      />
      <path
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.72px',
        }}
        d="m93.23 29.83-4.5 6.36-2.64 3.8"
      />
      <path
        d="M84.42 45.31c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.22.07.05 6.42-8.29 5.56-8.68ZM81.07 44.15c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.23.07.04 6.43-8.3 5.56-8.69Z"
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.36px',
        }}
      />
      <path
        d="M81.07 44.15c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.23.07.04 6.43-8.3 5.56-8.69ZM81.67 46.4c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.23.07.04 6.43-8.3 5.56-8.69Z"
        style={{
          fill: '#32c356',
          stroke: '#2ba84a',
          strokeMiterlimit: 10,
          strokeWidth: '.36px',
        }}
      />
      <text
        transform="translate(20.23 44.14)"
        style={{
          fill: '#248232',
          fontFamily: 'Raleway-Regular,Raleway',
          fontSize: '10.8px',
          isolation: 'isolate',
        }}
      >
        <tspan
          x={0}
          y={0}
          style={{
            letterSpacing: '-.05em',
          }}
          cursor={'pointer'}
        >
          {'W'}
        </tspan>
        <tspan x={10.76} y={0} cursor={'pointer'}>
          {'all'}
        </tspan>
        <tspan
          cursor={'pointer'}
          x={22.52}
          y={0}
          style={{
            letterSpacing: 0,
          }}
        >
          {'e'}
        </tspan>
        <tspan
          cursor={'pointer'}
          x={28.81}
          y={0}
          style={{
            letterSpacing: '-.02em',
          }}
        >
          {'t'}
        </tspan>
        <tspan x={32.19} y={0} cursor={'pointer'}>
          {'Vi'}
        </tspan>
        <tspan
          cursor={'pointer'}
          x={41.88}
          y={0}
          style={{
            letterSpacing: '-.01em',
          }}
        >
          {'e'}
        </tspan>
        <tspan
          cursor={'pointer'}
          x={48.07}
          y={0}
          style={{
            letterSpacing: '-.03em',
          }}
        >
          {'w'}
        </tspan>
      </text>
    </svg>
  );
};


// export const WalletViewSVGLight = (props) => {
//   return (
//     <svg
//       viewBox="0 0 97.01 80.74"
//       height={props.height}
//       width={props.width}
//       enableBackground="new 0 0 100 100"
//       style={{ borderRadius: '3%' }}
//     >
//       <path
//         style={{
//           // fix this
//           fill: 'current',
//         }}
//         d="M0 0h97.01v80.74H0z"
//       />
//       {/* Link Here */}
//       <path
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.72px',
//         }}
//         d="m4.94 29.98.64 10.7 6.39-.46 2.73-5.81-9.76-4.43z"
//       />
//       <path
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.72px',
//         }}
//         d="m6.18 41.54 8.97 3.28.14-9.54-2.71 5.83-6.4.43zM5.58 40.68l3.74-4.27 5.38-2M12.58 41.11l2.57 3.71"
//       />
//       <path
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.72px',
//         }}
//         d="m4.94 29.98 4.38 6.43 2.65 3.81"
//       />
//       <path
//         d="M16.38 43.64c-.59.6 4.95 6.97 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.91-6.21-8.24ZM14.12 46.37c-.59.6 4.95 6.98 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.91-6.21-8.24Z"
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.36px',
//         }}
//       />
//       <path
//         d="M14.12 46.37c-.59.6 4.95 6.98 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.91-6.21-8.24ZM16.44 46.59c-.59.6 4.95 6.97 6.03 8.07.11.11.17.16.18.16.06-.05-5.54-8.9-6.21-8.24Z"
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.36px',
//         }}
//       />
//       <path
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.72px',
//         }}
//         d="m93.23 29.83-9.81 4.33 2.67 5.83 6.4.53.74-10.69z"
//       />
//       <path
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.72px',
//         }}
//         d="m82.83 35.03.04 9.54 9-3.19-6.41-.5-2.63-5.85zM83.42 34.16l5.31 2.03 3.76 4.33M85.46 40.88l-2.59 3.69"
//       />
//       <path
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.72px',
//         }}
//         d="m93.23 29.83-4.5 6.36-2.64 3.8"
//       />
//       <path
//         d="M84.42 45.31c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.22.07.05 6.42-8.29 5.56-8.68ZM81.07 44.15c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.23.07.04 6.43-8.3 5.56-8.69Z"
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.36px',
//         }}
//       />
//       <path
//         d="M81.07 44.15c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.23.07.04 6.43-8.3 5.56-8.69ZM81.67 46.4c-.77-.35-4.81 7.07-5.47 8.46-.06.14-.1.22-.09.23.07.04 6.43-8.3 5.56-8.69Z"
//         style={{
//           fill: '#32c356',
//           stroke: '#2ba84a',
//           strokeMiterlimit: 10,
//           strokeWidth: '.36px',
//         }}
//       />
//       <text
//         transform="translate(20.23 44.14)"
//         style={{
//           fill: '#248232',
//           fontFamily: 'Raleway-Regular,Raleway',
//           fontSize: '10.8px',
//           isolation: 'isolate',
//         }}
//       >
//         <tspan
//           x={0}
//           y={0}
//           style={{
//             letterSpacing: '-.05em',
//           }}
//         >
//           {'W'}
//         </tspan>
//         <tspan x={10.76} y={0}>
//           {'all'}
//         </tspan>
//         <tspan
//           x={22.52}
//           y={0}
//           style={{
//             letterSpacing: 0,
//           }}
//         >
//           {'e'}
//         </tspan>
//         <tspan
//           x={28.81}
//           y={0}
//           style={{
//             letterSpacing: '-.02em',
//           }}
//         >
//           {'t'}
//         </tspan>
//         <tspan x={32.19} y={0}>
//           {'Vi'}
//         </tspan>
//         <tspan
//           x={41.88}
//           y={0}
//           style={{
//             letterSpacing: '-.01em',
//           }}
//         >
//           {'e'}
//         </tspan>
//         <tspan
//           x={48.07}
//           y={0}
//           style={{
//             letterSpacing: '-.03em',
//           }}
//         >
//           {'w'}
//         </tspan>
//       </text>
//     </svg>
//   );
// };
