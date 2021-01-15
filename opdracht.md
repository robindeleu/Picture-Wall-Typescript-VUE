# Examenopdracht Januari 2021 - Image Pinboard

Bouw een webapplicatie waarmee gebruikers afbeeldingen kunnen bijhouden of delen met elkaar.
Alle afbeeldingen worden onder elkaar weergegeven in chronologische volgorde waarbij de meest
recente afbeeldingen bovenaan staan.

De basis functionaliteit van de website is te vergelijken met [Instagram](https://www.instagram.com/),
[Twitter](https://twitter.com/), [9gag](https://9gag.com/) en alternatieven... Gebruikers posten
berichten, in dit geval een URL van een afbeelding die reeds op het internet staat. Daarna
kan iedereen de afbeeldingen bekijken in de vorm van één enkele publieke tijdslijn.

## Uitwerking

De applicatie bestaat uit 2 principiële delen. Een deel dat op de server uitgevoerd wordt, ook wel de
API of backend genoemd. Het andere deel wordt op de client in de browser uitgevoerd en wordt de
frontend genoemd.

### Backend

Bouw een REST API aan de hand van Node Express en TypeScript. De applicatie moet het mogelijk maken
om 'posts' te beheren. Een `post` bestaat uit volgende eigenschappen:

* uniek id
* URL
* titel (optioneel)
* tijdstip

De API moet het mogelijk maken alle CRUD acties uit te voeren. Dat wil zeggen dat de API via de
REST principes het mogelijk moet maken nieuwe posts toe te voegen, posts aan te passen, posts
uit te lezen en posts te verwijderen.

De gegevens die over de API uitgewisseld worden moeten opgebouwd worden aan de hand van JSON.

De gegevens moeten bijgehouden worden in een MySQL/MariaDB database. De REST API is verantwoordelijk
voor het correct opzetten van de nodige database, tabelstructuur (schema) en voor de verdere communicatie
die de verschillende CRUD acties mogelijk maakt.

### Frontend

De frontend bestaat uit een Vue.js 3 applicatie geschreven in TypeScript. De applicatie laat
een gebruiker toe met de REST API te interageren aan de hand van een overzichtelijke en gebruiksvriendelijke
webpagina.

De webpagina bevat 2 verschillende onderdelen: Een formulier dat de gebruiker toelaat een nieuwe URL
te posten. Daarnaast bevat de pagina ook een lijst met de verschillende geposte afbeeldingen. De URL
wordt door de webpagina gebruikt om de afbeelding te tonen.

De frontend kan gebruik maken van een CSS framework om stijl te geven aan de inhoud. Een verzorgde stijl
en weergave is gewenst.

### Reverse Proxy

Om het gebruik van de twee verschillende delen te vereenvoudigen is het nodig om gebruik te maken van
een reverse proxy op de server. Op die manier kan de ganse applicatie via 1 enkele origin (combinatie
van protocol, hostname en poort) gebruikt worden.

De backend is via de frontend server te bereiken op het subpath `/api`

## Vereisten

Bij het toekennen van scores zal rekening gehouden worden met volgende vereisten.

### Database

Om de gegevens te beheren moet gebruik gemaakt worden van een MySQL/MariaDB database.

De database naam MOET `examen2021` noemen. De namen van de tabellen en eigenschappen mogen zelf
gekozen worden.

De applicatie moet zelf de tabellen aanmaken in je database ´examen2021´ indien deze niet bestaan.

### Omgevingsvariabelen

Indien de applicaties gevoelige gegevens of applicatie specifieke configuratie bevat, dan
dienen deze gegevens ingesteld te kunnen worden aan de hand van een `.env` bestand.

Voorzie ook een voorbeeldconfiguratie van de `.env` zodat duidelijk is welke parameters ingesteld
kunnen worden.

Indien de gegevens niet voorkomen in een `.env` bestand, dan moeten standaard waarden gebruikt worden.
Gebruik hiervoor volgende waarden:

* Frontend:
  * Host: `localhost`
  * Port: `3000`
* Database:
  * Host: `localhost`
  * Port: `3306`
  * Username: `root`
  * Password: `` (leeg)

### `.gitignore`

Zorg dat enkel de nodige bestanden in Git beheerd worden. Bestanden die gevoelige informatie bevatten
of niet getracked moeten worden mogen niet opgenomen worden in Git. Maak hiervoor gebruik van een
correct `.gitignore` bestand.

### Backend

De backend moet gebouwd worden met Express en geschreven zijn in TypeScript.

Alle dependencies moeten beheerd worden in een `package.json` bestand en moeten
geïnstalleerd kunnen worden via een `npm install` commando.

Het uitvoeren van de server moet kunnen gebeuren via het `npm run` commando.

De backend moet opgebouwd zijn volgens de REST principes om de verschillende CRUD acties te implementeren.

De backend moet data kunnen verwerken in JSON formaat. Andere formaten of afwijkingen zijn niet toegestaan.

### Frontend

De frontend moet gebouwd worden met Vue 3 en geschreven zijn in TypeScript.

Alle dependencies moeten beheerd worden in een `package.json` bestand en moeten
geïnstalleerd kunnen worden via een `npm install`
commando.

Het uitvoeren van de server moet kunnen gebeuren via het `npm run` commando.

### Projectstructuur

De backend en frontend moeten in de respectievelijke mappen geplaatst worden binnen dit project.
Wijzig in geen geval de naam en zorg dat er geen onnodige submappen in geplaatst worden.

De `.gitkeep` bestanden mogen genegeerd of verwijderd worden.

### Engelstalige benamingen

Hou er rekening mee dat de code en implementatie in het Engels geschreven dient te worden.
Er wordt verder geen eisen gesteld aan de taal. Je bent verder vrij te kiezen in welke taal de
applicatie uitgewerkt wordt. Zaken in de frontend die aan de gebruiker getoond worden
mogen in het Nederlands of andere taal vermeld staan.

### Voorbeeld afbeeldingen

Om de applicatie te testen kan je gebruik maken van URL's waarop afbeeldingen te vinden zijn.
Hieronder krijg je een lijst met afbeeldingen die je eventueel kunt gebruiken:

* <https://placeholder.com/>
* <https://picsum.photos/>
* <https://placeimg.com/>
* <https://img.buzzfeed.com/buzzfeed-static/static/2017-08/2/21/asset/buzzfeed-prod-fastlane-02/sub-buzz-13365-1501723644-3.png>
* <https://www.wallpapertip.com/wmimgs/154-1547575_when-my-mum-asks-how-my-exam-is.jpg>
* <https://img.buzzfeed.com/buzzfeed-static/static/2017-08/2/21/asset/buzzfeed-prod-fastlane-03/sub-buzz-22411-1501723723-2.png>
* <https://img.buzzfeed.com/buzzfeed-static/static/2017-08/2/8/asset/buzzfeed-prod-fastlane-02/sub-buzz-4222-1501677778-3.png>
* <https://i.pinimg.com/originals/f7/9d/0d/f79d0d30a2529aa888c776e86d056816.jpg>

## Individuele opdracht

**Deze opdracht is strikt individueel**. Dit betekent dat geen enkele directe of indirecte
manier samenwerken of communicatie over de opdrachten of oplossingen tussen studenten
mag plaatsvinden. Bij vragen mag je **enkel** de docent contacteren.

Indien enige vorm van samenwerking (door directe of indirecte communicatie) vastgesteld
kan worden verdienen alle betrokken partijen automatisch een 0 score voor de betrokken
vraag.

Verder blijft voor de opdracht elke vorm van informatie verwerven beschikbaar. Je mag
en kan dus gerust op het internet informatie opzoeken om een oplossing te bouwen,
indien dit niet ingaat tegen bovenstaande richtlijn. Vermeld altijd je bronnen.

## Indienen

Indien doe je door jouw oplossing via git te pushen in de master branch naar je
persoonlijke GitHub repository waarvan je deze opdracht gecloned hebt, origin.

De deadline voor deze opdracht ligt op **vrijdag 15 januari 16u00**. Zorg dat je voldoende
ruim voor de deadline indient zodat bij eventuele problemen nog ondersteuning kan
gegeven worden. Commits die na deze deadline ingediend worden zullen niet verbeterd
of nagekeken worden.

Zoals meegedeeld zal het tijdstip van de laatste commit in rekening gebracht worden
bij het verbeteren. Er zijn geen extra punten gekoppeld aan dit tijdstip, maar snel indienen
zal wel in rekening gebracht worden bij het verbeteren.

## Hulp of vragen

Indien jullie vragen hebben over de opdrachten kunnen jullie deze stellen via Teams
door rechtstreeks naar de docent (Sille Van Landschoot) een chat bericht te sturen.
Plaats geen vragen in een publiek channel of chat!

Indien er nog algemene zaken verduidelijkt dienen te worden voor iedereen zal dit
meegedeeld worden via Teams in de algemene algemene webscripting chat.

## Ziekte, technische problemen of praktische problemen

Indien je niet in staat bent om de opdracht te maken door ziekte, technische problemen,
praktische problemen of welke reden dan ook, dien je de docent **onmiddelijk** te
verwittigen. Meldingen na datum of na de feiten zullen niet geaccepteerd worden.
Motiveer ook grondig en duidelijk te problemen of situatie.

## Scores

De verschillende onderdelen zullen op volgende manier van een score voorzien worden.

Onderdeel | Punten
---|---
Implementatie backend | 20
Uitwerking backend | 20
Project structuur en configuratie backend | 5
Database | 5
Implementatie frontend | 20
Uitwerking frontend | 20
Project structuur en configuratie frontend | 5
Stijl en presentatie frontend | 5
**Totaal** | **100**

[![Examenopdracht](https://img.youtube.com/vi/a14JjXxXLag/0.jpg)](https://www.youtube.com/watch?v=a14JjXxXLag)
