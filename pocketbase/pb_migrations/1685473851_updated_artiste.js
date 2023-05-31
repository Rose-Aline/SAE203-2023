migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // remove
  collection.schema.removeField("or4obx9e")

  // remove
  collection.schema.removeField("rvdm78zt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fag2mm73",
    "name": "naissance_mois_jour_annee",
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
    "id": "lovfrzde",
    "name": "deces_mois_jour_annee",
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

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("fag2mm73")

  // remove
  collection.schema.removeField("lovfrzde")

  return dao.saveCollection(collection)
})
