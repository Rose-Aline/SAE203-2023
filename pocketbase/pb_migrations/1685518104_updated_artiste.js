migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "as7mwfkw",
    "name": "portrait",
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
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // remove
  collection.schema.removeField("as7mwfkw")

  return dao.saveCollection(collection)
})
