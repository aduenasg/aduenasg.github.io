import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import { useLanguage } from "../i18n/LanguageContext";

const DownloadCVButton = () => {
  const [state, setState] = useState('idle');
  const { t } = useLanguage();

  const onClickHandler = () => {
    setState('loading');

    // Simulamos un retraso antes de descargar
    setTimeout(() => {
      // Descarga del CV
      const link = document.createElement('a');
      link.href = '/CV_ADG.pdf'; // Asegúrate de que tu CV esté en /public/cv.pdf
      link.download = 'CV.pdf';
      link.click();

      setState('success'); // Cambia el estado del botón a success
    }, 2000); // 2 segundos de animación
  };

  return (
    <ReactiveButton
      rounded
      buttonState={state}
      idleText= {t("buttonDOownload.text")}
      loadingText={t("buttonDOownload.download")}
      successText="¡Listo!"
      onClick={onClickHandler}
      
    />
  );
};

export default DownloadCVButton;
