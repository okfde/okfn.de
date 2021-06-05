---
authors: 
- Arne Semsrott
date: 2021-06-05
image:
  src: /files/jobs/fds1.png
  title: "FragDenStaat-Logo"
  license:
  license_url: 
published: true
title: "Wir suchen eine eine*n Software-Entwickler*in für FragDenStaat!" 
---

Der*die Software-Entwickler*in arbeitet als Teil eines kleinen Teams an der Code Base von FragDenStaat, um neue Funktionen zu entwickeln, Bugs zu fixen und Design-Entwürfe umzusetzen.

Wir streben eine gleichmäßige Repräsentation gesellschaftlicher Gruppen im Team an und möchten den Anteil von Menschen mit Migrationsgeschichte, Schwarzen Personen/PoCs und Menschen mit Behinderungen im Team erhöhen.

## Wer wir sind

FragDenStaat ist das Portal für Informationsfreiheit in Deutschland. Seit 2011 ermöglicht es allen Menschen, einfach und transparent Informationen von Behörden zu befreien – mit technischen Tools, Kampagnen, strategischen Klagen und journalistischer Berichterstattung.  Inzwischen haben rund 100.000 Personen insgesamt 180.000 Anfragen über FragDenStaat gestellt. In den vergangenen drei Jahren haben wir 90 Klagen gegen deutsche und EU-Behörden eingereicht.

Trägerverein von FragDenStaat ist der gemeinnützige Open Knowledge Foundation Deutschland e.V. mit Sitz in Berlin, der sich für offenes Wissen, Transparenz und Beteiligung einsetzt. Unsere Arbeit ist spendenfinanziert, unabhängig, überparteilich und interdisziplinär.

Informationsfreiheit ist uns ein Herzensanliegen. FragDenStaat ist ursprünglich als ehrenamtliches Projekt gestartet und wird inzwischen von einem zehnköpfigen hauptamtlichen Team getragen. Wir wachsen weiter und haben viel vor, um Informationsfreiheit in Deutschland und auf EU-Ebene strategisch voranzubringen. Dafür suchen wir Verstärkung!

## Unsere Plattform aus technischer Sicht

Die Plattform FragDenStaat.de gibt es seit fast 10 Jahren. In der Zeit ist viel Code entstanden, wir haben es aber geschafft, alle Komponenten immer auf einem relativ aktuellen Stand zu halten. Als kleine Organisation haben wir nicht die Kapazitäten, den neuesten technischen Trends zu folgen. Stattdessen versuchen wir auf moderne, aber bewährte Technologien zu setzen, die uns langfristig gute Dienste leisten. Unser Tech-Stack ist breit aufgestellt, aber nicht außergewöhnlich. Wir möchten möglichst langweilige Standard-Komponenten verbauen (siehe auch) und nur dort selbst coden, wo es den Kern unseres Projekts betrifft.

Die Grundlage von FragDenStaat ist „froide“ – eine Sammlung von Django-Apps, die zusammen eine Informationsfreiheitsplattform ergeben. Diese Sammlung wird in einem Django-Projekt genutzt, zusammen mit weiteren Apps, die unser CMS (Django-CMS), unseren Blog, unseren Newsletter und unser Spendensystem antreiben. Wir nutzen ein per SCSS angepasstes Bootstrap 4 und dort, wo es sinnvoll ist, nutzen wir im Frontend Vue-Komponenten.

Ein nginx-Server mit gunicorn liefert FragDenStaat.de und unseren Onion-Dienst aus. Wir nutzen PostgreSQL+PostGIS als Datenbank, Elasticsearch als Suchindex, Celery mit RabbitMQ für Hintergrund-Tasks, Redis als Channel für ASGI/WebSockets und Postfix als E-Mail-Server. Das Deployment funktioniert über Ansible, zusätzlich nutzen wir Hubot, um aus Slack heraus zu deployen. Ein cookie-freies Matomo zählt Besucher und ein Sentry schreibt Errors mit. All unserer Code ist auf GitHub zu finden:

- Froide als Kernkomponente: https://github.com/okfde/froide/

- FragDenStaat.de Django-Projekt: https://github.com/okfde/fragdenstaat_de/

- Ansible Deployment: https://github.com/okfde/fragdenstaat.de-ansible

- Alle weiteren Repos: https://github.com/search?q=topic%3Afragdenstaat+org%3Aokfde+fork%3Atrue

## Technische Herausforderungen der nächsten Jahre

FragDenStaat wächst: mehr Mitarbeitende, mehr Anfragestellende, mehr Dokumente. Die Technik muss mitwachsen: Unser Speichersystem und unsere Task Queues müssen skalierbarer werden. Dienste müssen auf mehr Server aufgeteilt werden. Vielleicht sollten manche Dienste in die Cloud. Features müssen konsolidiert werden, um sie wartbar zu halten. Die Testabdeckung ist dem Wachstum leider nicht gefolgt. Auch werden neue Legal-Tech-Komponenten dazu kommen, die integriert werden sollen. Gleichzeitig ist FragDenStaat für spontane Aktionen und IFG-Hacks bekannt, die bei Bedarf Deine technische Kreativität erfordern.

