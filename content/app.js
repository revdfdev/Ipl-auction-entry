import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': 'Helvetica',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'belt': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '10px',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textTransform': 'uppercase'
  },
  '#menu-bar': {
    'background': 'indigo',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  '#menu-bar h1': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': 'normal',
    'display': 'inline-block'
  },
  '#menu-bar ul': {
    'float': 'right',
    'listStyleType': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }]
  },
  '#menu-bar li': {
    'float': 'right',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  '#menu-bar a': {
    'color': '#fff'
  },
  'main': {
    'background': '#eee',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '10px'
  },
  'content': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'overflow': 'hidden'
  },
  'content button': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '10px',
    'cursor': 'pointer',
    'color': '#777',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(20,20,20,0.1)' }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'content input[type="submit"]': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '10px',
    'cursor': 'pointer',
    'color': '#777',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(20,20,20,0.1)' }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'content button:nth-child(2)': {
    'float': 'right'
  },
  'content remove': {
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'background': '#fff',
    'width': [{ 'unit': 'px', 'value': 18 }],
    'textAlign': 'center',
    'borderRadius': '20px',
    'color': 'red',
    'cursor': 'pointer',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'content ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'content li': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e2e2e2' }],
    'color': '#444'
  },
  'content li span': {
    'float': 'right'
  },
  'content li h3': {
    'display': 'inline-block',
    'fontWeight': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'content input': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': 'px', 'value': 10 }, { 'unit': '%H', 'value': 0.05 }],
    'borderRadius': '10px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'profile-pic': {
    'position': 'absolute',
    'zIndex': '999',
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': -12 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left',
    'background': '#FFF',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFF' }],
    'borderRadius': '100px',
    'WebkitBorderRadius': '100px',
    'MozBorderRadius': '100px',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'background': 'indigo',
    'overflow': 'hidden',
    'textAlign': 'center'
  },
  'profile-pic-center': {
    'position': 'fixed',
    'zIndex': '999',
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.47 }],
    'marginRight': [{ 'unit': '%H', 'value': 0.6 }],
    'float': 'left',
    'background': '#FFF',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFF' }],
    'borderRadius': '100px',
    'WebkitBorderRadius': '100px',
    'MozBorderRadius': '100px',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'background': 'indigo',
    'overflow': 'hidden',
    'textAlign': 'center'
  },
  'content input[type="submit"]:last-child': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }]
  },
  // Animations
  'mainng-enter': {
    'transition': '0.5s linear all',
    'opacity': '0'
  },
  'mainng-enterng-enter-active': {
    'opacity': '1'
  },
  '#players_list ling-enter': {
    'transition': '0.2s linear all',
    'transform': 'translateY(30px)',
    'opacity': '0'
  },
  '#players_list ling-enterng-enter-active': {
    'opacity': '1',
    'transform': 'translateY(0)'
  },
  '#players_list ling-leave': {
    'transition': '0.2s linear all',
    'transform': 'translateX(0)',
    'opacity': '1'
  },
  '#players_list ling-leaveng-leave-active': {
    'opacity': '0',
    'transform': 'translateX(-100%)'
  },
  '#players_list ling-leave-stagger': {
    'transitionDelay': '0.2s',
    'transitionDuration': '0'
  },
  'inputng-invalidng-touched': {
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'red' }]
  },
  'input[disabled="disabled"]': {
    'opacity': '0.4',
    'cursor': 'not-allowed !important'
  }
});
