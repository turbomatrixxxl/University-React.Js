# Introducere

## Instalarea JSON Server

```
npm install -g json-server
```

Creează un fișier db.json cu câteva date

```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

### Pornirea JSON Server

```
json-server --watch -p 3001 db.json

sau

npx json-server db.json
```

Acum, dacă mergi la http://localhost:3001/tutors/1, vei obține

{ "id": 1, "title": "json-server", "author": "typicode" }

De asemenea, atunci când faci cereri, este bine să știi că:

- Dacă faci cereri de tip POST, PUT, PATCH sau DELETE, modificările vor fi
  salvate automat și în siguranță în db.json folosind lowdb. JSON-ul din corpul
  cererii tale ar trebui să fie un obiect închis, la fel ca ieșirea GET (de
  exemplu {"name": "Foobar"}).

- Valorile id nu sunt mutabile. Orice valoare id din corpul unei cereri PUT sau
  PATCH va fi ignorată. Doar o valoare setată într-o cerere POST va fi
  respectată, dar numai dacă nu este deja luată.

- O cerere POST, PUT sau PATCH ar trebui să includă un antet Content-Type:
  application/json pentru a folosi JSON-ul din corpul cererii. În caz contrar,
  va returna un cod de stare 2XX, dar fără ca modificările să fie făcute în
  date.
