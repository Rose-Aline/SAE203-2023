migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wra6jxib",
    "name": "realisateur",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "nzm15jqpsqyuhi4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wra6jxib",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "nzm15jqpsqyuhi4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
