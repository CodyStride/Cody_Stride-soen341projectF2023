/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hyio2eons7014g6")

  // remove
  collection.schema.removeField("zxxp0bvs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2nhxw7cb",
    "name": "type",
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
  const collection = dao.findCollectionByNameOrId("hyio2eons7014g6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxxp0bvs",
    "name": "type",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8yjclinmuvbxn38",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("2nhxw7cb")

  return dao.saveCollection(collection)
})
