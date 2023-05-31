migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // remove
  collection.schema.removeField("pqsizn0s")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dwkyf2q",
    "name": "description_oeuvre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pqsizn0s",
    "name": "date_creation_jour_mois_annee",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("ykl9iglt")

  // remove
  collection.schema.removeField("5dwkyf2q")

  return dao.saveCollection(collection)
})
