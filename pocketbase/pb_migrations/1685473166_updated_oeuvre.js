migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // remove
  collection.schema.removeField("mrx5qid7")

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

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m2yr1fltfjhbu6")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("pqsizn0s")

  // remove
  collection.schema.removeField("wra6jxib")

  return dao.saveCollection(collection)
})
