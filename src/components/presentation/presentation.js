import React from 'react'
import 'scss/present/_present.scss'
import SectionTitle from 'components/layouts/section-title';

const Presentation = () => {

  const bg = 'image/common/10.jpg'
  const bgStyle = {
    backgroundImage: `linear-gradient(#00000070, #00000090), url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="present">

      <article className="present__article">
        <h1 className="present__title">Centre mohammed 6 de traitement des cancers</h1>
        <p className="present__articleparagraph">
        L'inauguration mercredi par Sa Majesté le Roi Mohammed VI,
        que Dieu L'assiste, accompagné de SAR la Princesse Lalla Salma,
        présidente de l'"Association Lalla Salma de lutte contre le cancer",
        du Centre Mohammed VI pour le traitement des cancers au centre hospitalier
        universitaire Ibn Rochd de Casablanca, traduit l'intérêt particulier
        qu'accorde le Souverain à l'amélioration des conditions d'hospitalisation
        des patients atteints de cette maladie et Sa volonté constante d'alléger leurs souffrances.
        </p>
        <p className="present__articleparagraph">
          Cette nouvelle structure hospitalière comporte plusieurs pôles, notamment un service de Radiothérapie, un service d'oncologie médicale, un service de médecine nucléaire et un pôle de détection précoce et de traitement des cancers du sein et gynécologique.
        </p>
        <p className="present__articleparagraph">
          Erigé en un véritable pôle d'activités du "Centre Mohammed VI pour le traitement des cancers" de Casablanca, le service de détection précoce et de traitement des cancers du sein et gynécologique, réalisé pour un investissement global de 60 millions de dirhams, a notamment pour missions la prise en charge spécialisée des cancers gynéco-mammaires, la formation des médecins et le développement de la recherche scientifique dans ce domaine.
        </p>
        <p className="present__articleparagraph">
        Il a la vocation d'élargir le réseau des structures spécialisées dans le traitement du cancer au Maroc, dans la mesure où il est doté d'équipements et de matériels modernes au service des habitants de Casablanca et des régions voisines.
        </p>
        <p className="present__articleparagraph">
          La mise en place de ce service s'inscrit dans le cadre d'une convention de partenariat entre l'Association Lalla Salma de lutte contre le cancer (ALSC), le ministère de la Santé, le conseil régional du Grand Casablanca, le conseil préfectoral, le conseil de la ville, l'Initiative nationale pour le développement humain (INDH) et le CHU Ibn Rochd de Casablanca.
        </p>
        <p className="present__articleparagraph">
          Cette structure modèle constitue un axe stratégique du Plan national de prévention et de contrôle du Cancer 2010-2019.
        </p>
        <p className="present__articleparagraph">
          Les cancers gynéco-mammaires représentent 60 pc de l'ensemble des cancers chez la femme au Maroc, et 75,2 pc des cancers chez la femme traités en 2011 au service d'oncologie du CHU Ibn Rochd.
        </p>
      </article>

      <aside className="present__aside">
        <img className="present__asideImg" src="image/common/6.jpg" />
        <img className="present__asideImg" src="image/common/10.jpg" />
      </aside>

    </div>
  )
}

export default Presentation
