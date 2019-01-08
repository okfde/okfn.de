# OKFDE reloaded

Statische Seite mit Hugo!

## Technisches

### Seite lokal laufen lassen

Hugo installieren (Version > 0.51):

https://gohugo.io/getting-started/installing

Wenn du das Hugo binary manuell installierst, achte darauf die `extended` version zu nehmen, da diese auch Sass kompilieren kann

Developement Server laufen lassen:

``` bash
$ hugo serve
```

Dann auf `localhost:1313`  die Seite anschauen.

### Seite deployen

Ein Push zu GitHub genügt um den Buildprozess anzustoßen.
Im Normalfall musst du dich um nichts kümmern und deine Änderungen sind in ein paar Augenblicken online.

Falls das nicht passiert, hier ein Paar Infos zum Buildprozess und wo du mit der Fahlersuche anfangen kannst.

Im Prozess verläuft in mehreren Stufen:
1. der Push wird von GitHub registriert und stößt einen Build bei [Travis CI](https://travis-ci.com/okfde/okfde-reloaded) an
  - hier wird die Seite mit Hugo gebaut
  - zwei Nodescripte erstellen die Suchindexe (als .json) für die seitenweite und die Blogsuche
  - (wegen dieser Scripte brauchen wir Travis, Hookay kann das nicht alleine)
2. ist ein Travis-Build auf dem Master branch erfolgreich, pusht Travis die gebaute Seite zurück zu GitHub, aber auf den [Release branch](https://github.com/okfde/okfde-reloaded/tree/release)
  - dieser Badge zeigt den Status des letzten Builds an [![Build Status](https://travis-ci.com/okfde/okfde-reloaded.svg?branch=master)](https://travis-ci.com/okfde/okfde-reloaded)
  - ist der Badge rot ist schon was beim bauen der Seite schief gelaufen. Vermutlich was mit Hugo in den Templates, hier musst du debuggen!
3. hat Travis auf den Release branch gepusht, sendet GitHub einen Webhook an [Hookay](https://lab.okfn.de/build-status/)
  - Hookay klont den Release branch auf unseren Server und kopiert ihn an die richtige Stelle
    - es kann sein, dass die Webhook-payload von GitHub sehr groß ist und Hookay dann einen Fehler wwirft. Das kannst du [hier](https://github.com/okfde/okfde-reloaded/settings/hooks/) (sofern du die Rechte hast) nachsehen.
    - Ist beim letzten senden eines Webhooks was schief gelaufen (Fehler 413) dann kannst du über Hookay die Seite manuell neu bauen. Die gebaute Seite liegt ja schon bei GitHub und muss nur kopiert werden.

Wenn alles geklappt hat, sind dein Änderungen jetzt online!


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
- `published`: ob der Post veröffentlicht werden soll, `true` oder `false`
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

``` yaml
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




### Jobs

#### Neues Jobposting


### Vereinsstats

#### Jahresberichte

#### Downloads

### Spenden

### Finanzen

#### Downloads

#### Statistiken

---

## Anderes

### Übersetzungen


### Was ist mit package.json?

Alle notwendigen externen Abhängigkeiten sind extra in js/vendor oder sass/vendor eingecheckt.

Das hat den Vorteil das Menschen nicht extra Node/npm lokal installieren müssen um die Seite zu bearbeiten.

Package.json dient damit eher als informative Liste, was so benutzt wird.

### Suche und Suchindexe

### Build process
