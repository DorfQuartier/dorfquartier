import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import dorfquartier_logo from './Bilder/dorfquartier_logo.png';
import dorfquartier_amenity from './Bilder/dorfquartier_amenity.png'
import dorfquartier_bdetail from './Bilder/dorfquartier_bdetail.jpg';
import dorfquartier_kdetail from './Bilder/dorfquartier_kdetail.jpg';
import dorfquartier_zdetail from './Bilder/dorfquartier_zdetail.jpg';
import dorfquartier_ball from './Bilder/dorfquartier_ball.jpg';
import dorfquartier_bad1 from './Bilder/dorfquartier_bad1.jpg';
import dorfquartier_bad3 from './Bilder/dorfquartier_bad3.jpg';
import dorfquartier_bad4 from './Bilder/dorfquartier_bad4.jpg';
import dorfquartier_bett1 from './Bilder/dorfquartier_bett1.jpg';
import dorfquartier_bett2 from './Bilder/dorfquartier_bett2.jpg';
import dorfquartier_bett3 from './Bilder/dorfquartier_bett3.jpg';
import dorfquartier_living from './Bilder/dorfquartier_living.jpg';
import dorfquartier_kitchen2 from './Bilder/dorfquartier_kitchen2.jpg';
import dorfquartier_kitchen3 from './Bilder/dorfquartier_kitchen3.jpg';
import dorfquartier_flur from './Bilder/dorfquartier_flur.jpg';
import dorfquartier_book from './Bilder/dorfquartier_book.jpg';


function refreshPage() {
    window.location.reload(false);
  }

class NavBar extends React.Component {
  render() {
    return (
      <div class="container" id="NavBar">
        <div class="row">
          <div class="col">
            <a href="" onClick={refreshPage}><img src={dorfquartier_logo} width="100" height="100" /><br />
              Dorfquartier
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="#Bilderundmehr">Bilder & Mehr</a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="#Preise">Preise & Ausstattung</a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="#Kontakt">Kontakt & Standort</a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="#Entdeckungsreise">Entdeckungsreise</a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="#Datenschutz">Datenschutz & Impressum</a>
          </div>
        </div>
      </div>

    );
  }
}

class Site extends React.Component {

  /* For heading to change at sections
     listenScrollEvent = e => {
    if (window.scrollY > 400) {
      const test = "Test1";
    } else {
      const test = "Test2";
    }
  }

  componentDidMount() {
  window.addEventListener('scroll', this.listenScrollEvent)
  } */

