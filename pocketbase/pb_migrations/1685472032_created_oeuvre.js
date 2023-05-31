migrate((db) => {
  const collection = new Collection({
    "id": "1m2yr1fltfjhbu6",
    "created": "2023-05-30 18:40:32.738Z",
    "updated": "2023-05-30 18:40:32.738Z",
    "name": "oeuvre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fbxqcjh4",
        "name": "nom_oeuvre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mrx5qid7",
        "name": "date_de_creation",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6");

  return dao.deleteCollection(collection);
})
