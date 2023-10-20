import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { BreakpointProvider, Breakpoint } from 'react-socks';

const UICard = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <BreakpointProvider>
      <Breakpoint s down>
        <div
          style={
            themeContext.theme === 'dark'
              ? { backgroundColor: '#232323',
                  height: '100%',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              : { backgroundColor: '#f5f5f5',
                  height: '100%',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }
        >
          {props.children}
        </div>
      </Breakpoint>
      <Breakpoint m up>
        <div
          style={
            themeContext.theme === 'dark'
              ? { backgroundColor: '#232323',
                  height: '100%',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              : { backgroundColor: '#f5f5f5',
                  height: '100%',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', 
                }
          }
        >
          {props.children}
        </div>
      </Breakpoint>
    </BreakpointProvider>
  );
}

export default UICard;