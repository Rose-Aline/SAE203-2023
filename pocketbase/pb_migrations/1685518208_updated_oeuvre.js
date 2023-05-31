migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbmzaxtj",
    "name": "oeuvre_image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // remove
  collection.schema.removeField("zbmzaxtj")

  return dao.saveCollection(collection)
})
