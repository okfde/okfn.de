# OKFDE reloaded

Statische Seite mit Hugo!

## Technisches

### Seite lokal laufen lassen

Hugo installieren (Version > 0.51):

https://gohugo.io/getting-started/installing

Wenn du das Hugo binary manuell installierst, achte darauf die `extended` version zu nehmen, da diese auch Sass kompilieren kann

Developement Server laufen lassen:

```bash
$ hugo serve
```

Dann auf `localhost:1313` die Seite anschauen. (Die Suche wird hier nicht funktionieren, weil die Indexe fehlen)

### Seite lokal laufen lassen mit Suche

Die Seite benutzt [pagefind](http://pagefind.app) für die Suche. Wenn du lokal die Suche testen möchtest,
musst du den Index bauen. Das geht so:

```bash
$ hugo && \
  npx --yes pagefind@1.3.0 --site public
```

Dann in `/public` einen HTTP-Server starten.

### Seite deployen

Ein Push zu GitHub genügt um den Buildprozess anzustoßen.
Im Normalfall musst du dich um nichts kümmern und deine Änderungen sind in ein paar Minuten online.

Falls das nicht passiert, findest du unten unter 'Anderes' und 'Buildprozess' mehr Infos.

---

## Inhalte bearbeiten

### Blogpost

Alle Blogposts befinden sich in `content/blog/` und nach Jahren organisiert.

#### Neuer Post

Ein Beispiel für einen neuen Blogpost findest du in `archetypes/post.md`.

Erstelle eine neue Datei in `content/blog/<jahr>/` und kopiere die Dummydaten aus der Archetypesdatei.

- `authors`: eine Liste der Autoren
- `date`: das Veröffentlichungsdatum. Wird zur Sortierung benutzt
- `image`: ein Bild das in Social Media Links angezeigt wird und optional bei _Featured_ (siehe unten). Bitte achte auf angemessene Bildgrößen! Ein Bild direkt von Flickr oder deiner Kamera ist in den meisten Fällen viel zu groß!
- `tags`: eine Liste von Tags
- `type` und `layout` für intere Sachen. Bitte nicht verändern
- `draft`: `true` falls der Post noch nicht veröffentlicht werden soll
- `title`: der Titel des Posts
- `featured`: siehe unten

#### Featured!

_Featured_ ist ein neues Feature.

Auf der Startseite und auf der ersten Seite des Blogs wird ein Blogpost gefeatured, d.h. groß und mit buntem Hintergrund und Bild angezeigt.

Die Logik hinter _Featured_ ist, das immer der aktuellste Post, bei dem `featured` gesetzt ist, als feature erscheint. Dein POst soll nicht gefeatured werden? Lösche `featured` aus deinem Post.

`featured` kann zwei Werte haben `yellow` und `blue`, die einen gelben oder blau/türkisen Hintergrund definieren.

### Teammitglieder

Alle Teammitglieder und Vorstände sind in `data/team.yml` zu finden.

#### Neues Mitglied

Um ein neues Mitglied hinzuzufügen, kopiere einen Listeneintrag (oder das leere Beispiel) und setze ihn an das Ende der Datei.
Die folgenden Felder werden unterstützt:

```yaml
- name:
  title:
  img:
  staff: 1
  board: 0
  advisory: 0
  position:
  position_en:
  bio:
  bio_en:
  mail:
  twitter:
  mastodon:
  website:
```

Die 0 und 1 werden als true und false Werte behandelt. Sprich, `staff: 1` bedeutet aktives Teammitglied, `staff: 0` bedeutet ehemaliges Teammitglied

Die Übersetzungen der Bio und der Position sind direkt hier mit dabei.

`img` sollte dem Namen der Bilddatei entsprechen, die du in `static/team` als `.jpg` ablegst. Bitte achte darauf keine gigantischen Bilder zu benutzen, denn Nutzer wollen nicht 2 Minuten auf ein Bild warten. 300 x 200 Pixel in guter Qualität sind absolut ausreichend.

### Projekte

Alle Projekte befinden sich unter `content/projekte`.
Dabei hat jedes Projekt zwei Dateien, eine deutsch- (`.md`) und eine englischsprachige (`.en.md`).

#### Neues Projekt

Lege in `content/projekte` zwei Dateien an: `einproject.md` und `deinproject.en.md`.
In `archetypes/project.md` findet du die Beispiel mit Felder, die ein Projekt haben kann.

Hier kurz Erklärungen zu den einzelnen Feldern:

- `title` ist der Name des Projektes
- `subtitle` is die Tagline
- `kategorien` is nur für die deutschsprachige Seite wichtig und kann auf der englischen gelöscht werden. Es soll eine Liste mit ein oder mehreren Kategorien sein, nach denen auf der Projektseite gefiltert werden kann
- `categories` ist nur für die englischsprachige Seite wichtig und kann auf der deutschen gelöscht werden. Es soll eine Liste mit ein oder mehreren KAtegorien sein, nach denen auf der englischen Projektseite gefiltert werden kann.
- `tile` bestimmt wie das Projekt auf der Projektübersichtsseite dargestellt wird. `Single` beschreibt eine kleine Fläche, `double` die doppelt so große. Soll ein Projekt nur unter "Weitere Projekte" gelistet werden, dann kannst du dieses Feld löschen
- `website` die url zur Website des Projektes

### Jobs

Jobs sind nun getrennt von Blogposts, bekommen aber trotzdem eine eigene Seite, die verlinkt und geteilt werden kann.

#### Neues Jobposting

Um eine neue Stellenaussschreibung hinzuzufügen, musst du in `content/jobs` eine neue Markdown-Datei anlegen.
In `archetypes/jobs.md` kannst du dir eine Vorlage für das Markdown ansehen, kopieren und anpassen.

Um das Jobposting zu entfernen, einfach die entsprechende Markdown-Datei löschen.

### Vereinsstats

Unter `/verein` sind einige Fakten in Zahlen angegeben. Diese befinden sich in `/content/verein.md` und `content/verein.en.md` unter dem Key 'stats'. Unter diesem Key gibt es eine Liste aus Schlüssel/Wertpaaren die immer eine Zahl und einen Text dazu definieren. Diese können beliebig verändert werden.

#### Jahresberichte

Ebenfalls auf `/verein` befinden sich die herunterladbaren Jahresberichte bzw Tätigkeitsberichte. Diese werden in `/data/jahresberichte.yml` definiert. Pro Eintrag gibt es immer:

- `year` das Jahr des jeweilgen Jahresberichtes
- `img` ein Pfad zum Teaserbild
- `pdf` ein Pfad zum Jahresbericht als PDF zum downloads
- jeweils `title` und `text` under den Sprachoptionen

!!Achtung: Den aktuellen Bericht keinesfalls schon auf der Webseite verlinken, bevor nicht 1. die Mitgliederversammlung ihn abgesegnet hat und 2. der Wirtschaftsprüfer die Zahlen freigegeben hat!!

Sobald das passiert ist: Für einen neuen Eintrag, einfach einen alten kopieren, an den _Anfang_ der Datei setzen (es wird nicht extra sortiert, die Reihenfolge in der Datei ist wichtig) und anpassen.

#### Downloads

Der letzte Abschnitt auf `/verein` listet verschiedene herunterladbare Dokumente, die die Organisation als Verein betreffen.

Diese sind under `/data/downloadsverein.yml` definiert und können dort auch angepasst und verändert werden. Es gibt die Felder `title` und `text` jeweils auf deutsch und englisch und dann `path` der Pfad zur herunterladbaren Datei.

### Finanzen

Auf der Finanzseite gibt es mehrere Grafiken, die die Entwicklung und Einnahmen/Ausgaben aufschlüsseln.

Unter `/finanzen` befinden sich die herunterladbaren Jahresabschlüsse und Berichte der Wirtschaftsprüfung. Diese werden in `/data/downloadsfinanzierung.yml` definiert.

- Jeweils `title` und `text` under den Sprachoptionen, wie sonst auch.
- Ein Eintrag mit nur einer verlinkten Datei setzt einen Link mittels `path`
- Mehrjährige Einträge definieren mit `years` eine Liste an Jahren, die gleichzeitig das Ende eines Dateinamen bilden und ein `prefix` mit Pfad und Dateinamenanfang.
  - Beispiel: `prefix: /pfad/zur/datei` wird mit einem Eintrag für 1984 in der liste an `years` zu einem Link auf `/pfad/zur/datei-1984.pdf`.

Das zugehörige Partial template ist zur Zeit unter `layouts/partials/downloads/finanzierung.html` zu finden.

Für einen neuen Eintrag, einfach einen alten kopieren, an den _Anfang_ der Datei setzen (es wird nicht extra sortiert, die Reihenfolge in der Datei ist wichtig) und anpassen.

Die Grafiken werden dynamisch aus CSV-Dateien erstellt, die sich in `/static/okf/finanzierung` befinden.
Pro Grafik existiert eine CSV-Datei, deren Inhalte jeweils angepasst werden können. Die Dateinahmen und das Schema dürfen nicht verändert werden, weil sonst das Script kaput geht.

#### Downloads

Ebenfalls auf der Finanzierungsseite zu finden sind weitere Downloads. Diese sind in `/data/downloadsfinanzierung.yml` festgehalten. Sie funktionieren wie die anderen Downloads auch mit der Ausnahme des letzen Eintrags. Hier gibt es eine Liste der Gewinn- und Verlustrechnungen der vergangenen Jahre, die anstelle eines kleinen Beschreibungstextes aufgeführt werden. Damit das (auch für weitere Jahre) funktioniert, müssen diese unter `/static/files/documents/OKF-DE-Gewinnermittlung-kurz-<jahr>.pdf` abgelegt werden. Dabei ist `<jahr>` mit dem entsprechenden Jahr zu ersetzen.

---

## Anderes

### Übersetzungen

Alle Inhalte, abgesehen von Blogposts, sind auf deutsch und englisch vorhanden.
In den meisten Fällen wird eine Markdowndatei `.md` mit einem äquivalenten, aber übersetzten `.en.md` bereitgestellt.
Manchmal, gerade wenn Informationen in `/data` als yml liegen, gibt es Übersetzungsspezifische Keys.

Templateübersetzungen finden sich in `/i18n/`.

### Wohin soll ich meine Bilder, PDFs etc verschieben?

Alle Bilder, PDFs oder sonstige Assets kannst du in `/static` ablegen.
Während des Buildprozesses wird der Inhalt von `/static` direkt in das Roorverzeichnis kopiert.

Was heißt das für die Dateipfade?

Ein Bild das in `/static/bild.png` liegt wird direkt unter `okfn.de/bild.png` verfügbar sein. Also die Ordnerstruktur bleibt die gleiche, `/static` am Anfang muss weg.

### Eine alte URL geht jetzt nicht mehr :(

Du kannst für einen Post oder eine Seite einen 'Alias' anlegen. Hugo wird dann von diesem Alias auf die aktuelle Seite weiterleiten. Das funktioniert über das `aliases:` keyword im Frontmatter.

```yaml
aliases:
  - /blog/old-post-url/
  - /blog/maybe-even-older/url/
```

### Was ist mit package.json?

Alle notwendigen externen Abhängigkeiten sind extra in js/vendor oder sass/vendor eingecheckt.

Das hat den Vorteil das Menschen nicht extra Node/npm lokal installieren müssen um die Seite zu bearbeiten.

Package.json dient damit eher als informative Liste, was so benutzt wird.

### Suche

Die seitenweite Suche und Blogsuche funktionieren komplett clientseitig mit PageFind.

### Buildprozess

Der Buildprozess verläuft in mehreren Stufen:

1. der Push wird von GitHub registriert und stößt einen GitHub-Actions-Build an

- hier wird die Seite mit Hugo gebaut
- zwei Nodescripte erstellen die Suchindexe für die seitenweite und die Blogsuche
- der Atom und RSS feed wird an die selben Stellen kopiert, auf der sie auf der alten Seite zu finden waren

2. ist der Build erfolgreich, pusht GitHub-Actions die gebaute Seite auf den [Release branch](https://github.com/okfde/okfn.de/tree/release)

- tritt beim build ein Fehler auf, bekommst du eine E-Mail. Vermutlich was mit Hugo in den Templates, hier musst du debuggen!

3. wurde auf den Release branch gepusht, sendet GitHub einen Webhook an [Hookay](https://lab.okfn.de/build-status/)

- Hookay klont den Release branch auf unseren Server und kopiert ihn an die richtige Stelle
  - es kann sein, dass die Webhook-payload von GitHub sehr groß ist und Hookay dann einen Fehler wwirft. Das kannst du [hier](https://github.com/okfde/okfn.de/settings/hooks/) (sofern du die Rechte hast) nachsehen.
  - Ist beim letzten senden eines Webhooks was schief gelaufen (Fehler 413) dann kannst du über Hookay die Seite manuell neu bauen. Die gebaute Seite liegt ja schon bei GitHub und muss nur kopiert werden.

Wenn alles geklappt hat, sind dein Änderungen jetzt online!
