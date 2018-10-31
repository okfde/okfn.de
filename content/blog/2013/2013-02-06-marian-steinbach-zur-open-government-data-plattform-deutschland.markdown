---
author: Marian Steinbach
date: 2013-02-06 15:28:38
image:
  src: /files/blog/2013/01/OGDP.png
  title: ''
layout: post
tags:
- Offene Daten
- OGDP
- Open Data
- Open Government
title: M. Steinbach zur Open Government Data Plattform Deutschland
type: post
---

  
**Marian Steinbach** hat am **2\. Community Workshop zur OGDP Deutschland** teilgenommen, der am 2. Februar bei Fraunhofer FOKUS stattfand. Hier ist sein Bericht.

In Kürze wird das Bundesinnenministerium eine Plattform eröffnen, mit der einige Menschen in diesem Land eine gewisse Erwartung verbinden. Eine Erwartung, dass Daten aus den Verwaltungen und Regierungen dieses Landes zugänglicher werden. Dass es einfach möglich sein wird, über eine einzige Plattform auf bedingungslos nutzbare Datenangebote von Bund, Ländern und Kommunen zuzugreifen. Dass Regierungen und Verwaltungen mit diesem Schritt ein gutes Stück transparenter werden und sich neue Möglichkeiten für Dienstleistungen und Innovation auftun.

