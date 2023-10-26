/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hyio2eons7014g6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q911432v",
    "name": "image",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hyio2eons7014g6")

  // remove
  collection.schema.removeField("q911432v")

  return dao.saveCollection(collection)
})
