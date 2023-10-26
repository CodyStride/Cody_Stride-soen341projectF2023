/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("quwqok9ivcg68ye")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rqzcfjof",
    "name": "Age",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgthizn7",
    "name": "Number_of_Listings",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("quwqok9ivcg68ye")

  // remove
  collection.schema.removeField("rqzcfjof")

  // remove
  collection.schema.removeField("rgthizn7")

  return dao.saveCollection(collection)
})