## Wen wir suchen

Für den Betrieb und die Weiterentwicklung von FragDenStaat.de sind wir auf der Suche nach einer engagierten und aufgeschlossenen Persönlichkeit, die Lust hat, gemeinsam mit uns das Projekt weiterzuentwickeln und das Berliner Kernteam zu verstärken.

In diesen Bereichen wirst du arbeiten:

- Weiterentwicklung der Plattform (Backend und Frontend) mit besonderem Fokus auf die bessere Nutzbarkeit von FragDenStaat für möglichst viele Menschen

- Kontaktperson bei Bugs für das FragDenStaat-Team und unsere Nutzer*innen

- Überwachung, Wartung und Ausbau der Server-Infrastruktur

Wir möchten die anfallenden Tätigkeiten und auch die wöchentliche Arbeitszeit so arrangieren, dass sie zu Dir passen.


## Profil

Bei uns gibt es viel Raum für Deine eigenen Ideen. Das Projekt lebt von dem starkem Engagement und Einsatz aller Teammitglieder. Dementsprechend wünschen wir uns von Dir, dass Du eigenständig arbeitest und ein gutes Zeitmanagement mitbringst. Bei uns gibt es viel Raum für Entwicklung und Deine eigenen Ideen.

Du solltest folgende Qualifikationen und Interessen mitbringen:

- mehrjährige Erfahrung in der Webentwicklung mit Python und Django

- mehrjährige Erfahrung mit Frontend-Technologien (wir nutzen aktuell im Frontend u.a. Webpack, Vue, Bootstrap, SCSS)

- Erfahrung mit einigen der Technologien in unserem Stack

- Bereitschaft, „im Offenen“ zu arbeiten: all unser Code ist Open Source

Du solltest Freude daran haben, an der Schnittstelle von Technik und Politik neue kreative Wege in der Informationsfreiheit zu beschreiten. Teamarbeit ist uns sehr wichtig – offene und wertschätzende Kommunikation mit Kolleg*innen und Kooperationspartner*innen auch aus anderen Fachbereichen sind daher unabdingbar.

**Du glaubst, dass ein paar Aspekte aus der Ausschreibung nicht zu Dir passen, aber viele andere schon? Dann bewirb Dich bitte trotzdem.**

## Was wir bieten

Wir bieten dir:
 
- Eine sinnstiftende Tätigkeit zur Stärkung von Demokratie und Informationsfreiheit

- enge Zusammenarbeit mit dem hauptamtlichen Team von FragDenStaat sowie mit unseren Kooperationspartner:innen

- dazuzulernen in den Bereichen, die Dir wichtig sind, auch durch Fortbildungen

- flexible, familienfreundliche Arbeitszeiten

- Unterstützung bei technischen Hilfsmitteln

- Eine gute Büroatmosphäre in Berlin mit einem motivierten Team – Home Office und auch remote arbeiten ist möglich. Das Büro ist mit Fahrstuhl stufenfrei erreichbar.

- Eine Vergütung angelehnt an TV-L E13, Stufe 1, 2 oder 3, abhängig von Erfahrung

- 28 Urlaubstage im Jahr

Die Stelle ist zum 15. Juli 2021 zu besetzen. Sie ist derzeit aus finanziellen Gründen auf zwei Jahre befristet. Wir streben eine Verlängerung an.

Bitte schicke uns Deine Bewerbung mit Anschreiben, Lebenslauf, möglichem Beginn und bevorzugtem Stundenumfang **bis zum 27. Juni 2021** per E-Mail an Arne unter jobs@okfn.de, gerne auch PGP-verschlüsselt. Wir möchten vor allem wissen, woran Du Interesse hast, wofür Du dich engagierst, was Du gut kannst, was Dich bewegt und motiviert. Sende uns gerne Arbeitsproben von Projekten zu, an denen Du gerne gearbeitet hast. Bitte sende uns weder Bewerbungsfotos noch Angaben zu Alter und Familienstand zu. Ob du einen Hochschulabschluss hast, ist für uns nicht entscheidend. Zeugnisse brauchen wir nicht.

## Wie es weitergeht

Wir werden alle Bewerbungen sichten, ggf. nachanonymisieren und dann dem Personalverantwortlichen zur Auswahl vorlegen (erste Runde). Im Anschluss werden wir ausgewählten Kandidat*innen eine kleine Aufgabe stellen. Nach Sichtung der Ergebnisse wird die Anonymisierung aufgehoben, um zur dritten Runde Bewerber*innen zum persönlichen Kennenlernen einzuladen. Diese Gespräche finden voraussichtlich vom 30.06.-02.07.2021 online statt.
