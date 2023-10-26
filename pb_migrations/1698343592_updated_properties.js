/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hyio2eons7014g6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "opvkx16b",
    "name": "brokerid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "quwqok9ivcg68ye",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hyio2eons7014g6")

  // remove
  collection.schema.removeField("opvkx16b")

  return dao.saveCollection(collection)
})