Diese Erwartung hat in den letzten Wochen einige Dämpfer bekommen. Im Netz wird schon an verschiedener Stelle darüber geschrieben (z. B. von Sebastian Haselbeck auf [opengovgermany.com](http://opengovgermany.com/2013/02/04/german-government-screws-up-open-data/), von Lorenz Matzat auf [Netzpolitik.org](https://netzpolitik.org/2013/konsequent-kein-open-data-portal-im-bund/) und von Jan Brennenstuhl auf [OpenEverything](http://www.openeverything.eu/unklarheiten-govdata-portal-deutschland/)) und es wird hoffentlich weiter darüber geschrieben werden. Wenn es nach mir geht, gerne auch über die unsichtbaren Grenzen des Netzes hinaus. Gerade weil mich das Thema besonders betrifft, möchte ich gerne ausführlich dazu Stellung nehmen und ein paar Argumente und Hintergründe beisteuern und zur Diskussion stellen. Auch deswegen, weil ich noch nicht recht weiß, wie ich die Situation einordnen soll.

Am vergangenen Freitag, dem 1. Februar, fand der zweite (und vor dem Launch letzte) [Community-Workshop](http://open-data.fokus.fraunhofer.de/?page_id=1872) zur Plattform, die nun GovData heißen wird, bei Fraunhofer FOKUS in Berlin statt. Mit geschätzten 30 anderen Vertretern war ich, auf Einladung der [Open Knowledge Foundation](/), dabei, um mir einen eigenen Eindruck vom Stand der Dinge zu machen. Das war nicht mein erster Berührungspunkt mit dem, was die Projektverantwortlichen **Beteiligung der Zivilgesellschaft** nennen. Schon am 1. und am 20. März 2012 habe ich als Gast an Treffen der "Unterarbeitsgruppe Technik" bei Fraunhofer FOKUS teilgenommen, damals auf Einladung des [Open Data Network](http://opendata-network.org/). Dort präsentierten Fraunhofer FOKUS, Lorenz-von-Stein-Institut und Partnerschaften Deutschland Teile der Inhalte, die im Sommer 2012 als Studie mit dem Titel [Open Government Data Deutschland](http://www.bmi.bund.de/SharedDocs/Pressemitteilungen/DE/2012/mitMarginalspalte/07/opengovernment.html) veröffentlicht werden würden.

Alles in allem waren das zwei durchaus interessante Veranstaltungen. Irgendwie seltsame Einblicke in eine ferne Welt, in der Open Data etwas sehr kompliziertes sein muss. Sicherlich haben diese Treffen bei mir eins bewirkt: Sie haben **Empathie für Verwaltungsmitarbeiter** geweckt. Ob das etwas Gutes ist, weiß ich nicht. Wie Tony Bowden von [mySociety](http://www.mysociety.org/) es ausdrückt:

> "Never ever work with the administration! It's going to melt your brain!

Am [ersten Community-Workshop](http://open-data.fokus.fraunhofer.de/?page_id=863) (am 7. Dezember 2012), bei dem der Prototyp der Datenplattform gezeigt wurde, konnte ich leider nicht teilnehmen. Für mich war Mitte Dezember die Veröffentlichung des [Vattenfall-Datenportals](http://www.netzdaten-berlin.de/), das die gleiche [Software-Grundlage](https://github.com/fraunhoferfokus/opendata-platform) besitzt wie die Datenplattform von Bund und Ländern, ein erster Einblick in das, was kommen würde. Das erste, was mir daran auffiel war, dass im Datenkatalog die Links zu den Suchergebniseinträgen keine echten Suchergebnisse sind, sondern JavaScript-Aufrufe. Möchte man einen solchen Pseudo Link in einem neuen Browser-Tab öffnen, öffnet sich in dem neuen Tab nicht die erwartete Treffer-Seite, sondern wieder die Suchergebnis-Liste. Damit ist ein häufig verwendetes Nutzungsmuster zum Durcharbeiten von Linklisten, nämlich das Öffnen von Treffern in neuen Tabs, dort nicht anwendbar. Nutzer werden auf das **Anti-Pattern** namens [Pogosticking](http://www.uie.com/articles/galleries/) zurück geworfen. Das bedeutet: Man ist gezwungen, zum Ansehen des Treffers die Suchergebnisliste zu verlassen, um danach über die Back-Funktion wieder dorthin zurück zu kehren, woher man gekommen ist. Und das immer wieder, bis man sicher ist, dass man den richtigen Treffer vor sich hat.

Dieses Problem alleine wäre für mich Grund genug, die Daten des Katalogs zu exportieren und mir eine eigene Suche dafür zu bauen, wenn ich sie brauche.

Am 9. Dezember habe ich direkt über Fraunhofer FOKUS versucht, **Zugang zu dem Prototypen** der Bund-Länder-Plattform zu bekommen. Die Antwort darauf war, dass dies nur im Rahmen des Community-Workshops am 7. Dezember möglich gewesen wäre, aber man sich erkundigen würde, ob erneut Zugang hergestellt werden kann. Nachdem ich das Problem auf der Vattenfall-Plattform bemerkt hatte, habe ich nachgefragt, ob sich daraus etwas ergeben hat und außerdem das Problem geschildert sowie meine Befürchtung geäußert, dass das Problem auch bei der Bund-Länder-Plattform bestehen könnte. Ich erwähne das hier nur deshalb, weil ich beim zweiten Workshop von einem Fraunhofer-Mitarbeiter gefragt wurde, warum ich das Problem denn nicht schon früher gemeldet hätte.

Wie sich beim zweiten Community-Workshop heraus stellte, war dieses Problem auch bei der GovData-Plattform vorhanden. Und nicht nur das, sondern auch viele andere. Unter anderem verhinderte das Session-Management, dass man in zwei Browserfenstern oder -tabs verschiedene Suchergebnisse navigierte - stattdessen beeinflussten die Klicks in dem einen Fenster, was im anderen Fenster beim nächsten Klick angezeigt würde. Und ganz generell ließ die Gestaltung (und ich spreche hier nicht über** Geschmacksfragen**, sondern über grundlegendes **Informationsdesign**) einiges an Sorgfalt vermissen. Der Gesamteindruck, was dies betrifft, zeigte deutlichen Verbesserungsbedarf.

Der (zweite) Community-Workshop bot Zeit von 15 bis 17 Uhr, über Usability zu sprechen. Diese **zwei Stunden reichten bei weitem nicht aus**, um auch nur die Suche im Datenkatalog im Detail zu evaluieren und alle gefundenen Probleme anzusprechen. Von den weiter verborgenen Anwendungsfällen wie der Registrierung als neuer Nutzer,  
dem Einstellen neuer Datenangebote, dem Bewerten und Kommentieren und ähnlichem ganz zu schweigen.

Getrieben von der Befürchtung, dass jemand irgendwann, irgendwo fragen könnte "Warum habt Ihr das denn nicht damals beim Workshop gesagt?", verschafften wir Teilnehmer uns recht deutlich Gehör und brachten zum Ausdruck, dass der vorliegende Zustand bei weitem nicht unseren Erwartungen gerecht wurde.

Nun könnte man meinen, dass Usability und User Experience ja **nur Teilaspekte** des ganzen Projekts seien. Ich sehe das so: Für eine Plattform, deren Zweck vor allem darin besteht, Datenangebote zugänglich zu machen, die bereits an anderer Stelle öffentlich zur Verfügung gestellt werden, sind User Experience, Usability und die Qualität des Zugangs sehr zentrale Themen. Wenn ich als Nutzer besser dran bin, indem ich nach den Daten google, ist  
zumindest ein wesentliches Teilziel des Angebots nicht erreicht worden.

Dieser Teilaspekt wiegt um so schwerer, je weniger die Plattform andere Erwartung erfüllt. Beispielsweise die, dass durch die Plattform **wichtige, bisher nicht veröffentlichte Datensätze** zugänglich gemacht werden. Der Datenkatalog zum Stand des zweiten Community-Workshops enthielt genau ein Angebot von einem Bundesministerium (Absender-Angabe: "UBA Adressen, BMELV - Bundesministerium für Ernährung, Landwirtschaft und Verbraucherschutz"). Der damit verknüpfte Datensatz namens "Grüner Bildungskatalog" ist als "other-closed" lizensiert und angeblich ein  
WMS (Web Mapping Service). Tatsächlich zeigt die URL aber nicht auf einen WMS, sondern auf eine gewöhnliche [Webseite](http://www.bildungsserveragrar.de/weiterbildung/gruener-bildungskatalog-gbk/). Was Licht auf einen weiteren, aus meiner Sicht entscheidenden Qualitätsaspekt der Plattform wirft, nämlich die Datenqualität.

Zum **Umfang des Datenkatalogs** sagen BMI und Fraunhofer FOKUS, dass dieser gerade noch deutlich ausgebaut wird. Insofern lässt sich aktuell nicht vorhersagen, ob zum Launch der Plattform nicht doch der eine oder andere wesentliche Datensatz (hallo [Bundesfinanzmininsterium](https://fragdenstaat.de/suche/?q=bundesfinanzministerium), [Bildungs- und Forschungsministerium](https://fragdenstaat.de/suche/%20q=Bundesministerium+f%C3%BCr+Bildung+und+Forschung), [Wirtschaftsministerium](https://fragdenstaat.de/suche/%20q=Bundesministerium+f%C3%BCr+Wirtschaft+und+Technologie) und ja, auch [Bundesinnenministerium](https://fragdenstaat.de/suche/?q=bundesinnenministerium)) enthalten sein wird. Darauf wetten möchte ich aber nicht.

Doch zur angesprochenen **Qualität der bereits vorhandenen Metadaten**. Die GovData-Plattform steht vor der Herausforderung, Metadaten aus verschiedenen Quellen zu harmonisieren und in einem Katalog einheitlich abzulegen. Unklar ist bislang, wieviel Wert bereits auf die Harmonisierung gelegt wird. Mein Eindruck vom Eingabeformular für Metadaten ist, dass es dort an Hilfestellungen und Beispielen fehlt, um bei der manuellen Eingabe einen einheitlichen  
Standard zumindest zu fördern.

Die aktuellen Metadaten sind wohl größtenteils **automatisiert importiert** worden -- mit gemischten Ergebnissen. Da heißt dann ein Datensatz "_Gemeindegrenze_", ein anderer "_Bestände von Unternehmen (ab 250.000 EUR Umsatz): Deutschland, Jahre, Art der Bestände,Zeitpunkt der Bestände, Wirtschaftsabschnitte, Größenklassen (Umsatz/tätige Pers.)_". Ein weiterer Datensatz heißt schlicht "Umsatz und Beschäftigung 2011", andere Metadaten dieses Datensatzes legen jedoch nahe, dass er eigentlich nur Umsatz und Beschäftigung bestimmter Branchen, nämlich Handel, Kraftfahrzeug- und Gastgewerbe, umfasst. Zur Beschreibung des Datenbereitstellers gibt es zwei Felder: Das Feld 'author' und das Feld 'maintainer'. Mal wird das eine Feld verwendet, mal das andere, mal beide und mal keins  
von beidem. In beiden stehen Namen von Personen, Behörden und E-Mail-Adressen bunt durcheinander.

Gut, dass die Plattform eine **Bewertungs- und Kommentarfunktion** besitzt. Hier können Nutzer dann in den Kommentaren darauf drängen, dass ungenaue oder falsche Metadaten korrigiert werden. Und sie können darauf hoffen, dass die Bereitsteller der Daten davon erfahren. Denn, soweit ich die Erläuterungen verstanden habe, gibt es keine automatische Benachrichtigung für die Bereitsteller, wenn zu ihren Datensätzen neue Kommentare eingegangen sind. Es gibt auch keinen RSS-Feed oder ähnliches. Und die Kommentar- und Bewertungsdaten sind nicht Teil der Katalog-Metadaten, die über eine API abgerufen werden können. Man muss kein Schwarzmaler sein, um vorherzusagen, dass die Datennutzer im Kommentarbereich vor allem unter ihresgleichen bleiben werden.

Die **API des Katalogs**, gerade erwähnt, ist aus meiner Sicht die wichtigste verbleibende Funktion des Portals. Denn sie erlaubt den automatischen Lesezugriff auf alle Metadaten. Beim letzten Community-Workshop war sie nur für Kenner der verwendeten Datenkatalog-Software ([CKAN](http://ckan.org/)) zu finden. Auf der Plattform fehlte jeglicher Hinweis darauf. Anders als beim Beispiel [netzdaten-berlin.de](http://netzdaten-berlin.de/ckan/) war die CKAN-API von GovData beim Workshop erreichbar und auf Nachfrage wurde explizit bestätigt, dass dies auch so bleiben soll. Nur auf eine Lizenz für die darüber erhältlichen Daten hat man sich noch nicht festgelegt, glaubt aber, dass es eine offene Attribution-LIzenz werden wird.

Wenig gesagt und geschrieben wurde bislang zu den weiteren Bestandteilen des Portals jenseits des Datenkatalogs. Und weil auch für mich diese Bereiche von nachrangigem Interesse sind, seien sie hier nur kurz erwähnt: Es gibt im Katalog neben Datensätzen auch noch **Apps** und **Dokumente**. Apps sind eben Anwendungen, sei es mobil, im Web oder sonstwelcher Art, die mit den Daten auf der Plattform zu tun haben sollen. Perspektivisch ist auch  
denkbar, dass die Verbindung zwischen Apps und Datensätzen auf der Plattform angezeigt wird, jedoch ist dies noch nicht umgesetzt. Und Dokumente sind, im Großen und Ganzen, PDFs. Warum es diese hier gibt und nach welchen Kriterien diese ausgewählt werden, bleibt vorerst offen. Im Gegensatz zu den Datensätzen, die mit großer Mehrheit offen lizensiert sind, tragen die Dokumente größtenteils den Lizenzvermerk "other-closed".

Das soll reichen, um zu erklären, warum von meinen Erwartungen an den Launch-Termin nicht mehr all zu viel übrig geblieben ist. **Die Leuchttürme leuchten anderswo**. Wenn von dieser Plattform ein Impuls für Open Government Data ausgeht, wird das eine Überraschung sein.

**Was macht man damit**? Den Kopf in den Sand stecken? Oder Flames und Rants schreiben? Mich beschäftigt die Frage, auf welcher Ebene das so schief gelaufen ist. Und ob die Community hier (im Prozess) etwas hätte anders oder besser machen können.

Vorläufig komme ich mit meinen Überlegungen zu dem Ergebnis, dass der Prozess vom BMI und Fraunhofer FOKUS **nicht vernünftig aufgesetzt** wurde. Wenn innerhalb von Fraunhofer FOKUS, das für die Entwicklung der Plattform verantwortlich ist, nicht genug Kompetenz/Zeit/Sorgfalt aufgebracht werden kann, dann hätte man sich stärker für freiwilligen Input aus der Community öffnen können. Natürlich setzt das scheinbar voraus, dass man einen Kompetenzmangel vorzeitig erkennt. Tatsächlich könnte es auch bedeuten, dass man die eigenen Kompetenzen grundsätzlich in Frage stellt. Schließlich sind wir alle nur Menschen -- ob im BMI, bei FOKUS oder sonstwo. Wenn man die Grundannahme stellt, dass es irgendwo draußen Menschen mit zusätzlichem brauchbaren Input gibt ("_given enough eyeballs, all bugs are shallow_"), muss man Wege finden, wie man diese stärker einbindet. Da reichen zwei Community-Workshops wohl bei weitem nicht aus.

Aber vielleicht sind wir nur zu ungeduldig. Vielleicht ist das, was wir gesehen haben, die **Version 0.0.1 pre-alpha**. Und was vor der Cebit gelauncht wird, wird die 0.0.1 rc1 sein. Möglich, dass wir in den nächsten zwei Jahren im Zweiwochenrhythmus Verbesserungen und neue Funktionen erleben werden. Dass wir im GovData-Entwickleblog lesen und über die Mailingliste Bugreports einreichen, Vorschläge diskutieren und Pull Requests auf Github senden  
werden. Vielleicht müssen wir die "Fehlerkultur", die andernorts beschworen wird, wenn es um Open Data geht, hier bei diesem Projekt vorleben, indem wir den Verantwortlichen zeigen, dass wir trotz eines enttäuschenden Zwischenstands weiter bereit sind, das Projekt zu unterstützen. Tatsächlich bin ich zu neugierig, zu sehen wie es weiter geht, als dass ich einen Aufruf, das ganze Ding zu stoppen, unterstützen könnte.

Nachdem der Community-Workshop zu Ende war, kamen [Stefan Wehrmeyer](http://stefanwehrmeyer.com/) (z. B. verantwortlich für Frag den Staat), [Dominik Moritz](http://www.domoritz.de/) (CKAN Entwickler) und ich nicht umhin, uns Gedanken über die anstehenden **Aufgaben für die Open Data Community** zu machen: Die Metadaten des OpenGov-Katalogs (abzüglich Apps, Dokumente und allem, was nicht offen lizensiert ist) nehmen und ein anständiges Angebot für Open-Data-Nutzer machen. Mit automatischem Qualitäts-Auditing, Änderungsverfolgung an Metadaten und Daten, Kommentar-Benachrichtigung und so weiter und so weiter.

Das hätte natürlich überhaupt keinen Einfluss darauf, **welche Daten** überhaupt veröffentlicht werden. Darüber wir das nächste mal wieder am 22. September abgestimmt, unter grundgesetzlich verbriefter BürgerInnenbeteiligung.

 

![Marian Steinbach](/files/blog/2013/02/marian_400x400.jpg)  
**Marian Steinbach** ist Interaction Designer und Open-Data-Aktivist. Er hat die Plattform [Offenes Köln](http://offeneskoeln.de/) ins Leben gerufen, die einen offenen Zugang zu Inhalten der Kölner Lokalpolitik bietet.

 

 