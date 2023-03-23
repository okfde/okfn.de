---
authors:
- Nora Titz
date: 2023-01-26
image: 
  src: 
tags:
- codeforgermany
- open-data
type: post
layout: post
published: false
featured: yellow
title: "Selbstgebaute Sensoren - ein mächtiges Tool"
---

## Selbstgebaute Sensoren - ein mächtiges Tool

Silvester ist immer ein Peak der Feinstaubbelastung in Deutschland. Auf Sensor.Community ist das in Echtzeit zu beobachten. Hier werden die Messungen von 14.000 Sensoren in 71 Ländern  visualisiert. 

## Sensor.Community made in Stuttgart 2014

Das deutschlandweite Netzwerk Code for Germany gründete sich 2014 mit OK Labs, unter anderem in Stuttgart und begann zunächst mit Workshops zu den Fragen:  Welche lokalen Daten gibt es? und Was können wir mit ihnen machen? In Stuttgart, der Stadt, die den europäischen Grenzwert für Feinstaubbelastung  dutzende Male im Jahr überschreitet, war die Antwort schnell klar: Daten zur Luftqualität sollten tagesaktuell visualisiert werden, um die Bevölkerung zu sensibilisieren. Eine E-Mail an die Verwaltung war schnell geschrieben, die Antwort ernüchternd. Ein 6 Monate altes PDF konnte schwer die Grundlage einer automatisierten Echtzeitanwendung werden.  
Aber die OK Labs wurden nicht dazu gegründet, sich auf die deutsche Verwaltung zu verlassen, sondern um zu zeigen, was möglich ist, wenn die entsprechenden Kompetenzen in der Zivilgesellschaft zusammenkommen. In Stuttgart werden also erstmal die Referenzrahmen von Luftqualitätsmessungen recherchiert, verschiedene Sensoren Bauteile getestet und eine Strategie entwickelt. Diese lautete 2015: Wir starten eine Crowdfunding Kampagne, um in Stuttgart ein Netz von 300 Sensoren auszurollen!   
Lange wurde die Gruppe belächelt, denn Civic Tech Initiativen sind jahrelang an ähnlichen Vorhaben gescheitert, aber diese ist erfolgreich. Die Crowdfunding-Kampagne bringt genug Geld ein, um 300 Sensoren zu kaufen, monatliche Sensorbau-Workshops sind gut besucht und die lokale Presse ist begeistert. 

## Wie funktioniert das mit den Sensoren? 

Die Sensor Bauteile kosten ca. 55 Euro und bestehen aus einem günstigen Partikelsensor, etwa so groß wie eine Zigarettenschachtel, der mit einem Laser PM2.5 Partikel in der Luft misst und den PM10 Anteil daraus ableitet, dabei bezeichnet die Zahl die unterschiedliche Größe der Partikel. (PM10>PM2.5) Verbunden wird er mit einem WLAN Modul, einem Arduino-Board für Software und einem Feuchtigkeitsmesser, der hilft, Fehler in der Messung zu reduzieren. 
Interessierte Menschen  können sich die Bauteile der Do-it-Yourself-Sensoren über Verlinkungen auf der Sensor.Community-Plattform bestellen. Eine  in 24 Sprachen zur Verfügung stehende Anleitung hilft beim Zusammenbauen und in Betrieb nehmen. 

## Wie aus einer Handvoll Menschen eine internationale Community wird

“Wir sind im Grunde eine Handvoll Leute, die die E-Mail-Adressen der anderen kennen und vielleicht eine Woche weniger Urlaub haben als andere.'', so beschreibt Lukas bei einer Hacker-Veranstaltung 2022  in den Niederlanden das Stuttgarter Sensor KernTeam, welches die Website und Vernetzungsstrukturen für inzwischen 1000ende ehrenamtlich Aktive betreibt. 

Mit der Community musste auch die Plattform wachsen. Während die Website zu Beginn deutschsprachig war und viele der Prozesse, wie z.B. die Registrierung neuer Sensoren, manuell erfolgten, reevaluierte das Stuttgarter Grüppchen 2016  nach tausenden Registrierungsanfragen aus diversen Ländern, ihre Anwendung von Grund auf.  

“Die Frage war, was wir hier eigentlich machen und wie können wir es besser machen'', erzählt Lukas,  “Die Antwort war, dass es hauptsächlich darum geht, Gruppen und Projekte miteinander zu vernetzen. Im Prozess haben sich 3 Stufen des internationalen Skalierungs Prozesses herauskristallisiert."

Stufe 1 ist Accessibility, d.h. das Zugänglich machen der Inhalte. Mit Hilfe einiger engagierter Menschen und einer breiten GitHub Community ist die Anleitung zum Bauen und in Betrieb nehmen von Sensoren inzwischen in 24 Sprachen übersetzt worden. 