  render() {
    return (
      <div class="container">
        <div class="row" >
        <div class="col" id="follower">
          <NavBar />
        </div>
        </div>
        <div class="row">
          <div class="col" id="content">
            <div id="ErsteEindruecke" className="section">
            <h1>Willkommen</h1>
            <p>Erste Eindrücke</p>
            <br />
            <div class="row">
              <div class="col">
                <img src={dorfquartier_kdetail} width="99%" height="99%" />
              </div>
              <div class="col">
                <img src={dorfquartier_bdetail} width="99%" height="99%" />
              </div>
              <div class="col">
                <img src={dorfquartier_zdetail} width="99%" height="99%" />
              </div>
            </div>
            <br />
            <p>Ihnen gefällt es? Noch mehr gibt es unter <a href="#Bilderundmehr">Bilder &amp; mehr.</a></p>
            </div>
            <hr />
            <div id="Bilderundmehr" className="section">
              <h1>Bilder &amp; mehr</h1>
              <br />
              <div class="row">
                <div class="col">
                  <img src={dorfquartier_bett1} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_bett2} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_bett3} width="99%" height="99%" />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <img src={dorfquartier_bad1} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_ball} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_bad3} width="99%" height="99%" />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <img src={dorfquartier_bad4} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_kitchen2} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_kitchen3} width="99%" height="99%" />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <img src={dorfquartier_book} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_living} width="99%" height="99%" />
                </div>
                <div class="col">
                  <img src={dorfquartier_flur} width="99%" height="99%" />
                </div>
              </div>
              <br />
              <p>
              Sie sind mit dem Rad  durch das Münsterland unterwegs und freuen sich auf eine Übernachtung und alles was Ihren Urlaub angenehm macht? Sie suchen für Ihren Aktivurlaub mit Naturerlebnissen per Rad und Fuß sowie Besichtigungsprogramm eine gemütliche  Basis mit Balkon? Oder Sie planen einen Aufenthalt in Rheine und Umgebung, um eine sportliche Veranstaltung oder kulturelles Event zu genießen? Sie suchen für Ihre Familienfeier eine freundliche Übernachtungsmöglichkeit für Ihre Gäste? Sie oder Ihre Mitarbeiter sind beruflich für eine Zeit im nordwestlichen Münsterland beschäftigt und freuen sich auf Ihren Feierabend in angenehmer Atmosphäre? Dann sind Sie hier richtig!&nbsp;
              </p>
              <p>
              Das gemütliche ca. 70 qm große DorfQuartier befindet sich im Obergeschoss unseres EFH mit eigenem Eingang  und Balkon im Dorfkern von Hauenhorst. Es verfügt über zwei separate Schlafzimmer, einer Wohn-Essküche, Wohnzimmer mit Schlafcouch sowie Bad mit Dusche/WC. Großzügige Parkmöglichkeiten befinden sich direkt vor dem Haus. Eine Bäckerei ist nebenan und bis zum kleinen Supermarkt und einer Apotheke sind es drei Minuten Fußweg. Ob Radfahren, Wandern oder Shopping, die Emsstadt Rheine und Umgebung haben Einiges zu bieten. Weitere Anregungen und Ideen für Ihren Aufenthalt finden Sie unter  "<a href="#Entdeckungsreise">Entdeckungsreise</a>“.
              </p>
              <p>
              Wir freuen uns auf Ihren Besuch!
              </p>
            </div>
            <hr />
            <div id="Preise" className="section">
              <h1>Preise &amp; Ausstattung</h1>
              <ul>
                <li>€ 70,00 für 1 u. 2 Pers./Nacht</li>
                <li>€ 80,00 für 3 u. 4 Pers./Nacht</li>
                <li>auf Anfrage für bis zu 6 Personen, Zuschlag € 10,00 p.P./Nacht </li>
                <li>Mindestaufenthalt 2 Nächte</li>
                <li>Langzeitvermietung auf Anfrage</li>
              </ul>
              <p>alle Preise inkl. Handtücher, Bettwäsche und Endreinigung </p>
              <img src={dorfquartier_amenity} width="45%" height="45%" />
            </div>
            <hr />
            <div id="Kontakt" className="section">
              <h1>Kontakt &amp; Standort</h1>
              <p><a href="mailto:dorfquartier@googlemail.com">dorfquartier@googlemail.com</a>
              <br />
              +49 5971 8 99 95 31
              <br />
              <br />
              </p>
              <figure>
              <iframe width="600" height="450" src="https://www.google.com/maps/embed/v1/place?q=Mesumer%20Stra%C3%9Fe%2020%2C%20Rheine%2C%20Deutschland&amp;key=AIzaSyBKUbIP-4_MrR1agKEJ1cNbm7wUtDeKMck" allowfullscreen=""></iframe>
              </figure>
            </div>
            <hr />
            <div id="Entdeckungsreise" className="section">
              <h1>Entdeckungsreise</h1>
              <p>
              Es gibt es viele Möglichkeiten, die Umgebung des DorfQuartiers zu entdecken.
              Ob auf dem Fahrrad durch wunderschöne Parklandschaften radeln, per Pedes im Teutoburger Wald die Hermannshöhen erklimmen und die Natur genießen.
              Oder bei einem Museumsbesuch in Geschichte, Kunst oder Kultur eintauchen.
              </p>
              <h5>Radtouren</h5>
              <ul>
                <li>100-Schlösser-Route</li>
                <li> EmsRadweg</li>
                <li>Themenrouten rund um Rheine</li>
                <li>Dortmund-Ems-Kanal-Route</li>
              </ul>
              <h5>Ausflugsziele mit Kindern</h5>
              <ul>
                <li>Naturzoo Rheine </li>
                <li>Sommerrodelbahn und Märchenwald Ibbenbüren </li>
                <li>Kletterwald Ibbenbüren</li>
                <li>Freilichtbühne Reckenfeld</li>
                <li>Go-Kart Bahn Rheine</li>
              </ul>
              <h5>Kunst und Kultur</h5>
              <ul>
                <li>Kloster/Schloss Bentlage  Rheine</li>
                <li>Falkenhof Museum Rheine</li>
                <li>Glasmuseum Lette - Alter Hof Herding</li>
                <li>Kreislehrgarten Burg Steinfurt</li>
                <li>LWL Museum Münster</li>
                <li>Pablo Picasso Museum Münster</li>
              </ul>
              <p>
              Sie haben noch Fragen? Sprechen Sie uns gerne an.
              <br />
              <a href="#Kontakt">Kontakt</a>
              </p>
            </div>
            <hr />
            <div id="Datenschutz" className="section">
              <h1>Datenschutz &amp; Impressum</h1>
              <h5>Datenschutzerklärung</h5>
              <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
              <p>Veronika &amp; Heiner Zimmermann</p>
              <h5>Ihre Betroffenenrechte</h5>
              <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
              <ul>
                <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li><li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
              </ul>
              <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
              <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
              <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:&nbsp;<a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noreferrer noopener">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
              <h5>Cookies</h5>
              <h5>Art und Zweck der Verarbeitung:</h5>
              <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen.</p>
              <p>Hierdurch erhalten wir bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser und Betriebssystem.</p>
              <p>Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.</p>
              <p>In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.</p>
              <p>Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.</p>
              <h5>Speicherdauer und eingesetzte Cookies:</h5>
              <p>Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:</p>
              <p>Cookies zur Erfassung und Speicherung möglicher Buchungstermine.</p>
              <p>Soweit diese Cookies (auch) personenbezogene Daten betreffen können, informieren wir Sie darüber in den folgenden Abschnitten.</p>
              <p>Sie können über Ihre Browsereinstellungen einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:</p>
              <ul>
                <li>Mozilla Firefox:&nbsp;<a href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen" target="_blank" rel="noreferrer noopener">https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</a></li>
                <li>Internet Explorer:&nbsp;<a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noreferrer noopener">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                <li>Google Chrome:&nbsp;<a href="https://support.google.com/accounts/answer/61416?hl=de" target="_blank" rel="noreferrer noopener">https://support.google.com/accounts/answer/61416?hl=de</a></li>
                <li>Opera:&nbsp;<a href="http://www.opera.com/de/help" target="_blank" rel="noreferrer noopener">http://www.opera.com/de/help</a></li>
                <li>Safari:&nbsp;<a href="https://support.apple.com/kb/PH17191?locale=de_DE&amp;viewlocale=de_DE" target="_blank" rel="noreferrer noopener">https://support.apple.com/kb/PH17191?locale=de_DE&amp;viewlocale=de_DE</a></li>
                </ul>
                <h5>Kontaktformular</h5>
                <h5>Art und Zweck der Verarbeitung:</h5>
                <p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>
                <h5>Rechtsgrundlage:</h5>
                <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
                <p>Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
                <p>Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>
                <h5>Empfänger:</h5>
                <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
                <h5>Speicherdauer:</h5>
                <p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>
                <p>Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.</p>
                <h5>Bereitstellung vorgeschrieben oder erforderlich:</h5>
                <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p>
                <h5>Verwendung von Google Maps</h5>
                <h5>Art und Zweck der Verarbeitung:</h5>
                <p>Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google“) betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.</p>
                <p>Nähere Informationen über die Datenverarbeitung durch Google können Sie&nbsp;<a href="http://www.google.com/privacypolicy.html">den Google-Datenschutzhinweisen</a>&nbsp;entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.</p>
                <p>Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten<a href="http://www.dataliberation.org/">&nbsp;finden Sie hier</a>.</p>
                <h5>Rechtsgrundlage:</h5>
                <p>Rechtsgrundlage für die Einbindung von Google Maps und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
                <h5>Empfänger:</h5>
                <p>Durch den Besuch der Webseite erhält Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet.</p>
                <p>Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons bei Google ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter Gestaltung seiner Webseite. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Webseite zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten müssen.</p>
                <h5>Speicherdauer:</h5>
                <p>Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Maps.</p>
                <h5>Drittlandtransfer:</h5>
                <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen&nbsp;<a href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a>.</p>
                <h5>Widerruf der Einwilligung:</h5>
                <p>Wenn Sie nicht möchten, dass Google über unseren Internetauftritt Daten über Sie erhebt, verarbeitet oder nutzt, können Sie in Ihrem Browsereinstellungen JavaScript deaktivieren. In diesem Fall können Sie unsere Webseite jedoch nicht oder nur eingeschränkt nutzen.</p>
                <h5>Bereitstellung vorgeschrieben oder erforderlich:</h5>
                <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.</p>
                <h5>SSL-Verschlüsselung</h5>
                <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
                <h5>Änderung unserer Datenschutzbestimmungen</h5>
                <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
                <h5>Fragen an den Datenschutzbeauftragten</h5>
                <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
                <p><em>Die Datenschutzerklärung wurde mit dem&nbsp;</em><em><a href="https://www.activemind.de/datenschutz/datenschutzhinweis-generator/" target="_blank" rel="noreferrer noopener">Datenschutzerklärungs-Generator der activeMind AG erstellt</a>(Version 2018-09-24).</em></p>
                <h5>Impressum</h5>
                <p>DorfQuartier GbR<br />Veronika u. Heinrich Zimmermann <br />Mesumer Str. 20 <br />48432 Rheine<br />+49 59 71 8 99 95 31 </p>
                <hr />
                <a href="#follower">Zurück zum Anfang</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
