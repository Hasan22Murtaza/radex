import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';

export const asbestsanierungSeoIntro = (
  <>
    <p className={p}>
      Asbest darf nicht auf Verdacht bearbeitet, angesägt oder selbst entfernt werden. Eine sichere Bestimmung ist nur
      durch Materialprobe und fachliche Einordnung möglich – die Entfernung ausschließlich durch Betriebe mit
      Sachkundenachweis nach TRGS&nbsp;519.
    </p>
    <p className={p}>
      Die Radex Objektmanagement GmbH führt Asbestsanierungen im Rhein-Main-Gebiet mit TRGS-519-Sachkunde durch:
      Abschottung, staubarmer Rückbau, vorschriftsmäßige Entsorgung und lückenlose Dokumentation inklusive
      Entsorgungsnachweis.
    </p>
  </>
);

export const asbestsanierungSeoSections = [
  {
    id: 'trgs-519',
    title: 'Zertifizierte Sanierung nach TRGS 519',
    content: (
      <>
        <p className={p}>
          Die Entfernung asbesthaltiger Materialien darf nur durch Firmen mit Sachkundenachweis nach TRGS&nbsp;519
          (Technische Regeln für Gefahrstoffe) erfolgen. Radex verfügt über die notwendigen Zulassungen, geschultes
          Personal und die erforderliche Schutzausrüstung.
        </p>
        <p className={p}>
          Jede Sanierung läuft nach Arbeitsplan: Gefährdungsbeurteilung, Abschottung, fachgerechter Rückbau und
          dokumentierter Abschluss. So schützen wir Gesundheit, Umwelt und eine rechtssichere Abwicklung für Eigentümer
          und Vermieter.
        </p>
      </>
    ),
  },
  {
    id: 'kein-diy',
    title: 'Warum Sie Asbest niemals selbst entfernen sollten',
    content: (
      <>
        <p className={p}>
          Eigenmächtiges Entfernen ist gesundheitsgefährlich und rechtlich unzulässig. Schon kleine Eingriffe können
          Fasern freisetzen. Bußgelder und Folgeschäden sind keine Seltenheit.
        </p>
        <p className={p}>
          Verdächtig sind vor allem Materialien aus der Bauzeit vor 1993 – etwa Wellplatten, Floor-Flex-Bodenplatten,
          alte Fliesenkleber, Spachtelmassen, Fassadenplatten oder Rohrisolierungen. Bei Verdacht nichts anbohren,
          schleifen oder herausreißen – sondern fachlich prüfen lassen.
        </p>
      </>
    ),
  },
  {
    id: 'verfahren',
    title: 'Sicheres Sanierungsverfahren',
    content: (
      <>
        <p className={p}>
          Vor Beginn erstellen wir eine Gefährdungsbeurteilung und schotten den Arbeitsbereich ab. Im Innenbereich
          arbeiten wir mit Unterdruckhaltung, Personenschleusen und HEPA-gefilterter Abluft.
        </p>
        <p className={p}>
          Asbesthaltige Materialien werden staubarm demontiert, sofort verpackt und sicher abtransportiert. Nach Abschluss
          erfolgt – soweit vorgeschrieben – eine Freimessung der Raumluft, bevor die Bereiche wieder genutzt werden
          dürfen.
        </p>
      </>
    ),
  },
  {
    id: 'entsorgung-dokumentation',
    title: 'Entsorgung und Dokumentation',
    content: (
      <>
        <p className={p}>
          Asbest gilt als gefährlicher Abfall und unterliegt strengen Entsorgungsvorschriften. Die Materialien werden in
          staubdichten, gekennzeichneten Behältern bzw. Big-Bags verpackt und über zugelassene Deponien entsorgt.
        </p>
        <p className={p}>
          Sie erhalten alle Entsorgungsnachweise – wichtige Dokumente für Behörden, Versicherungen und beim späteren
          Verkauf der Immobilie. Bei asbesthaltigen Sanierungsarbeiten ist zudem eine Anzeige bei der zuständigen
          Behörde erforderlich; Radex kümmert sich um die vorgeschriebenen Anzeigen, Arbeitspläne und die komplette
          Dokumentation.
        </p>
      </>
    ),
  },
  {
    id: 'einsatzorte',
    title: 'Typische Einsatzorte: Dach, Boden, Fassade, Innenraum',
    content: (
      <>
        <p className={p}>Gebäude mit Baujahr vor 1993 sind häufig betroffen. Typische Themen:</p>
        <ul className={ul}>
          <li>Dach: Asbestzementplatten (Eternit), Wellplatten und Dachschindeln</li>
          <li>Boden: Floor-Flex-Platten, asbesthaltige PVC- und Klebstoffschichten</li>
          <li>Fassade: asbesthaltige Platten und Verkleidungen aus den 60er- bis 80er-Jahren</li>
          <li>Innenraum: Spachtelmassen, Rohrisolierungen, Verkleidungen vor Umbau oder Kernsanierung</li>
        </ul>
        <p className={p}>
          Vor Abbruch- und Sanierungsarbeiten im Altbau ist eine fachliche Erkundung Pflicht. Mehr zur{' '}
          <Link to="/schadstoffsanierung-rhein-main">Schadstoffsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'weitere-schadstoffe',
    title: 'Weitere Schadstoffe und Schnittstellen',
    content: (
      <>
        <p className={p}>
          Neben Asbest können in älteren Gebäuden künstliche Mineralfasern (KMF), PAK- und teerhaltige Kleber oder
          belastete Anstriche auftreten. Bei geplantem Umbau oder Abriss prüfen wir das Gebäude vorab und beraten zur
          sicheren Vorgehensweise.
        </p>
        <p className={p}>
          Häufig stehen Asbestthemen neben Feuchtigkeit und Schimmel. Dann müssen Rückbau, Trocknung und Wiederaufbau in
          der richtigen Reihenfolge geplant werden. Mehr zur{' '}
          <Link to="/schimmelsanierung-rhein-main">Schimmelsanierung</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Kosten einer Asbestsanierung',
    content: (
      <>
        <p className={p}>
          Preise beinhalten Spezialausrüstung, Schutzmaßnahmen und Sondermüll-Entsorgung. Die Angaben dienen der
          Orientierung:
        </p>
        <ul className={ul}>
          <li>Dachsanierung: ab 35&nbsp;€ / m²</li>
          <li>Bodenbeläge: ab 60&nbsp;€ / m²</li>
          <li>Innenraum-Sanierung: auf Anfrage</li>
        </ul>
        <p className={p}>
          Nach Besichtigung und klarer Abstimmung des Umfangs erhalten Sie ein transparentes Angebot.
        </p>
      </>
    ),
  },
  {
    id: 'region',
    title: 'Asbestsanierung im Rhein-Main-Gebiet',
    content: (
      <>
        <p className={p}>
          Radex betreut Asbest- und Schadstoffthemen in über 60 Städten im Rhein-Main-Gebiet – von Rödermark und Rodgau
          über Offenbach und Frankfurt bis Darmstadt und dem Taunus.
        </p>
        <p className={p}>
          Bei Verdacht nichts selbst bearbeiten: Rufen Sie unter 06074&nbsp;960620 an oder nutzen Sie den{' '}
          <Link to="/kontakt">Kontaktbereich</Link> für eine erste fachliche Einschätzung.
        </p>
      </>
    ),
  },
];