Stufe 2 ist Kommunikation und kulturelle Anpassung. Diese Personen sind in den lokalen Gruppen in unterschiedlichen Ländern und werden internationale Heroes/Helden genannt. Menschen, die Sensor.Community entdecken und für den eigenen nationalen Kontext verständlich machen. 

Stufe 3 ist die lokale Ebene. Communities auf lokaler Ebene reagieren mit Sensoren auf spezifische Gegebenheiten, die Menschen mobilisieren. Manche möchten z.B. überprüfen, ob z.B. die Fabrik, der Hafen, der Verkehr im Ort, in der Stadt, in der Region die Luftqualität beeinträchtigt. 

2016 kommt z.B. auch eine bulgarische Gruppe auf die Stuttgarter zu und rollt mit Hilfe der mitlerweile gesammelten Erfahrungen in Stuttgart in weniger als acht Monaten ein Netz von 800 Sensoren in Bulgarien aus. Die Anwendung ist in dem Land mit Luftqualitäts Problemen und einem weit verbreiteten Misstrauen  in Datenveröffentlichung  der Regierung auch in das Onlineportal einer Tageszeitung eingebunden. Ähnlich läuft es mit Communities in den Niederlanden, Belgien und Polen. 

Aus der Zusammenarbeit vieler Communities entsteht so nicht nur ein großer Datenpool, sondern auch ein breites Netzwerk von Engagierten, die das Projekt weiterentwickeln. Menschen aus Polen schreiben eine Applikation, die das Treiber-Setup für Linux erleichtert, in Dublin wird eine batteriebetriebene Sensor Version entwickelt und Code for Africa fügt dem Sensor Design eine GSM(Global System for Mobile Communication)-Einheit hinzu.  Mittlerweile betreibt Sensor.Community auch ein eigenes Lärmmessnetzwerk und stellt Messergebnisse von NO2-Diffusion Tubes dar. 

## Was macht man jetzt mit so viel Daten? 

Die Daten aller Sensoren werden alle 2,5 Minuten an 13 selbst betriebene virtuelle Server gesendet, die Daten werden archiviert und über eine API zugänglich gemacht. Unter Maps.Sensor.Community findet sich eine automatisch aktualisierte Visualisierung der aktuellen Messwerte aus dem gesamten Messnetzwerk. Diese Karte ist interaktiv und hat mehrere Darstellungsebenen.   All das ist nur durch viel Engagement und Zusammenarbeit möglich geworden . 
“Immer wenn wir ein Problem hatten, kannte jemand jemanden, der jemanden kennt, der beim nächsten OK Lab Meeting  in der Tür stand und meinte: Serverstrukturen? Das ist mein Job. Ich zeig euch mal schnell, wie das geht.”, beschreibt Lukas den Vorgang.  

Datenerhebungen sind aber kein Selbstzweck, sondern können einerseits die Informationsgrundlage individueller Entscheidungen sein und andererseits von wissenschaftlichen Institutionen genutzt werden. Denn um Umweltbelastungen und klimatischen Veränderungen begegnen zu können, bedarf es erstmal eines klaren Bildes. 

Damit internationale Institutionen Ableitung aus den Daten treffen können, bietet die Sensor.Community Karte eine Reihe von Einstellungen: Die Farbskala kann an verschiedene Referenzrahmen der WHO oder EU angepasst werden. Winddaten können mit einbezogen werden, um z.B. die Verwehung der Osterfeuer-Partikel sichtbar zu machen. Und vor allem ermöglicht die Archivierung der Daten einen Vergleich über Zeit, so lassen sich z.B. verschiedene Feinstaubbelastungen zu Silvester vergleichen und überprüfen, welchen Einfluss z.B. eine Böllereinschränkung 2021 hatte. 

Eine direkte Zusammenarbeit mit Forschungsinstituten ermöglicht es, spezifischer auf deren Bedarfe einzugehen. So gibt es z.B. eine Community Kampagne DIY Sensoren im Umkreis von 250 Meter um eine offizielle Station zu installieren, da es ein Forschungsprojekt gibt, welches nach diesem Parameter Datenvergleiche erhebt. “Leute schreiben uns E-Mails, wenn sie nicht mehr wissen, wo sie ihren dritten oder fünften Sensor anbringen sollen und Fragen, ob es strategisch sinnvolle Orte für Sensoren gibt. Die Kampagne war eine der Reaktionen darauf.”, erzählt Lukas.  

Das Fazit ist und bleibt wohl: Bringt man viele Menschen, möglichst unkompliziert zusammen, lässt sich auch viel erreichen. Dabei ermöglichen digitale Werkzeuge und gemeinsame Interessen sogar eine Zusammenarbeit über Kontinente hinweg. 
