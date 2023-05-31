migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

  // remove
  collection.schema.removeField("fag2mm73")

  // remove
  collection.schema.removeField("lovfrzde")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vycbffz4",
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
    "id": "4rcxmawp",
    "name": "deces_mois_jour_annee",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzm15jqpsqyuhi4")

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

  // remove
  collection.schema.removeField("vycbffz4")

  // remove
  collection.schema.removeField("4rcxmawp")

  return dao.saveCollection(collection)
})
