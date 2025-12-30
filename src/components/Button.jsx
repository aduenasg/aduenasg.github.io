import { useState } from 'react';
import ReactiveButton from 'reactive-button';

const Buttons = () => {
 const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    
    setTimeout(() => {
      setState('success');
    }, 2000);
  };

  return (
    <ReactiveButton
      rounded 
      buttonState={state}
      idleText="Proyectos"
      loadingText="Vamos"
      successText="Ready"
      onClick={onClickHandler}
    />
  );
}

export default Buttons;