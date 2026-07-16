import { Link } from '../router';

const p = 'mb-4 text-gray-600';
const ul = 'br-seo-list mb-4';
const h4 = 'br-seo-subheading';

export const badewanneAustauschenSeoIntro = (
  <>
    <p className={p}>
      Hier finden Sie ausführliche Informationen rund um das Badewanne austauschen im Rhein-Main-Gebiet. Erfahren Sie
      mehr über den richtigen Zeitpunkt für einen Wannentausch, den genauen Ablauf, die Wahl zwischen Emaillewanne,
      Acrylwanne und freistehender Wanne, die Besonderheiten im Bestandsbad, Kostenfaktoren sowie viele weitere
      Informationen für einen sauberen und dauerhaften Wannentausch.
    </p>
    <p className={p}>
      Die Badewanne ist in die Jahre gekommen, aber das restliche Bad ist noch in Ordnung? Radex tauscht Ihre Wanne
      gezielt aus – mit geprüften Anschlüssen, sauberem Einbau und einem Ergebnis, das zum bestehenden Bad passt.
    </p>
  </>
);

export const badewanneAustauschenSeoSections = [
  {
    id: 'wannentausch-statt-badsanierung',
    title: 'Neue Badewanne einbauen – gezielte Maßnahme statt kompletter Badsanierung',
    content: (
      <>
        <p className={p}>
          Die Wanne ist gerissen, die Emaille ist blind geworden oder die alte Stahlwanne hat schlicht ausgedient –
          aber Fliesen, Sanitärobjekte und Armaturen sind noch in Ordnung. In dieser Situation braucht es keine
          vollständige Badsanierung. Ein gezielter Wannentausch ist die wirtschaftlichere und schnellere Lösung: Die
          Badewanne wird ausgetauscht, die Anschlüsse werden geprüft, der Wannenrand wird neu abgedichtet. Das
          restliche Bad bleibt unberührt.
        </p>
        <p className={p}>
          Diese Art der Badteilrenovierung ist ein klassischer Anwendungsfall für Radex Objektmanagement GmbH. Als
          Generalunternehmer im Rhein-Main-Gebiet koordinieren wir alle notwendigen Arbeiten – Ausbau der alten
          Wanne, Sanitärinstallation durch Bernd Knoop als eingetragenen SHK Meister, Fliesenarbeiten am
          Wannenrand falls erforderlich, Abdichtung und Einbau. Sie haben einen Ansprechpartner, der den
          Wannentausch von Anfang bis Ende verantwortet.
        </p>
        <p className={p}>
          Wichtig: Diese Seite beschreibt den Austausch einer bestehenden Badewanne gegen eine neue Wanne – das
          Wannenkonzept bleibt erhalten. Wer statt einer neuen Wanne eine Dusche einbauen möchte, findet die
          passenden Informationen auf der Seite{' '}
          <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'wann-lohnt-sich-wannentausch',
    title: 'Wann lohnt es sich, die Badewanne zu ersetzen?',
    content: (
      <>
        <p className={p}>
          Nicht jede alte Wanne muss sofort ausgetauscht werden – aber es gibt klare Anzeichen dafür, dass eine
          Erneuerung sinnvoll ist. Radex beurteilt den Zustand Ihrer Wanne bei der Bestandsaufnahme ehrlich: Was
          lässt sich noch aufbereiten, was sollte ersetzt werden?
        </p>
        <h4 className={h4}>Schäden an der Wannenoberfläche</h4>
        <p className={p}>
          Risse in der Emaille, tiefe Kratzer, abgeplatzte Stellen oder dauerhaft verfärbte Oberflächen sind
          typische Gründe für einen Wannentausch. Eine Emaillewanne kann zwar in bestimmten Fällen mit einer neuen
          Emaillebeschichtung aufbereitet werden – wenn der Schaden aber tiefer geht oder großflächig ist, ist eine
          neue Badewanne die dauerhaft bessere Lösung. Bei Acrylwannen ist eine Aufbereitung durch Beschichtung
          möglich, hat aber begrenzte Haltbarkeit.
        </p>
        <h4 className={h4}>Undichtigkeit am Wannenrand</h4>
        <p className={p}>
          Wenn die Silikonfuge zwischen Wannenrand und Fliesenspiegel wiederholt undicht wird oder sich Schimmel
          hinter der Fuge bildet, liegt das oft nicht nur an der Fuge selbst – manchmal ist das Wannenniveau über
          die Jahre leicht abgesunken oder die Verbindung zwischen Wanne und Wandbelag ist grundlegend
          problematisch. In diesen Fällen behebt eine neue Silikonnaht das Problem nicht dauerhaft. Der
          Wannentausch, verbunden mit einer fachgerechten Abdichtung des Wannenrandes, schafft eine saubere und
          dauerhafte Grundlage.
        </p>
        <h4 className={h4}>Veraltete Konstruktion und Gewicht</h4>
        <p className={p}>
          Ältere Gusseisen- oder Stahlwannen sind sehr schwer und entsprechen oft einem veralteten Wannenformat.
          Eine neue Acrylwanne einbauen ist in diesen Fällen nicht nur optisch ein Gewinn – sie ist leichter, wärmer
          anzufassen, in vielen Varianten erhältlich und kommt mit modernen Armaturen und Abläufen zurecht. Der
          Ausbau einer schweren Emaillewanne erfordert etwas mehr Aufwand, ist aber für Radex im Rhein-Main-Gebiet
          Routine.
        </p>
        <h4 className={h4}>Armaturen und Ablauf nicht mehr zeitgemäß</h4>
        <p className={p}>
          Wenn Wannenarmatur oder Ablaufgarnitur dauerhaft tropfen oder nicht mehr richtig funktionieren, kann ein
          Wannentausch sinnvoll sein – besonders wenn gleichzeitig der Wannentausch ohnehin ansteht. Beim Einbau
          einer neuen Wanne werden Ablaufgarnitur und Überlaufstutzen in der Regel komplett erneuert. Die Armatur
          kann gleichzeitig gewechselt werden. So entsteht ein stimmiges Gesamtbild, ohne mehrmals in dasselbe
          System einzugreifen.
        </p>
        <h4 className={h4}>Wanne oder doch gleich Dusche?</h4>
        <p className={p}>
          Wer beim Wannentausch überlegt, ob stattdessen eine Dusche sinnvoller wäre, sollte sich die Seite{' '}
          <Link to="/dusche-statt-badewanne">Dusche statt Badewanne</Link> ansehen. Dort erklären wir, unter
          welchen Voraussetzungen eine Umrüstung technisch und baulich möglich ist – und was dabei zu beachten ist.
          Wer die Wanne behalten möchte, ist auf dieser Seite richtig.
        </p>
      </>
    ),
  },
  {
    id: 'was-wird-gemacht',
    title: 'Was beim Badewanne austauschen im Einzelnen gemacht wird',
    content: (
      <>
        <p className={p}>
          Ein Wannentausch klingt einfach – aber dahinter steckt ein handwerklich präziser Ablauf, der sorgfältig
          ausgeführt sein will. Radex geht dabei systematisch vor, damit das Ergebnis nicht nur optisch stimmt,
          sondern auch technisch einwandfrei ist.
        </p>
        <h4 className={h4}>Ausbau der alten Badewanne</h4>
        <p className={p}>
          Bevor die neue Wanne eingebaut werden kann, muss die alte fachgerecht ausgebaut werden. Bei einer
          eingebauten Wanne bedeutet das: Wannenverkleidung entfernen, Wasserzuleitungen absperren, Ablauf lösen,
          Silikonnaht öffnen und die Wanne aus ihrer Einbaulage nehmen. Bei älteren Gusseisen- oder
          Stahlemaillewannen kommt erschwerend das erhebliche Gewicht hinzu – eine 150 cm lange Gusseisen- oder
          Stahlemaillewanne kann leicht 100 Kilogramm und mehr wiegen. Das ist Logistikaufgabe und Handwerksarbeit
          in einem.
        </p>
        <p className={p}>
          Nach dem Ausbau zeigt sich oft, in welchem Zustand der Bereich unter und hinter der alten Wanne ist.
          Manchmal finden sich dort Feuchtigkeitsrückstände oder kleinere Fehlstellen im Wandbelag. Radex
          dokumentiert den Befund und bespricht mit Ihnen, ob und wie diese Bereiche vor dem Einbau der neuen Wanne
          behandelt werden müssen.
        </p>
        <h4 className={h4}>Anschlüsse prüfen und vorbereiten</h4>
        <p className={p}>
          Vor dem Einbau der neuen Badewanne werden die vorhandenen Wasser- und Ablaufanschlüsse geprüft. Das ist
          ein wichtiger Schritt, der oft unterschätzt wird: Anschlüsse, die seit Jahrzehnten unter einer eingebauten
          Wanne lagen, können verkalkt, korrodiert oder nicht mehr dicht sein. Bernd Knoop als eingetragener SHK
          Meister beurteilt den Zustand der Leitungen und klärt, ob Anpassungen notwendig sind – bevor die neue
          Wanne montiert wird, nicht danach.
        </p>
        <p className={p}>
          Wenn die Zuleitungen in gutem Zustand sind und die Anschlusspositionen zur neuen Wanne passen, ist der
          Installationsaufwand überschaubar. Wenn jedoch das neue Wannenformat andere Maße hat als die alte Wanne
          oder wenn eine andere Armaturenposition gewünscht wird, müssen die Anschlüsse entsprechend angepasst
          werden. Radex plant das im Vorfeld und gibt Ihnen ein Angebot, das diesen Aufwand abbildet.
        </p>
        <h4 className={h4}>Badteilrenovierung – gezielt und wirtschaftlich</h4>
        <p className={p}>
          Der Wannentausch ist eine typische Badteilrenovierung: Eine Einzelmaßnahme mit klarem Umfang und
          überschaubarer Bauzeit. Sie erneuern, was erneuerungsbedürftig ist – und lassen den Rest des Bades
          unberührt. Mehr zu Möglichkeiten und Abgrenzung lesen Sie auf der Seite{' '}
          <Link to="/badsanierung/badezimmer-sanieren">Badrenovierung</Link>.
        </p>
        <h4 className={h4}>Einbau der neuen Badewanne</h4>
        <p className={p}>
          Die neue Wanne wird eingemessen, auf Wannenfüßen oder einem Trägersystem in der richtigen Höhe
          ausgerichtet und in die Einbausituation eingepasst. Das korrekte Gefälle zum Ablauf hin – damit das
          Wasser vollständig abläuft und sich keine Pfütze bildet – wird bei der Ausrichtung sorgfältig
          eingestellt. Dann werden Ablaufgarnitur und Überlaufstutzen montiert sowie die Wasserzuleitungen
          angeschlossen.
        </p>
        <p className={p}>
          Vor dem endgültigen Schließen der Verkleidung prüft Radex die Dichtigkeit aller Verbindungen. Erst wenn
          alles dicht ist, wird die Wannenverkleidung montiert und der Wannenrand zur Fliesenwand mit
          Sanitärsilikon fachgerecht abgedichtet. Die Silikonfuge ist ein kritischer Punkt: Wenn sie nicht korrekt
          ausgeführt wird, entstehen genau die Undichtigkeitsprobleme, die man mit dem Wannentausch eigentlich
          beseitigen wollte.
        </p>
        <h4 className={h4}>Fliesenarbeiten am Wannenrand</h4>
        <p className={p}>
          Beim Ausbau einer alten Wanne entstehen fast immer kleinere Fehlstellen im Fliesenspiegel rund um den
          Wannenrand – dort, wo die alte Silikonnaht saß oder wo der Wannenrand in die Wandfliesen eingebunden war.
          Diese Stellen müssen sauber geschlossen werden, damit der neue Wannenrand zum Fliesenbild passt.
        </p>
        <p className={p}>
          Radex koordiniert die notwendigen Fliesenarbeiten direkt im Rahmen des Wannentauschs. Sie benötigen
          keinen separaten Fliesenleger – wir stimmen die Gewerke aufeinander ab. Wenn die Bestandsfliesen am
          Wannenrand beschädigt sind oder wenn das neue Wannenformat eine veränderte Fliesenfläche ergibt,
          besprechen wir gemeinsam, wie das optisch sauber gelöst werden kann. Manchmal ist es sinnvoll, den
          gesamten Wandbereich rund um die neue Wanne neu zu fliesen – das beurteilen wir vor Ort.
        </p>
      </>
    ),
  },
  {
    id: 'wannentypen',
    title: 'Emaillewanne, Acrylwanne, freistehende Wanne – was ist die richtige Wahl?',
    content: (
      <>
        <p className={p}>
          Beim Badewanne austauschen stellt sich früh die Frage: Welche neue Wanne soll es sein? Die Entscheidung
          hängt von der Einbausituation, dem Budget und dem persönlichen Geschmack ab. Radex berät Sie dabei – ohne
          Parteinahme für ein bestimmtes Produkt.
        </p>
        <h4 className={h4}>Acrylwanne einbauen</h4>
        <p className={p}>
          Die Acrylwanne ist heute die gebräuchlichste Wahl beim Wannentausch. Sie ist deutlich leichter als eine
          Stahlemaillewanne, wärmer anzufassen und in vielen Formaten, Größen und Farben erhältlich. Acrylwannen
          lassen sich durch ein Trägersystem stabil unterfüttern, sodass eine satte, federfeste Auflagefläche
          entsteht. Die Oberfläche ist pflegeleicht, reagiert aber empfindlicher auf Kratzer als Emaille.
        </p>
        <p className={p}>
          Für einen Wannentausch im Bestandsbad ist die Acrylwanne oft die praktischere Wahl: leicht einzubringen,
          gut anpassbar an vorhandene Einbausituationen und in einem breiten Preissegment verfügbar. Radex
          empfiehlt Ihnen Produkte, die zu Ihrer Einbaulage und Ihrem Nutzungsverhalten passen.
        </p>
        <h4 className={h4}>Emaillewanne austauschen</h4>
        <p className={p}>
          Eine Emaillewanne aus Stahl oder Gusseisen ist langlebiger und robuster gegen Kratzer als Acryl. Die
          Oberfläche bleibt auch nach vielen Jahren glatt und lässt sich gut reinigen. Der Nachteil: Stahlemaillewannen
          sind schwerer – und damit beim Einbau aufwändiger zu handhaben. Eine Gusseisen- oder Stahlemaillewanne
          auszutauschen erfordert beim Ausbau mehr Aufwand als bei einer leichteren Acrylwanne.
        </p>
        <p className={p}>
          Wer eine neue Emaillewanne einbauen lassen möchte, bekommt bei Radex einen normgerechten Einbau
          einschließlich geprüfter Anschlüsse. Die Entscheidung zwischen Emaille und Acryl besprechen wir auf Basis
          Ihrer konkreten Einbausituation.
        </p>
        <h4 className={h4}>Freistehende Badewanne</h4>
        <p className={p}>
          Eine freistehende Wanne ist keine Einbauwanne, sondern steht auf eigenen Füßen im Raum. Das erfordert
          eine Wandarmatur oder eine Bodenarmatur sowie eine entsprechende Leitungsführung. Im Bestandsbad ist das
          umsetzbar, wenn die Anschlusspositionen angepasst werden können. Eine freistehende Wanne ist ein
          gestalterisches Statement – sie verändert das Bad sichtbar und setzt einen klaren Schwerpunkt.
        </p>
        <p className={p}>
          Ob eine freistehende Wanne in Ihr Bad passt – räumlich, leitungstechnisch und gestalterisch – beurteilt
          Radex bei der Bestandsaufnahme. Bei Interesse zeigen wir Ihnen, was in Ihrer Einbausituation möglich ist.
        </p>
      </>
    ),
  },
  {
    id: 'ablauf-wannentausch',
    title: 'Wie Radex den Wannentausch durchführt – von der Bestandsaufnahme bis zur Übergabe',
    content: (
      <>
        <h4 className={h4}>Schritt 1: Bestandsaufnahme und Angebot</h4>
        <p className={p}>
          Jeder Wannentausch beginnt mit einer ehrlichen Bestandsaufnahme vor Ort. Radex schaut sich die vorhandene
          Einbausituation an: Zustand der alten Wanne, Zustand der Anschlüsse, Format und Maße der Nische oder
          Einbaulage, Zustand der Wandfliesen rund um den Wannenrand. Erst auf dieser Grundlage lässt sich
          beurteilen, welche Wanne passt, welcher Installationsaufwand anfällt und ob Fliesenarbeiten am Rand
          notwendig werden.
        </p>
        <p className={p}>
          Die Bestandsaufnahme ist kostenlos. Nach dem Termin erhalten Sie von Radex ein konkretes Angebot mit
          klarem Leistungsumfang – keine pauschale Schätzung, sondern eine Position für Position aufgestellte
          Übersicht. Zu Kostenfaktoren bei Badmaßnahmen lesen Sie mehr auf der Seite{' '}
          <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>.
        </p>
        <h4 className={h4}>Schritt 2: Materialauswahl und Terminplanung</h4>
        <p className={p}>
          Radex unterstützt Sie bei der Auswahl der neuen Badewanne. Wir besprechen Wannenformat, -material und
          Armaturenkonzept auf Basis Ihrer Einbausituation und Ihrer Wünsche. Wenn das Modell feststeht, wird der
          Einbautermin geplant. Der Wannentausch selbst dauert in der Regel ein bis zwei Arbeitstage – abhängig
          davon, ob Fliesenarbeiten dazukommen und ob Anschlussanpassungen notwendig sind.
        </p>
        <p className={p}>
          Wie ein typischer Ablauf bei Badmaßnahmen aussieht und was zeitlich zu erwarten ist, beschreibt die Seite{' '}
          <Link to="/ablauf-badsanierung">Ablauf Badsanierung</Link> im Detail.
        </p>
        <h4 className={h4}>Schritt 3: Ausführung und Abnahme</h4>
        <p className={p}>
          Beim Einbautermin führt Radex alle Arbeiten koordiniert durch: Ausbau der alten Wanne, Anschlussprüfung,
          Einbau der neuen Wanne, Fliesenarbeiten am Rand wenn nötig, Abdichtung, Dichtigkeitsprüfung. Als SHK
          Meisterbetrieb verantwortet Bernd Knoop die Sanitärinstallation. Weitere Gewerke – Fliesenarbeiten –
          werden durch koordinierte Fachbetriebe ausgeführt.
        </p>
        <p className={p}>
          Nach Abschluss der Arbeiten prüft Radex das Ergebnis gemeinsam mit Ihnen: Ist die Armatur dicht? Läuft
          der Ablauf korrekt? Sitzt die Silikonnaht sauber? Erst wenn alles stimmt, ist die Arbeit für uns
          abgeschlossen.
        </p>
        <h4 className={h4}>SHK Meisterbetrieb – nur für das, was wir können</h4>
        <p className={p}>
          Bernd Knoop ist als SHK Meister eingetragen. Das bedeutet: Sanitärinstallation, Anschlüsse,
          Armaturenmontage und Dichtigkeitsprüfung führt Radex normgerecht und mit Gewährleistung durch.
          Fliesenarbeiten am Wannenrand werden durch koordinierte Fachbetriebe ausgeführt. Radex benennt klar, wer
          was macht – und gibt für das Gesamtergebnis die Verantwortung als Generalunternehmer.
        </p>
        <h4 className={h4}>Wannentausch ohne Überraschungen</h4>
        <p className={p}>
          Radex gibt ein verbindliches Angebot vor Baubeginn. Was nach dem Ausbau der alten Wanne zum Vorschein
          kommt, wird offen kommuniziert – nicht still als Zusatzposition abgerechnet.
        </p>
        <h4 className={h4}>Kurze Bauzeit</h4>
        <p className={p}>
          Ein reiner Wannentausch ist in der Regel in ein bis zwei Arbeitstagen abgeschlossen. Das Bad ist danach
          sofort wieder nutzbar – ohne wochenlange Baustelle.
        </p>
        <h4 className={h4}>Ein Ansprechpartner</h4>
        <p className={p}>
          Radex koordiniert alle Gewerke des Wannentauschs. Sie sprechen mit einer Person – nicht mit mehreren
          Betrieben, die sich gegenseitig die Verantwortung zuschieben.
        </p>
      </>
    ),
  },
  {
    id: 'bestandsbad',
    title: 'Badewanne austauschen im Bestandsbad – was man vorher wissen sollte',
    content: (
      <>
        <p className={p}>
          Wer eine Badewanne im Bestandsbad modernisieren will, bewegt sich in einem Rahmen, den nicht er selbst
          gesetzt hat. Format, Anschlusspositionen, Fliesenbild, Deckenhöhe – das alles ist gegeben. Eine neue
          Wanne muss in diesen Rahmen passen, oder der Rahmen muss angepasst werden. Beides ist möglich – aber es
          ist ein Unterschied, ob man im Neubau plant oder im Bestand arbeitet.
        </p>
        <p className={p}>
          Der wichtigste Punkt: Die neue Badewanne muss zur Einbaulage passen. Wenn die bestehende Wannennische ein
          Standardformat von 170 x 75 cm hat, muss die neue Wanne diese Maße ebenfalls abdecken – oder es werden
          Anpassungsarbeiten an der Verkleidung oder am Fliesenbild notwendig. Wenn die Anschlusspositionen für
          Zulauf und Armatur fest im Boden oder in der Wand verankert sind, begrenzt das die Auswahl an
          Wannenmodellen.
        </p>
        <p className={p}>
          Radex arbeitet regelmäßig in Bestandsbädern des Rhein-Main-Gebiets – in Wohnhäusern aus den 1960er bis
          1990er Jahren in Mühlheim am Main und Seligenstadt ebenso wie in jüngeren Gebäuden in Hainburg, Mainhausen
          und Hanau. Wir kennen die typischen Einbausituationen, die üblichen Wannenformate und die handwerklichen
          Besonderheiten, die im Bestand auftreten können.
        </p>
        <p className={p}>
          Ein häufiger Befund: Die alte Wanne sitzt tiefer als erwartet – weil sie vor dem Fliesenlegen eingebaut
          wurde und seitdem von Fliesen umschlossen ist. Das macht den Ausbau etwas aufwändiger, ist aber lösbar.
          Ein weiterer typischer Punkt: Die Wandfliesen rund um den Wannenrand sind in einem Format, das heute
          nicht mehr erhältlich ist. In diesem Fall muss beim Wannentausch entschieden werden, wie mit dem
          Randbereich umgegangen wird – ob passende Restfliesen vorhanden sind, ob ein kontrastreicher Abschluss
          gewählt wird oder ob der gesamte Bereich neu gefliest wird.
        </p>
        <h4 className={h4}>Einbauformat klären</h4>
        <p className={p}>
          Radex misst die vorhandene Nische oder Einbaulage aus und berät Sie, welche Wannenformate passen – bevor
          Sie eine Wanne bestellen.
        </p>
        <h4 className={h4}>Anschlüsse im Vorfeld prüfen</h4>
        <p className={p}>
          Leitungszustand, Anschlusspositionen und Armaturenkonzept werden vor dem Einbau bewertet. Überraschungen
          nach dem Ausbau der alten Wanne werden offen kommuniziert.
        </p>
        <h4 className={h4}>Fliesenbild am Rand</h4>
        <p className={p}>
          Fehlstellen im Fliesenbereich rund um den neuen Wannenrand werden im Rahmen des Wannentauschs sauber
          geschlossen – durch koordinierte Fliesenarbeiten.
        </p>
        <h4 className={h4}>Dichtigkeit als Abnahmekriterium</h4>
        <p className={p}>
          Wannenanschlüsse, Ablaufgarnitur und Silikonnaht am Wannenrand werden nach dem Einbau auf Dichtigkeit
          geprüft. Das ist kein optionaler Schritt, sondern Standard bei Radex.
        </p>
      </>
    ),
  },
  {
    id: 'kosten',
    title: 'Badewanne austauschen Kosten – worauf es ankommt',
    content: (
      <>
        <p className={p}>
          Die Kosten für einen Wannentausch sind nicht pauschal zu nennen – sie hängen von konkreten Faktoren ab,
          die erst nach einer Bestandsaufnahme klar sind. Trotzdem gibt es Orientierungspunkte, die helfen,
          realistische Erwartungen zu setzen.
        </p>
        <h4 className={h4}>Wannentyp und Wannenmodell</h4>
        <p className={p}>
          Das größte Preisfeld ist das Wannenmodell selbst. Eine einfache Acryl-Einbauwanne in einem Standardformat
          ist erheblich günstiger als eine Acrylwanne mit besonderer Form oder Oberfläche, eine Stahlemaillewanne
          oder eine freistehende Wanne. Radex berät Sie ehrlich, welche Kategorie für Ihre Situation und Ihren
          Budgetrahmen passend ist.
        </p>
        <h4 className={h4}>Installationsaufwand und Anschlussarbeiten</h4>
        <p className={p}>
          Wenn die Anschlüsse der neuen Wanne exakt zu den bestehenden Positionen passen, ist der
          Installationsaufwand überschaubar. Wenn Leitungen angepasst, versetzt oder erneuert werden müssen, erhöht
          sich der Aufwand entsprechend. Bernd Knoop als SHK Meister beurteilt das vor Ort und gibt Ihnen eine
          klare Kostenposition dafür. Mehr zu Kostenfaktoren finden Sie auf der Seite{' '}
          <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>.
        </p>
        <h4 className={h4}>Fliesenarbeiten am Wannenrand</h4>
        <p className={p}>
          Ob und in welchem Umfang Fliesenarbeiten rund um den neuen Wannenrand anfallen, hängt vom Zustand der
          Bestandsfliesen und von der gewählten neuen Wanne ab. Kleine Fehlstellen im Randbereich lassen sich oft
          mit wenig Aufwand schließen. Wenn der gesamte Wandbereich um die neue Wanne neu gefliest werden soll,
          kommt das als eigene Position dazu. Radex zeigt Ihnen Ihre Optionen und die jeweiligen
          Kostenauswirkungen.
        </p>
        <h4 className={h4}>Wannentausch oder weitergehende Badrenovierung?</h4>
        <p className={p}>
          Manchmal ergibt es Sinn, beim Wannentausch gleich weitere Maßnahmen zu bündeln – neue Armaturen, neues
          WC, neue Oberflächen. Das spart einen zweiten Handwerkereinsatz und ergibt ein stimmigeres Gesamtbild. Ob
          das sinnvoll ist, hängt vom Zustand des restlichen Bades ab. Radex zeigt Ihnen auf der Grundlage der
          Bestandsaufnahme, was im Rahmen einer{' '}
          <Link to="/badsanierung/badezimmer-sanieren">Badrenovierung</Link> gebündelt werden kann und was das
          bedeutet.
        </p>
      </>
    ),
  },
  {
    id: 'einsatzgebiet',
    title: 'Badewanne austauschen im Rhein-Main-Gebiet – Radex in Ihrer Region',
    content: (
      <>
        <p className={p}>
          Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Wannentausch-Aufträge
          kommen häufig aus dem nördlichen und östlichen Rhein-Main-Raum – aus Städten und Gemeinden entlang des
          Mains, in denen viele Wohngebäude aus den 1970er und 1980er Jahren stehen, deren Badewannen inzwischen
          erneuerungsbedürftig sind.
        </p>
        <p className={p}>
          In Mühlheim am Main und Seligenstadt führen wir regelmäßig Wannentausch-Maßnahmen durch – in
          Einfamilienhäusern und Eigentumswohnungen, in denen die alten Stahlemaillewannen durch neue Acrylwannen
          ersetzt werden. In Hainburg und Mainhausen sind wir für Privatkunden tätig, die ihr Bad gezielt
          teilrenovieren lassen möchten, ohne den gesamten Raum anzutasten.
        </p>
        <p className={p}>
          In Hanau und den umliegenden Gemeinden wie Großkrotzenburg, Langenselbold und Rodenbach führt Radex
          Wannentausch-Aufträge als Badteilrenovierung durch. Das Badewanne austauschen ist dabei oft der Einstieg
          in eine größere Auffrischung des Bades, die dann schrittweise fortgesetzt wird – je nach Budget und
          Dringlichkeit.
        </p>
        <p className={p}>
          Die vollständige Übersicht aller Einsatzorte finden Sie auf der Seite{' '}
          <Link to="/einsatzgebiete-rhein-main">Einsatzgebiete</Link>.
        </p>
        <h4 className={h4}>Unsere Einsatzorte für Wannentausch</h4>
        <ul className={ul}>
          <li>Mühlheim am Main</li>
          <li>Seligenstadt</li>
          <li>Hainburg</li>
          <li>Mainhausen</li>
          <li>Hanau</li>
          <li>Großkrotzenburg</li>
          <li>Langenselbold</li>
          <li>Rodenbach</li>
          <li>Rödermark</li>
          <li>Rhein-Main-Gebiet</li>
        </ul>
        <p className={p}>
          <Link to="/einsatzgebiete-rhein-main">Alle Orte im Überblick →</Link>
        </p>
      </>
    ),
  },
  {
    id: 'faq-seo',
    title: 'Häufige Fragen zum Wannentausch',
    content: (
      <>
        <h4 className={h4}>Wann sollte eine Badewanne ausgetauscht werden?</h4>
        <p className={p}>
          Eine Badewanne sollte ausgetauscht werden, wenn dauerhaft sichtbare Schäden vorliegen, die sich nicht
          mehr sinnvoll instandsetzen lassen: tiefe Risse in der Emaille oder im Acryl, hartnäckige Verfärbungen,
          großflächig abgeplatzte Oberflächen oder ein Ablauf, der nicht mehr dauerhaft dicht ist. Auch wenn der
          Wannenrand trotz neuer Silikonnaht immer wieder undicht wird, kann das ein Zeichen sein, dass die Wanne
          selbst nicht mehr in der ursprünglichen Lage sitzt.
        </p>
        <p className={p}>
          Darüber hinaus lohnt der Wannentausch, wenn die Wanne aus einer Zeit stammt, in der andere Formate und
          Armaturen üblich waren – und die vorhandene Konstruktion sich mit modernen Armaturen oder Abläufen nicht
          mehr sinnvoll verbinden lässt. Radex beurteilt den Zustand Ihrer vorhandenen Wanne kostenlos bei einer
          Bestandsaufnahme vor Ort.
        </p>
        <h4 className={h4}>Kann nur die Badewanne erneuert werden, ohne das ganze Bad zu sanieren?</h4>
        <p className={p}>
          Ja – der gezielte Wannentausch als Badteilrenovierung ist ohne vollständige Badsanierung möglich.
          Voraussetzung ist, dass die vorhandenen Anschlüsse für Zulauf und Ablauf in einwandfreiem Zustand sind
          und das neue Wannenformat zur Einbaulage passt. Das restliche Bad – Fliesen, WC, Waschtisch, Armaturen –
          kann dabei unangetastet bleiben, sofern es in gutem Zustand ist.
        </p>
        <p className={p}>
          Beim Ausbau der alten Wanne entstehen typischerweise kleinere Fehlstellen im Fliesenspiegel am
          Wannenrand, die sauber geschlossen werden müssen. Radex koordiniert diese Fliesenarbeiten direkt im
          Rahmen des Wannentauschs. Einen Überblick über den Unterschied zwischen Teilrenovierung und vollständiger
          Badrenovierung finden Sie auf der Seite{' '}
          <Link to="/badsanierung/badezimmer-sanieren">Badrenovierung</Link>.
        </p>
        <h4 className={h4}>Welche Anschlüsse müssen beim Wannentausch geprüft werden?</h4>
        <p className={p}>
          Beim Austausch einer Badewanne prüft Radex die Kaltwasser- und Warmwasserzuleitungen sowie den
          Ablaufanschluss. Zuleitungen, die lange unter einer eingebauten Wanne lagen, können verkalkt oder
          korrodiert sein – das fällt erst beim Ausbau auf und wird von Radex offen kommuniziert, bevor Kosten
          entstehen.
        </p>
        <p className={p}>
          Der Ablaufanschluss muss zur neuen Wanne passen – Ablaufgarnitur und Überlaufstutzen sind
          wannenspezifisch und werden beim Wannentausch standardmäßig mitgewechselt. Wenn die Wannenarmatur
          ebenfalls erneuert wird, werden die Armaturenzuleitungen entsprechend angepasst und abgedichtet. Nach dem
          Einbau prüft Bernd Knoop als SHK Meister die Dichtigkeit aller Verbindungen, bevor der Wannenrand
          endgültig abgedichtet wird.
        </p>
        <h4 className={h4}>Emaillewanne oder Acrylwanne – was ist beim Badewanne erneuern besser?</h4>
        <p className={p}>
          Emaillewannen aus Stahl oder Gusseisen sind langlebig, kratzfest und haben eine hochwertige Anmutung. Der
          Nachteil: Sie sind erheblich schwerer als Acrylwannen, was den Einbau im Bestand aufwändiger macht.
          Acrylwannen sind leichter, wärmer anzufassen und in deutlich mehr Formvarianten erhältlich – dafür etwas
          empfindlicher gegenüber spitzen Gegenständen.
        </p>
        <p className={p}>
          Für einen Wannentausch im Bestandsbad ist eine Acrylwanne einbauen oft die praktischere Lösung – leichter
          zu transportieren und zu montieren, breite Formatauswahl, gutes Preis-Leistungs-Verhältnis. Welches
          Material besser zur konkreten Einbausituation und zu Ihren Anforderungen passt, besprechen wir in der
          Bestandsaufnahme mit Ihnen.
        </p>
        <h4 className={h4}>Was kostet es, eine Badewanne auszutauschen?</h4>
        <p className={p}>
          Die Kosten für einen Wannentausch setzen sich zusammen aus dem Materialpreis der neuen Wanne, dem
          Installationsaufwand und gegebenenfalls Fliesenarbeiten am Wannenrand. Der Wannenpreis ist sehr variabel
          – eine einfache Einbauwanne aus Acryl ist deutlich günstiger als ein Sonderformat oder eine freistehende
          Wanne.
        </p>
        <p className={p}>
          Der Installationsaufwand hängt davon ab, ob die Anschlüsse angepasst werden müssen und ob die Armatur
          mitgewechselt wird. Fliesenarbeiten rund um den Wannenrand können anfallen oder nicht – das ergibt sich
          aus dem Ausbaubefund. Radex gibt Ihnen nach einer kostenlosen Bestandsaufnahme ein konkretes Angebot.
          Einen Überblick zu Kostenfaktoren bei Badmaßnahmen finden Sie auf der Seite{' '}
          <Link to="/badsanierung-kosten">Badsanierung Kosten</Link>.
        </p>
        <h4 className={h4}>Wie lange dauert ein Wannentausch?</h4>
        <p className={p}>
          Ein reiner Wannentausch – Ausbau der alten Wanne, Einbau der neuen Wanne, Anschlüsse, Abdichtung – ist in
          der Regel in ein bis zwei Arbeitstagen abgeschlossen. Wenn Fliesenarbeiten am Wannenrand dazukommen, kann
          sich die Bauzeit um einen weiteren Tag verlängern, abhängig vom Umfang der Fliesenarbeiten und der
          Trockenzeit des Fliesenklebers vor der Verfugung.
        </p>
        <p className={p}>
          Das Bad ist nach Abschluss der Arbeiten sofort wieder voll nutzbar. Zu zeitlichen Aspekten bei größeren
          Badmaßnahmen lesen Sie mehr auf der Seite{' '}
          <Link to="/ablauf-badsanierung">Ablauf Badsanierung</Link>.
        </p>
      </>
    ),
  },
];
