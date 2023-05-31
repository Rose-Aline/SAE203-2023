migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // remove
  collection.schema.removeField("ftuchnoq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftuchnoq",
    "name": "oeuvres",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1m2yr1fltfjhbu6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
