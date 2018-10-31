---
authors: Ernesto Ruge
date: 2018-09-17
image:
  src: /files/blog/2018/09/oparl.png
  title: "OParl: Der Standard für Ratsinformationssysteme"
tags:
- Ratsinformationssystem
- Transparenz
- Kommunen
- Schnittstelle
- OParl

type: post
layout: post
card: true
published: true
title: "OParl 1.1: Neue Version des Standards - und viel Aktivität"
---

Vor zwei Jahren haben wir mit der [offenen Schnittstelle OParl](https://oparl.org) 1.0 den ersten großen Schritt zur Transparenz kommunaler Beschlüsse gemacht. Seitdem ist viel passiert:
* Die vier größten Ratsinformationssystem-Hersteller haben ein OParl-Modul für ihre Software entwickelt, sodass Kommunen OParl ganz einfach in ihre bestehende Software integrieren können.
* Ca. 30 Kommunen haben eine offizielle OParl-Schnittstelle, in etlichen weiteren Kommunen ist das OParl-Modul zur Zeit in Einrichtung. Zuletzt dazugekommen sind Aachen und der Kreis Viersen.
* Die Daten von 30 weiteren Kommunen wurden nach OParl-Standard aufbereitet.
* [Zwei Förderprojekte](https://oparl.org/2017/06/30/erste-finanzierung-fuer-oparl-projekte/) haben dafür gesorgt, dass für OParl eine Vielzahl von bürgerfreundlicher Open-Source Software entstanden ist.
* Die Weiterentwicklung ist im vollen Gange: z.B. werden zur Zeit [im OK Lab Köln](https://www.meetup.com/de-DE/OKLab-Koln-Meetup/events/253670563/) neue Bedienungskonzepte für Ratsinformationssysteme entwickelt.
* In NRW haben Vertreter von OKFN und [dem kdvz](https://www.kdvz-frechen.de/) einen Arbeitskreis im Rahmen der Open Government Strategieentwicklung des Landes NRW gegründet, welcher OParl auch auf politischer Ebene landes- und später bundesweit verbreiten will. Kontakt: [Karl-Matthias Pick](mailto:kmpick@kdvz-frechen.de).

Die intensive Beschäftigung mit den real vorliegenden Daten führte zu verschiedenen Verbesserungsvorschlägen, welche das OParl-Team gesammelt und in den Standard eingearbeitet hat. Herausgekommen ist die neue OParl-Version 1.1, welche bereits im OParl Mirror, einem Spiegel aller OParl-Daten, umgesetzt wurde.

## OParl 1.1: die neue Version des Ratsinformationssystem-Datenstandards

Das wichtigste Feature von OParl 1.1 ist [ein neuer, verbesserter Update-Mechanismus](https://oparl.org/spezifikation/online-ansicht/#aktualisierungsmechanismus), welcher partielle Updates von Datenbeständen erheblich ressourcenschonender macht. Der in OParl 1.0 definierte Mechanismus erwies sich in der Praxis als schlecht durchführbar, so dass mit 1.1 in Zusammenarbeit mit den Herstellern ein neuer, praxisnaher Mechanismus geschaffen wurde. In der Praxis bedeutet dies nun für alle Objekte Listen, welche als Attribut von Body bereitgestellt werden.

Außerdem wurden zahlreiche kleine Fehler und Kleinigkeiten hinzugefügt. Sei es SHA512 statt SHA1 für die Datei-Hashes, seien es Rückreferenzen, die zur Vollständigkeit dazugehörten, sei es die Definition eines Fehlerobjektes zur Ausnahmebehandlung: an verschiedenen Stellen wurden aus den Praxisanforderungen heraus Fehler behoben und neue Attribute geschaffen.

OParl 1.1 ist dabei nach Semver-Regeln kompatibel zu OParl 1.0, sodass bestehende OParl 1.0-Server ebenso wie OParl 1.0-Clients problemlos weitergenutzt werden können. Nichtsdestotrotz lohnt sich natürlich das Update, weil die Features aus der praktischen Arbeit mit den Daten entstandene Bedürfnisse abdecken und Probleme lösen.

## Die Zukunft: erst einmal mehr Daten!

Zwei große Themen wurden bislang in OParl nicht behandelt: die Vereinheitlichung von Begriffen und die Definition einer flexiblen Suche. Beide Themen sind nun Ziel von OParl 2.0, sind aber hochkomplex, da es im deutschsprachigen Raum eine große Vielfalt von kommunalpolitischen Mechanismen gibt. Daher ist OParl 2.0 ein eher mittel- bis langfristiges Ziel, während OParl 1.1 auf längere Zeit die in Kommunen existierenden Daten abdecken wird.

Um überhaupt einen Überblick über die kommunalpolitische Landschaft im deutschsprachigen Raum zu bekommen, wäre es daher um so wichtiger, dass möglichst viele Kommunen ihre Beschlüsse via OParl anbieten. Außerdem wird jeder neue OParl-Endpunkt kostenlos in den OParl Mirror und auf Politik bei uns aufgenommen, so dass Bürgerinnen und Bürger eine intuitivere Oberfläche für ihre Stadt bekommen.

Um als Kommune OParl zu unterstützen, wenden Sie sich bitte an den Hersteller Ihres Ratsinformationssystems. Auch Bürgerinnen und Bürger können dies anregen. Weitere Informationen wie z.B. [eine Vorlage für den Rat haben wir auf Politik bei uns](https://politik-bei-uns.de/info/mitmachen) gesammelt. Und vergessen Sie nicht, uns den neuen Endpunkt mitzuteilen, damit Ihre Daten auch verwendet werden können!
