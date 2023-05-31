migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykl9iglt",
    "name": "date_oeuvre",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykl9iglt",
    "name": "date_creation_jour_mois_annee",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
