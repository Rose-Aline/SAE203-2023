migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // remove
  collection.schema.removeField("5dwkyf2q")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

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
})
