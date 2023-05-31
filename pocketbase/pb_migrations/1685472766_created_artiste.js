migrate((db) => {
  const collection = new Collection({
    "id": "nzm15jqpsqyuhi4",
    "created": "2023-05-30 18:52:46.071Z",
    "updated": "2023-05-30 18:52:46.071Z",
    "name": "artiste",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d7l1gvou",
        "name": "nom_artiste",
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
        "id": "onji88c9",
        "name": "nationalite",
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
        "id": "or4obx9e",
        "name": "naissance_mois_jour_annee",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "rvdm78zt",
        "name": "deces_mois_jour_annee",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4");

  return dao.deleteCollection(collection);
})
