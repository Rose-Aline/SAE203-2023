migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whp0blle",
    "name": "annee_naissance_mort",
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
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // remove
  collection.schema.removeField("whp0blle")

  return dao.saveCollection(collection)
})
